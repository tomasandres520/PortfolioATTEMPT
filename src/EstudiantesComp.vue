<!-- src/components/CardStreamSection.vue -->
<template>
  <section class="card-stream-section">
    <div class="section-intro">
      <h2>QWERTY1234</h2>
    </div>


    <!-- Controles
    <div class="controls">
      <button class="control-btn" @click="toggleAnimation">
        {{ isAnimating ? '⏸️ Pause' : '▶️ Play' }}
      </button>
      <button class="control-btn" @click="resetPosition">🔄 Reset</button>
      <button class="control-btn" @click="changeDirection">↔️ Direction</button>
    </div>-->

    <!-- ✅ Canvas de partículas (usando el composable) -->
    <canvas
      :ref="particleCanvasRef"
      class="canvas-bg"
    ></canvas>

    <!-- Card stream -->
    <div class="card-stream" ref="containerRef">
      <div
        ref="cardLineRef"
        class="card-line"
        :class="{ dragging: isDragging }"
        @mousedown="startDrag"
        @mousemove="onDrag"
        @mouseup="endDrag"
        @mouseleave="endDrag"
        @wheel.prevent="onWheel"
      >
        <div
          v-for="card in cards"
          :key="card.id"
          class="card-wrapper"
          :ref="(el) => cardRefs[card.id] = el"
        >
          <div class="card card-normal" :style="{ '--clip-right': card.clipRight + '%' }">
            <img :src="card.image" :alt="card.title" class="card-image" />
            <div class="card-chip"></div>
            <div class="contactless"></div>
            <div class="card-info">
              <div class="card-text">
                <div class="card-holder">{{ card.holder }}</div>
                <div class="card-number"><a class="card-link" :href="card.portfolio" target="_blank" rel="noopener noreferrer">{{ card.number }}</a></div>
              </div>
              <div class="card-expiry">{{ card.expiry }}</div>
            </div>
            <div class="card-logo">{{ card.logo }}</div>
          </div>
          <div class="card card-ascii" :style="{ '--clip-left': card.clipLeft + '%' }">
            <pre class="ascii-content">{{ card.ascii }}</pre>
          </div>
          <div v-if="card.showScanEffect" class="scan-effect"></div>
        </div>
      </div>
    </div>

    <div class="inspiration-credit">
      Inspired by <a href="https://evervault.com/" target="_blank">@evervault.com</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, shallowRef, onMounted, onUnmounted, nextTick } from 'vue'
import { useThreeParticles } from './components/useThreeParticles'

// ── ✅ Composable de Three.js (sin colisión de nombres)
const { canvasRef: particleCanvasRef } = useThreeParticles()

// ── ✅ Datos personalizados: ¡TUS proyectos! 👇
const projects = [
  {
    id: 1,
    title: 'Paul Romero',
    portfolio: "https://individual-vue.netlify.app/",
    image: new URL('@/assets/Proyectos/Profile.jpeg', import.meta.url).href,
    holder: 'PAUL ROMERO',
    number: 'PORTFOLIO',
    expiry: 'Expiracion:12/26',
  },
  {
    id: 2,
    title: 'Tomas Andres',
    portfolio: "https://tomas-andres-portafolio.netlify.app/",
    image: new URL('@/assets/Proyectos/Tomas-Andres.jpg', import.meta.url).href,
    holder: 'TOMAS ANDRES',
    number: 'PORTFOLIO',
    expiry: 'Expiracion:12/26',
  },
  {
    id: 3,
    title: 'Martin Yañez',
    portfolio: "https://heroic-druid-3e453a.netlify.app/",
    image: new URL('@/assets/Proyectos/Martin-Yañez.jpg', import.meta.url).href,
    holder: 'MARTIN YAÑEZ',
    number: 'PORTFOLIO',
    expiry: 'Expiracion:12/26',
  },
  {
    id: 4,
    title: 'Gustavo Contrera',
    portfolio: "https://gustavocontrerasportafoliovjs-2f49c3.netlify.app/",
    image: new URL('@/assets/Proyectos/Gustavo-Contreras.jpeg', import.meta.url).href,
    holder: 'GUSTAVO CONTRERA',
    number: 'PORTFOLIO',
    expiry: 'Expiracion:12/26',
  },
    {
  id: 5,
  title: 'Fernando Adaro',
  portfolio: "https://portafolio-vuejs-personal.netlify.app/",
  image: new URL('@/assets/Proyectos/Fernando-Adaro.png', import.meta.url).href,
  holder: 'FERNANDO ADARO',
  number: 'PORTFOLIO',
  expiry: 'Expiracion:12/26',
},
]

