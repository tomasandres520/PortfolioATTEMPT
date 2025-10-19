<!-- src/components/AnimatedBackground.vue -->
<template>
  <div ref="containerRef" class="animated-background"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

// Configuración
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
const numBalls = 30;

// Referencias
const containerRef = ref(null);
const balls = ref([]);

// Limpiar animaciones y elementos
const cleanup = () => {
  balls.value.forEach(({ el, animation }) => {
    animation?.cancel();
    el?.remove();
  });
  balls.value = [];
};

// Crear bolas
const createBalls = () => {
  if (!containerRef.value) return;

  for (let i = 0; i < numBalls; i++) {
    const ball = document.createElement('div');
    ball.classList.add('ball');

    // Estilos
    Object.assign(ball.style, {
      position: 'absolute',
      borderRadius: '50%',
      background: colors[Math.floor(Math.random() * colors.length)],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${(Math.random() * 3 + 0.5)}vw`,
      height: `${(Math.random() * 3 + 0.5)}vw`,
      opacity: '0.6',
      pointerEvents: 'none'
    });

    containerRef.value.appendChild(ball);

    // Animación
    const toX = Math.random() * (i % 2 === 0 ? -8 : 8); // vw
    const toY = Math.random() * 10; // vh

    const animation = ball.animate(
      [
        { transform: 'translate(0, 0)' },
        { transform: `translate(${toX}vw, ${toY}vh)` }
      ],
      {
        duration: (Math.random() + 1) * 3000,
        direction: 'alternate',
        fill: 'both',
        iterations: Infinity,
        easing: 'ease-in-out'
      }
    );

    balls.value.push({ el: ball, animation });
  }
};

// Ciclo de vida
onMounted(() => {
  createBalls();
});

onBeforeUnmount(() => {
  cleanup();
});
</script>

<style scoped>
.animated-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}
</style>
