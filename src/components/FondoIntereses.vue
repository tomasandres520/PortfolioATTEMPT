<template>
  <div class="fondo-intereses-gradient"></div>
</template>

<style scoped>
.fondo-intereses-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  /* 🌊 Gradiente animado: azul UTN + cian Evervault */
  background: linear-gradient(125deg, #050b0f, #190f76, #e9780e, #1c0258);
  background-size: 300% 300%;

  /* ✨ Animación sutil de flujo */
  animation: gradientFlow 15s ease infinite;

  /* ✅ Suavizado visual */
  filter: blur(30px);
  opacity: 0.75;
}

/* 🌀 Animación de flujo continuo */
@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>
