<script setup>
//IMAGENES
import Grupal from "/src/assets/Proyectos/Portfolio-web.jpeg"
import Integrador from "/src/assets/Proyectos/Proyecto-Integrador.jpg"

import { ref } from 'vue';

const proyectos =ref([
  {item:1,
    src:Grupal,
    titulo:"CODIGO COLECTIVO",
    parrafo:"Portfolio Grupal Basico",
    links:"https://portfolio-grupal.netlify.app",
    nombre:"Portfolio Grupal"
  },
  {item:2,
    src:Integrador,
    titulo:" CODIGO COLECTIVO",
    parrafo:"Proyecto Integrador escrito en lenguaje de PSEINT",
    links:"https://drive.google.com/file/d/1Kb3sXs1RuYLlRvIxbT8xeqO0D_MLss6m/view?usp=sharing",
  nombre:"Proyecto Integrador"
},
  {item:3,
    src:Integrador,
    titulo:" QWERTY1234",
    parrafo:"Proyecto Integrador escrito en lenguaje de PSEINT",
    links:"https://www.youtube.com/watch?v=zhQES1IIQgM",
  nombre:"Proyecto Integrador"
},
{item:4,
  src:Grupal,
  titulo:" QWERTY1234",
  parrafo:"Portfolio grupal basico",
  links:"https://portafolio-grupal-qwerty-123.netlify.app/",
  nombre:"Portfolio Grupal"
},
])
</script>

<template>
  <section class="galeria">
    <div class="proyecto" v-for="proyecto in proyectos" :key="proyecto.item">
      <img class="proyecto-img" :src="proyecto.src" :alt="`Imagen del proyecto ${proyecto.titulo}`">
        <div class="proyecto-info">
          <h3>{{ proyecto.titulo }}</h3>
          <p>{{ proyecto.parrafo }}</p>
          <div class="proyecto-links">
            <a :href="proyecto.links" target="_blank" rel="noopener noreferrer">{{ proyecto.nombre }}</a>
          </div>
        </div>
    </div>
  </section>
</template>


<style scoped>
/* =======================================
   ESTILOS ADAPTADOS A DISEÑO OSCURO
   ======================================= */

/* Contenedor principal de la galería */
.galeria{
  width: 100%;
  padding: 40px 20px; /* Se añade padding para separar de los bordes */
  min-height: 75vh;
  display: flex;
  flex-wrap: wrap;
  gap: 30px; /* Se aumenta un poco la separación entre tarjetas */
  justify-content: center;

  /* 🛑 ELIMINACIÓN DE IMAGEN DE FONDO Y DEFINICIÓN DEL FONDO OSCURO */
  background-image: none;
  background-color: #1a202c; /* Fondo muy oscuro para la sección */
  /* Se eliminan las propiedades background-size, background-position, background-repeat */
  border-radius: 0; /* Generalmente se quita el border-radius del contenedor principal */
}

/* Tarjeta de Proyecto */
.proyecto{
  display: flex;
  flex-direction: column;
  /* 🎨 Colores de tarjeta */
  background-color: #2d3748; /* Un gris oscuro más claro para el fondo de la tarjeta */
  border: 1px solid #4a5568; /* Borde sutil */
  border-radius: 12px;
  overflow: hidden;
  max-width: 300px; /* Límite de ancho para mejor visualización */
  flex: 1 1 250px; /* Flexibilidad de crecimiento y encogimiento */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Sombra para profundidad */
  transition: transform 0.3s ease;
}

.proyecto:hover {
  transform: translateY(-5px); /* Efecto de elevación al pasar el ratón */
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.7);
}

.proyecto-img{
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-bottom: 1px solid #4a5568; /* Separación visual de la imagen */
}

/* Información del Proyecto (Texto) */
.proyecto-info{
  padding: 15px;
  text-align: center;
  color: #e2e8f0; /* Texto claro principal */
  font-size: 1em;
  font-style: normal; /* Se quita el italic, a menos que sea intencional */
  flex-grow: 1; /* Permite que la información ocupe el espacio restante */
}

.proyecto-info h3{
  margin: 0 0 5px 0;
  font-size: 1.4em;
  color: #63b3ed; /* Azul claro para el título */
  font-weight: bold;
}

.proyecto-info p{
  margin: 5px 0 15px 0;
  font-size: 0.9em;
  color: #cbd5e0; /* Gris más claro para el párrafo */
}

/* Contenedor de Enlaces */
.proyecto-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

/* Estilo del Enlace */
.proyecto-links a {
  display: inline-block;
  padding: 8px 15px;
  text-decoration: none;
  color: #1a202c; /* Texto oscuro para contraste */
  background-color: #48bb78; /* Verde brillante/claro para el botón */
  font-size: 1em;
  font-weight: 600;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.proyecto-links a:hover {
  background-color: #38a169; /* Verde más oscuro al pasar el ratón */
}

/* Media Query opcional para hacer las tarjetas más grandes en móvil */
@media (max-width: 600px) {
  .galeria {
    padding: 20px 10px;
  }
  .proyecto {
    max-width: 90%; /* Ocupa más ancho en móvil */
    flex: 1 1 90%;
  }
}
</style>
