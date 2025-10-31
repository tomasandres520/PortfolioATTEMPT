<!-- eslint-disable vue/multi-word-component-names -->

<!--Plantilla de https://codepen.io/elaleph23/pen/ZNBMJZ , modificada por mi y corregida por IA-->
<script setup>
import { ref, computed } from 'vue';

// Datos de imágenes (por año)
const imagenes = ref([
  { año: "2017", src: "/src/assets/Imagenes/estudiando.jpg" },
  { año: "2019", src: "/src/assets/Imagenes/desarrollador.jpg" },
  { año: "2022", src: "/src/assets/Imagenes/desarrollador_full.jpg" },
  { año: "2024", src: "/src/assets/Imagenes/graduado.jpg" }
]);

// Datos de educación
const educacion = ref([
  {
    año: "2017",
    titulo: "Curso Introducción a Programación",
    descripcion: "Completé un curso en línea sobre fundamentos de programación, donde aprendí lenguajes como Python y Java.",
    url: ""
  },
  {
    año: "2019",
    titulo: "Internship (Desarrollo Web)",
    descripcion: "Realicé una pasantía en ABC Solutions, contribuyendo en la creación de interfaces de usuario y optimización de sitios web.",
    url: ""
  },
    {
    año: "2022",
    titulo: "Desarrollador Full Stack",
    descripcion: "Trabajé en XYZ Tech, donde diseñé y desarrollé aplicaciones web completas utilizando tecnologías como Node.js, React y MongoDB.",
    url: ""
  },
  {
    año: "2024",
    titulo: "Graduación",
    descripcion: "Finalicé mis estudios en la UTN - Facultad Regional San Rafael - Mendoza. Incumbencias Profesionales: Operación y programación de computadoras, desarrollo de programas en distintos lenguajes, análisis y control de sistemas informáticos.",
    url: ""
  },
]);

// Mapa de imágenes por año para acceso rápido
const imagenPorAño = computed(() => {
  const map = {};
  imagenes.value.forEach(img => {
    map[img.año] = img.src;
  });
  return map;
});
</script>

<template>
  <section id="timeline">
    <div
      v-for="item in educacion"
      :key="item.año"
      class="tl-item"
      :style="{ backgroundImage: `url(${imagenPorAño[item.año]})` }"
    >
      <div class="tl-year">
        <p class="f2 heading--sanSerif">{{ item.año }}</p>
      </div>
      <div class="tl-content">
        <h1>{{ item.titulo }}</h1>
        <p>{{ item.descripcion }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
#timeline {
  display: flex;
  background-color: #031625;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

.tl-item {
  position: relative;
  width: 25%;
  height: 100vh;
  min-height: 480px;
  color: #fff;
  overflow: hidden;
  transition: width 0.5s ease;
  background-size:contain;
  background-repeat: no-repeat;
  background-position: top center;
  filter: grayscale(100%);

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:after {
    background: rgba(224, 37, 27, 0.15); /* transparentize equivalente */
    opacity: 1;
    transition: opacity 0.5s ease;
  }

  &:before {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 75%
    );
    z-index: 1;
    opacity: 0;
    transform: translateY(50%);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  &:hover {
    width: 30% !important;

    &:after {
      opacity: 0;
    }

    &:before {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 1s ease, transform 1s ease 0.25s;
    }

    .tl-content {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.75s ease 0.5s;
    }

    filter: grayscale(0%);
  }
}

.tl-content {
  position: relative;
  z-index: 2;
  text-align: center;
  margin: 0 1.618em;
  top: 55%;
  opacity: 0;
  transform: translateY(25px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  h1 {
    font-family: "Pathway Gothic One", Helvetica Neue, Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    color: #1779cf;
    font-size: 1.44rem;
    font-weight: normal;
    margin: 0 0 0.5em;
  }

  p {
    color: #fff;
    font-size: 1rem;
    line-height: 1.5;
  }
}

.tl-year {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  padding: 0 10px;

  p {
    font-family: "Pathway Gothic One", Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 1.728rem;
    line-height: 1;
    margin: 0;
    color: #fff;
  }
}
</style>