// ── Estado
const isAnimating = ref(true)
const velocity = ref(15)
const direction = ref(-1)
const position = ref(0)
const isDragging = ref(false)
const isScannerActive = ref(false)

const containerRef = ref<HTMLDivElement | null>(null)
const cardLineRef = ref<HTMLDivElement | null>(null)
// ❌ Eliminamos: const particleCanvas = ref(...) → ya no se usa
// ❌ Eliminamos: const scannerCanvas = ref(...) → lo agregamos después si querés

const cardRefs = shallowRef<Record<number, HTMLElement | null>>({})

interface CardData {
  id: number
  title: string
  image: string
  holder: string
  number: string
  expiry: string
  logo: string
  ascii: string
  clipLeft: number
  clipRight: number
  showScanEffect: boolean
}

const cards = ref<CardData[]>([])

// ── Generador de ASCII (mejorado)
const codeChars = '01abcABC[]{}<>;:.,_-=+!@#$%^&*|'
const generateCode = (width: number, height: number): string => {
  let text = ''
  for (let i = 0; i < height; i++) {
    let line = ''
    for (let j = 0; j < width; j++) {
      line += codeChars[Math.floor(Math.random() * codeChars.length)]
    }
    text += line + '\n'
  }
  return text.trim()
}

// ── Inicializar tarjetas con tus proyectos
const initCards = () => {
  cards.value = projects.map(proj => ({
    ...proj,
    ascii: generateCode(66, 19),
    clipLeft: 0,
    clipRight: 0,
    showScanEffect: false,
  }))
}

// ── Clipping & Scanning
const updateCardClipping = () => {
  if (!cardLineRef.value || !containerRef.value) return

  const scannerX = window.innerWidth / 2
  const scannerWidth = 8
  const scannerLeft = scannerX - scannerWidth / 2
  const scannerRight = scannerX + scannerWidth / 2

  let anyScanning = false

  cards.value.forEach(card => {
    const el = cardRefs.value[card.id]
    if (!el) return

    const rect = el.getBoundingClientRect()
    const cardLeft = rect.left
    const cardRight = rect.right
    const cardWidth = rect.width

    if (cardLeft < scannerRight && cardRight > scannerLeft) {
      anyScanning = true
      const intersectLeft = Math.max(scannerLeft - cardLeft, 0)
      const intersectRight = Math.min(scannerRight - cardLeft, cardWidth)

      card.clipRight = (intersectLeft / cardWidth) * 100
      card.clipLeft = (intersectRight / cardWidth) * 100

      if (!card.showScanEffect && intersectLeft > 0) {
        card.showScanEffect = true
        setTimeout(() => { card.showScanEffect = false }, 600)
      }
    } else {
      card.clipRight = cardRight < scannerLeft ? 100 : 0
      card.clipLeft = cardRight < scannerLeft ? 100 : 0
    }
  })

  isScannerActive.value = anyScanning
}

// ── Drag & Wheel (igual que antes)
let startX = 0
let startTranslateX = 0

const startDrag = (e: MouseEvent) => {
  e.preventDefault()
  isDragging.value = true
  isAnimating.value = false
  startX = e.clientX
  if (cardLineRef.value) {
    const style = getComputedStyle(cardLineRef.value)
    const matrix = new DOMMatrix(style.transform)
    startTranslateX = matrix.m41
  }
  document.body.style.userSelect = 'none'
  document.body.style.cursor = 'grabbing'
}

const onDrag = (e: MouseEvent) => {
  if (!isDragging.value || !cardLineRef.value) return
  const dx = e.clientX - startX
  position.value = startTranslateX + dx
  cardLineRef.value.style.transform = `translateX(${position.value}px)`
  updateCardClipping()
}

const endDrag = () => {
  if (!isDragging.value) return
  isDragging.value = false
  isAnimating.value = true
  document.body.style.userSelect = ''
  document.body.style.cursor = ''
}

