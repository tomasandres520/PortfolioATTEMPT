<script setup>
import { ref } from 'vue';
import FondoIntereses from './FondoIntereses.vue';

const intereses = ref([
  "Robótica y Proyectos DIY: Disfruto ensamblando y programando microcontroladores (como Arduino o Raspberry Pi) para crear prototipos básicos y automatizar tareas sencillas.",

  "Drones y Tecnología Aérea: Me interesa la tecnología de los drones, enfocándome en aprender sobre su hardware, pilotaje seguro y cómo se aplica la fotografía y el video aéreo.",

  "Boxeo y Disciplina: Practico boxeo como un hobby para mantenerme activo. Este deporte me enseña la importancia de la disciplina, la estrategia y el enfoque, cualidades que aplico en la programación.",

  "Tecnología e Innovación: Me apasiona explorar nuevas tendencias tecnológicas como la inteligencia artificial y el desarrollo de aplicaciones móviles" // Mantengo este de tecnología ya que es amplio.
]);
</script>

<template>
  <section class="intereses-contenedor">
    <!-- Fondo animado (se posiciona en toda la sección)Elegi un fondo
    de JS, Con IA me ayude para entenderlo y lo modifique un poco -->
    <FondoIntereses />

    <!-- Contenido encima del fondo -->
    <div class="contenido-intereses">
      <ul class="contenedor-lista">
        <li class="item" v-for="interes in intereses" :key="interes">
          {{ interes }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.intereses-contenedor {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  /* ✅ Clave: asegurar que el contenedor tenga contexto de apilamiento */
  z-index: 0; /* opcional, pero ayuda */
}

.contenido-intereses {
  position: relative;
  z-index: 2; /* asegura que el texto esté encima de las bolas */
  max-width: 85%;
  width: 100%;
  /* Opcional: fondo semitransparente para mejor legibilidad
  background: rgba(10, 10, 16, 0.6); */
  padding: 1.5rem;
  border-radius: 16px;
}

.contenedor-lista {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1.4rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  text-rendering: optimizeLegibility;
}

.item {
  margin-bottom: 1.5rem;
  line-height: 1.5;
}
</style>
