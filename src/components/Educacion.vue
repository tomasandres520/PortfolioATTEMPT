<!-- eslint-disable vue/multi-word-component-names -->

<!--Plantilla de https://codepen.io/elaleph23/pen/ZNBMJZ , modificada por mi y corregida por IA-->
<script setup>
//IMAGENES
import estudiando from "/src/assets/Imagenes/estudiando.jpg"
import desarrollador from "/src/assets/Imagenes/desarrollador.jpg"
import full_desarrollador from "/src/assets/Imagenes/desarrollador_full.jpg"
import graduado from "/src/assets/Imagenes/graduado.jpg"
import { ref, computed } from 'vue';
//--------------

// Datos de imágenes (por año)
const imagenes = ref([
  { año: "2017", src: estudiando},
  { año: "2019", src: desarrollador},
  { año: "2022", src: full_desarrollador},
  { año: "2024", src: graduado}
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
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

/* Desktop: timeline horizontal */
@media (min-width: 769px) {
  #timeline {
    min-height: 60vh;
  }

  .tl-item {
    position: relative;
    width: 25%;
    height: 60vh;
    min-height: 276px;
    color: #fff;
    overflow: hidden;
    transition: width 0.5s ease;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top center;
    filter: grayscale(100%);
  }

  .tl-item::before,
  .tl-item::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .tl-item::after {
    background: rgba(224, 37, 27, 0.15);
    opacity: 1;
    transition: opacity 0.5s ease;
  }

  .tl-item::before {
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

  .tl-item:hover {
    width: 30% !important;
  }

  .tl-item:hover::after {
    opacity: 0;
  }

  .tl-item:hover::before {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1s ease, transform 1s ease 0.25s;
  }

  .tl-item:hover .tl-content {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.75s ease 0.5s;
  }

  .tl-item:hover {
    filter: grayscale(0%);
  }

  .tl-content {
    position: relative;
    z-index: 2;
    text-align: center;
    margin: 0 1em;
    top: 55%;
    opacity: 0;
    transform: translateY(25px);
    transition: opacity 0.5s ease, transform 0.5s ease;
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
  }
}

/* Mobile: timeline vertical */
@media (max-width: 768px) {
  #timeline {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
  }

  .tl-item {
    position: relative;
    width: 90%;
    max-width: 600px;
    height: auto;
    min-height: 300px;
    margin: 2rem 0;
    color: #fff;
    overflow: hidden;
    border-radius: 12px;
    background-size: cover;
    background-position: center;
    filter: grayscale(0%); /* Siempre en color en móvil */
  }

  .tl-item::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.9) 100%
    );
    z-index: 1;
  }

  .tl-year {
    position: absolute;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    background: rgba(0, 0, 0, 0.7);
    padding: 4px 12px;
    border-radius: 20px;
  }

  .tl-year p {
    font-family: "Pathway Gothic One", Helvetica, Arial, sans-serif;
    font-size: 1.4rem;
    color: #fff;
    margin: 0;
  }

  .tl-content {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 1.5rem;
    top: 0;
    opacity: 1;
    transform: none;
    margin-top: 5px;
  }

  .tl-content h1 {
    font-family: "Pathway Gothic One", Helvetica, Arial, sans-serif;
    color: #a8c6e0;
    font-size: 1.3rem;
    margin: 0.5rem 0;
    padding: 12px;
  }

  .tl-content p {
    color: #fff;
    font-size: 0.95rem;
    line-height: 1.5;
  }
}
</style>