const onWheel = (e: WheelEvent) => {
  position.value += e.deltaY > 0 ? 20 : -20
  if (cardLineRef.value) {
    cardLineRef.value.style.transform = `translateX(${position.value}px)`
  }
  updateCardClipping()
}

// ── Animación
let rafId: number | null = null

const animate = () => {
  if (isAnimating.value && !isDragging.value) {
    const dt = 1 / 60 // ~60fps
    position.value += velocity.value * direction.value * dt

    // 🔁 Recalcular dinámicamente dimensiones
    const containerWidth = window.innerWidth
    const cardWidth = 400
    const gap = 60
    const cardCount = cards.value.length
    const cardLineWidth = cardCount * (cardWidth + gap)

    // 🔄 Loop infinito: cuando sale por la izquierda, vuelve por la derecha (y viceversa)
    if (direction.value === -1) {
      // Moviendo a la izquierda → cuando la última tarjeta sale por la izquierda
      if (position.value + cardLineWidth < 0) {
        position.value = containerWidth
      }
    } else {
      // Moviendo a la derecha → cuando la primera tarjeta sale por la derecha
      if (position.value > containerWidth) {
        position.value = -cardLineWidth
      }
    }

    // Aplicar transform
    if (cardLineRef.value) {
      cardLineRef.value.style.transform = `translateX(${position.value}px)`
    }
  }

  updateCardClipping()
  rafId = requestAnimationFrame(animate)
}

// ── Métodos públicos
const toggleAnimation = () => { isAnimating.value = !isAnimating.value }
const resetPosition = () => {
  position.value = window.innerWidth
  velocity.value = 120
  direction.value = -1
  isAnimating.value = true
  if (cardLineRef.value) {
    cardLineRef.value.style.transform = `translateX(${position.value}px)`
  }
}
const changeDirection = () => { direction.value *= -1 }

// ── Lifecycle
onMounted(() => {
  initCards()
  nextTick(() => animate())
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.card-stream-section {
  position: relative;
  width: 100%;
  min-height: 300px;
  margin: 2rem 0;
  overflow: hidden;
  background: #000;
}
.section-intro {
  text-align:center;
  color: white;
  padding: 0.2rem 0.2rem;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 0;
}

.section-intro h2 {
  position: absolute;
  font-size: 3rem;
  font-family: 'Roboto Mono', monospace;
}


.controls {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  gap: 10px;
  z-index: 100;
}

.control-btn {
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 25px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  font-size: 14px;
}

.control-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.speed-indicator {
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  font-size: 16px;
  background: rgba(0, 0, 0, 0.3);
  padding: 8px 16px;
  border-radius: 20px;
  backdrop-filter: blur(5px);
  z-index: 100;
}

.canvas-bg,
.canvas-scanner {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  z-index: 0;
}

.canvas-bg {
  height: 250px;
  z-index: 0;
}

.canvas-scanner {
  height: 300px;
  z-index: 20;
  left: -3px;
}

.card-stream {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.card-line {
  display: flex;
  align-items: center;
  gap: 60px;
  white-space: nowrap;
  cursor: grab;
  user-select: none;
  will-change: transform;
}

.card-line.dragging {
  cursor: grabbing;
}

.card-wrapper {
  position: relative;
  width: 400px;
  height: 250px;
  flex-shrink: 0;
  z-index: 10;
}

.card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;

}

.card-normal {
  background: transparent;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  color: white;
  z-index: 2;
  overflow: hidden;
  clip-path: inset(0 0 0 var(--clip-right, 0%)); /* ← CLAVE */
}


.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(1.1) contrast(1.1);
}

.card-chip {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 30px;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  border-radius: 5px;
}

.card-chip::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  right: 3px;
  bottom: 3px;
  background: linear-gradient(45deg, #e6c200, #f4d03f);
  border-radius: 2px;
}

.contactless {
  position: absolute;
  top: 60px;
  left: 20px;
  width: 25px;
  height: 25px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent);
}

.contactless::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15px;
  height: 15px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
}

