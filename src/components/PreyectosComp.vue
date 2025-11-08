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
  background-image: url('/src/assets/Proyectos/BG-2.jpg');
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
  background:#ecfbff91;
}

.proyecto-img{
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit:cover;
}

.proyecto-info{
  padding: 15px;
  text-align: center;
  color: #e0c4e7;
  font-size: 23px;
  font-style: italic;
}

.proyecto-info h3{
  margin: 10px 0;
  font-size: 1.3em;
  color: rgb(0, 85, 241);
}
.proyecto-info p{
  margin: 10px 0;
  font-size: 1em;
  color: rgb(0, 85, 241);

}
.proyecto-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.proyecto-links a {
  text-decoration: solid;
  color: rgb(255, 230, 0);
  font-size: 1em;
}
</style>
