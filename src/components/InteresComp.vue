<script setup>
import { ref } from 'vue';
import FondoIntereses from './FondoIntereses.vue';

const intereses = ref([
  "Desarrollo de Software de Código Abierto: Contribuyo a proyectos GitHub, colaborando con otros desarrolladores para mejorar herramientas y librerías populares",
  "Deportes al Aire Libre: Disfruto del senderismo y el ciclismo de montaña, actividades que practico regularmente para mantener un equilibrio entre el trabajo y la vida personal",
  "Tecnología e Innovación: Me apasiona explorar nuevas tendencias tecnológicas como la inteligencia artificial y el desarrollo de aplicaciones móviles",
  "Fotografía: Practico la fotografía como un hobby, lo que me ayuda a mantener una perspectiva creativa tanto en mi vida profesional como personal",
]);
</script>

<template>
  <section class="intereses-contenedor">
    <!-- Fondo animado (se posiciona en toda la sección) -->
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
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f0f15;
  color: white;
  overflow: hidden;
  padding: 0 1rem;
}

.contenido-intereses {
  position: relative;
  z-index: 2;
  max-width: 85%;
  width: 100%;
}

.contenedor-lista {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1.4rem;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
}

.item {
  margin-bottom: 1.5rem;
  line-height: 1.4;
}
</style>