.card-info {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.card-holder,.card-number,.card-link,.card-expiry{
  color: #d63030;
  font-size: 22px;
  font-weight:bolder;
}
.card-holder {
  font-size: 24px;
  text-transform: uppercase;
}

.card-number {
  letter-spacing: 1,5px;
  margin: 4px 0;
}
.card-link{
  display: block;
  width: 100%;
  height: 100%;
  position: relative; /* ✅ no rompe el z-index heredado */
  z-index: 1;
}

.card-expiry {
  font-size: 16px;
}

.card-logo {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 18px;
  font-weight: bold;
  color: white;
}

.card-ascii {
  z-index: 1;
  clip-path: inset(0 calc(100% - var(--clip-left, 0%)) 0 0); /* ← ya lo tenías, perfecto */
}
.ascii-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: rgba(220, 210, 255, 0.6);
  font-family: "Courier New", monospace;
  font-size: 11px;
  line-height: 13px;
  white-space: pre;
  margin: 0;
  padding: 10px;
  overflow: hidden;
  clip-path: inset(0 calc(100% - var(--clip-left, 0%)) 0 0);
  -webkit-mask-image: linear-gradient(to right, black 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 80%, transparent);
  mask-image: linear-gradient(to right, black 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 80%, transparent);
}

.scan-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.4), transparent);
  animation: scanEffect 0.6s ease-out;
  pointer-events: none;
  z-index: 25;
}

@keyframes scanEffect {
  0% { transform: translateX(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(100%); opacity: 0; }
}

.scanner {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 4px;
  height: 300px;
  background: linear-gradient(to bottom, transparent, #0ff, #0ff, #0ff, transparent);
  box-shadow: 0 0 20px #0ff, 0 0 40px rgba(0, 255, 255, 0.4);
  border-radius: 30px;
  z-index: 15;
  animation: scanPulse 2s ease-in-out infinite alternate;
}

@keyframes scanPulse {
  0% { opacity: 0.8; transform: translate(-50%, -50%) scaleY(1); }
  100% { opacity: 1; transform: translate(-50%, -50%) scaleY(1.1); }
}

.scanner-label {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  color: #0ff;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}

.inspiration-credit {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Roboto Mono", monospace;
  font-size: 12px;
  color: #ff9a9c;
  z-index: 100;
  text-align: center;
}

.inspiration-credit a {
  color: #ff9a9c;
  text-decoration: none;
}

.inspiration-credit a:hover {
  color: #ff7a7c;
}

/* 📱 Responsive para móvil */
@media (max-width: 768px) {
  .card-stream-section {
    min-height: 280px;
    margin: 1rem 0;
  }

  .section-intro h2 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  .controls {
    top: 10px;
    left: 10px;
    gap: 8px;
  }

  .control-btn {
    padding: 8px 16px;
    font-size: 12px;
    border-radius: 20px;
  }

  .speed-indicator {
    top: 10px;
    right: 10px;
    font-size: 14px;
    padding: 6px 12px;
    border-radius: 16px;
  }

  .card-stream {
    height: 140px; /* más compacto */
    transform: translate(-50%, -50%) scale(0.85);
  }

  .card-wrapper {
    width: 320px;
    height: 200px;
  }

  .card-image {
    filter: brightness(1.05) contrast(1.05);
  }

  .card-info {
    bottom: 12px;
    left: 15px;
    right: 15px;
  }

  .card-holder,
  .card-expiry {
    font-size: 12px;
  }

  .card-number {
    font-size: 18px;
    letter-spacing: 2px;
    margin: 2px 0;
  }

  .card-logo {
    top: 15px;
    right: 15px;
    font-size: 16px;
  }

  .card-chip {
    top: 15px;
    left: 15px;
    width: 32px;
    height: 24px;
  }

  .contactless {
    top: 50px;
    left: 15px;
    width: 20px;
    height: 20px;
  }

  .ascii-content {
    font-size: 9px;
    line-height: 11px;
    padding: 8px;
  }

  /* Scanner más delgado */
  .scanner {
    width: 3px;
    height: 220px;
  }

  .scanner-label {
    font-size: 10px;
    bottom: -30px;
  }

  .inspiration-credit {
    font-size: 10px;
    bottom: 10px;
  }
}

/* 📱 Extra compacto (hasta 480px) */
@media (max-width: 480px) {
  .card-stream {
    transform: translate(-50%, -50%) scale(0.75);
  }

  .card-wrapper {
    width: 280px;
    height: 175px;
  }

  .section-intro h2 {
    font-size: 1.5rem;
  }

  .controls, .speed-indicator {
    display: none; /* Opcional: ocultar controles en móvil pequeño */
  }
}
</style>

