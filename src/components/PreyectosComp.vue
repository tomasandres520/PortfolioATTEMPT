<script setup>
//IMAGENES
import Individual from "/src/assets/Proyectos/Profile.jpeg"
import Grupal from "/src/assets/Proyectos/Portfolio-web.jpeg"
import Integrador from "/src/assets/Proyectos/Proyecto-Integrador.jpg"

import { ref } from 'vue';

const proyectos =ref([
  {item:1,
    src:Individual,
    titulo:"Portfolio Individual",
    parrafo:"Portafolio individual Basico",
    links:"https://portfolio-individual.netlify.app",
    nombre:"Portfolio Individual"},
  {item:2,
    src:Grupal,
    titulo:"Portfolio Grupal",
    parrafo:"Portfolio Grupal Basico",
    links:"https://portfolio-grupal.netlify.app",
    nombre:"Portfolio Grupal"
  },
  {item:3,
    src:Integrador,
    titulo:"Proyecto Integrador en Pseint",
    parrafo:"Proyecto Integrador escrito en lenguaje de PSEINT",
    links:"https://drive.google.com/file/d/1Kb3sXs1RuYLlRvIxbT8xeqO0D_MLss6m/view?usp=sharing",
  nombre:"Proyecto Integrador"
},
])
</script>

<template>
  <section class="galeria">
    <div class="proyecto" v-for="proyecto in proyectos" :key="proyecto.item">
      <img class="proyecto-img" :src="proyecto.src" :alt="'Imagen del proyecto ${proyecto.titulo}'">
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
.galeria{
  width: 100%;
  height: 75%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  background-image: url('/src/assets/Proyectos/BackGround.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px;
}

.proyecto{
  display: flex;
  flex-direction: column;
  border: 2px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  max-width: 222px;
  flex: 1 1 300px;
  background:#6acfeb41;
}

.proyecto-img{
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit:cover;
}

.proyecto-info{
  padding: 15px;
  text-align: center;
  color: #ffffff;
  font-size: 23px;
  font-style: italic;
}

.proyecto-info h3{
  margin: 10px 0;
  font-size: 1.3em;
  color: aliceblue;
}
.proyecto-info p{
  margin: 10px 0;
  font-size: 1em;
  color: aliceblue;

}
.proyecto-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.proyecto-links a {
  text-decoration: solid;
  color: gold;
  font-size: 1em;
}
</style>
