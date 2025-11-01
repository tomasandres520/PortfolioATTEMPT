<script setup>
//IMAGENES
import Ventas from "/src/assets/svg/Ventas.svg"
import Eccomerce from "/src/assets/svg/Ecommerce.svg"
import Configuracion from "/src/assets/svg/Configuracion.svg"
import UiUx from "/src/assets/svg/UiUx.svg"
import Docker from  "/src/assets/svg/Docker.svg"
//------------------------
import { ref } from 'vue';


const titulo = "Desarrollador Full Stack"
const fecha = "Enero 2022 - Julio 2024"
const listado = ref([
  {item:1,
    src: Ventas,
    parrafo:"Lideré un equipo de 5 desarrolladores en la creación de una plataforma de comercio electrónico que incrementó las ventas en un 35% durante el primer año."},
  {item:2,
    src: Eccomerce,
    parrafo:"Diseñé y desarrollé aplicaciones web utilizando Node.js, React y MongoDB, logrando reducir el tiempo de carga de las páginas en un 50%."},
  {item:3,
    src: Configuracion,
    parrafo:"Implementé soluciones de autenticación y autorización, mejorando la seguridad del sitio web y reduciendo los intentos de acceso no autorizado en un 20%."},
  {item:4,
    src: UiUx,
    parrafo:"Colaboré con diseñadores de UX/UI para crear interfaces de usuario atractivas y fáciles de usar, aumentando la satisfacción del cliente en un 15%."},
  {item:5,
    src:Docker,
    parrafo:"Automaticé procesos de despliegue continuo utilizando Jenkins y Docker, reduciendo los tiempos de despliegue en un 40%."},

  ])

</script>


<template>
  <div  class="card">
    <h3 class="titulo">{{ titulo }}</h3>
    <p class="fecha">{{ fecha }}</p>
    <ul class="listado">
      <li class="nav-list" v-for="list in listado" :key="list.item">
        <img class="img-list" :src= "list.src" width="45rem" :alt="list.parrafo">
        <p>{{ list.parrafo }}</p>
      </li>
    </ul>
  </div>
</template>


<style scoped>

.card{
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: rgb(28, 41, 52);
  border-radius: 15px;
  font-size: 18px;
}
.titulo{
  font-size: 1.5rem;
  color: coral;
}
.fecha{
  font-size: 1rem;
  color: burlywood;
  margin-bottom: 1rem;
}
.listado{
  display: flex;
  flex-direction: column;
}

.nav-list{
  align-items: center;
  display: flex;
  padding: 1rem;
  gap: 1.5rem;
}

p{
  color: wheat;
  text-rendering: optimizeLegibility;
}




</style>
