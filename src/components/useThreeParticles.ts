// src/composables/useThreeParticles.ts
import { onMounted, onUnmounted, shallowRef } from 'vue'
import * as THREE from 'three'

export function useThreeParticles() {
  const canvasRef = shallowRef<HTMLCanvasElement | null>(null)
  let scene: THREE.Scene | null = null
  let camera: THREE.OrthographicCamera | null = null
  let renderer: THREE.WebGLRenderer | null = null
  let particles: THREE.Points | null = null
  let animationId: number | null = null

  const init = () => {
    if (!canvasRef.value) return

    // 🎨 Escena
    scene = new THREE.Scene()

    // 📷 Cámara ortográfica (2D-like)
    const w = window.innerWidth
    const h = 250
    camera = new THREE.OrthographicCamera(-w / 2, w / 2, h / 2, -h / 2, 1, 1000)
    camera.position.z = 100

    // 🖼️ Renderer
    renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.value,
      alpha: true,
      antialias: true,
    })
    renderer.setSize(w, h)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 0)

    // ✨ Partículas
    createParticles()

    // 🖥️ Resize
    const onResize = () => {
      if (!renderer || !camera) return
      const w = window.innerWidth
      const h = 250
      camera.left = -w / 2
      camera.right = w / 2
      camera.top = h / 2
      camera.bottom = -h / 2
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    // 🔄 Limpieza
    onUnmounted(() => {
      window.removeEventListener('resize', onResize)
      destroy()
    })

    animate()
  }

  const createParticles = () => {
    if (!scene) return

    const particleCount = 400
    const geometry = new THREE.BufferGeometry()

    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    const alphas = new Float32Array(particleCount)
    const velocities = new Float32Array(particleCount)

    // 🎨 Gradiente circular (brillo suave)
    const canvas = document.createElement('canvas')
    canvas.width = 64
    canvas.height = 64
    const ctx = canvas.getContext('2d')!
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
    gradient.addColorStop(0, '#FFFFFF')
    gradient.addColorStop(0.3, '#C4B5FD')   // lila claro
    gradient.addColorStop(0.7, '#8B5CF6')   // violeta (indigo-500)
    gradient.addColorStop(1, 'transparent')
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(32, 32, 32, 0, Math.PI * 2)
    ctx.fill()

    const texture = new THREE.CanvasTexture(canvas)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * window.innerWidth * 2
      positions[i * 3 + 1] = (Math.random() - 0.5) * 250
      positions[i * 3 + 2] = 0

      colors[i * 3] = 1
      colors[i * 3 + 1] = 1
      colors[i * 3 + 2] = 1

      sizes[i] = Math.random() * 8 + 2
      alphas[i] = Math.random() * 0.6 + 0.3
      velocities[i] = Math.random() * 50 + 20
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    geometry.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1))

    const material = new THREE.ShaderMaterial({
      uniforms: {
        pointTexture: { value: texture },
      },
      vertexShader: `
        attribute float alpha;
        varying float vAlpha;
        varying vec3 vColor;
        void main() {
          vAlpha = alpha;
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D pointTexture;
        varying float vAlpha;
        varying vec3 vColor;
        void main() {
          vec4 texColor = texture2D(pointTexture, gl_PointCoord);
          gl_FragColor = vec4(vColor, vAlpha) * texColor;
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    })

    particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // Adjuntar datos dinámicos fuera de Three.js (para no romper reactividad)
    ;(particles as any).velocities = velocities
    ;(particles as any).alphas = alphas
  }

  const animate = () => {
    if (!scene || !camera || !renderer || !particles) return

    const positions = particles.geometry.attributes.position.array as Float32Array
    const alphas = particles.geometry.attributes.alpha.array as Float32Array
    const velocities = (particles as any).velocities as Float32Array
    const time = Date.now() * 0.001

    const particleCount = positions.length / 3
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] += velocities[i] * 0.016 // dt ~16ms

      // Loop horizontal
      if (positions[i * 3] > window.innerWidth / 2 + 100) {
        positions[i * 3] = -window.innerWidth / 2 - 100
        positions[i * 3 + 1] = (Math.random() - 0.5) * 250
      }

      // Ondulación suave
      positions[i * 3 + 1] += Math.sin(time + i * 0.1) * 0.3

      // Parpadeo sutil
      if (Math.random() < 0.02) {
        alphas[i] = Math.max(0, alphas[i] - 0.05)
      } else if (Math.random() < 0.01) {
        alphas[i] = Math.min(1, alphas[i] + 0.05)
      }
    }

    particles.geometry.attributes.position.needsUpdate = true
    particles.geometry.attributes.alpha.needsUpdate = true

    renderer.render(scene, camera)
    animationId = requestAnimationFrame(animate)
  }

  const destroy = () => {
    if (animationId) cancelAnimationFrame(animationId)
    renderer?.dispose()
    scene?.clear()
    particles?.geometry.dispose()
    particles?.material.dispose()
  }

  onMounted(init)

  return { canvasRef }
}
