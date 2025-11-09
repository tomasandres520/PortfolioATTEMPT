<script setup>
//IMAGENES

import Configuracion from "/src/assets/svg/Configuracion.svg"
import UiUx from "/src/assets/svg/UiUx.svg"
import Docker from  "/src/assets/svg/Docker.svg"
//------------------------
import { ref } from 'vue';


const titulo = "Desarrollador Full Stack"
const fecha = "Enero 2023 - Noviembre 2025"
const listado = ref([
    {item:1,
    src: Configuracion,
    parrafo:"Implementé la funcionalidad de registro e inicio de sesión utilizando el storage local para simular una experiencia de usuario segura, sentando las bases para futuras integraciones con bases de datos reales"},
  {item:2,
    src: UiUx,
    parrafo:"Trabajé en la refactorización de los estilos de la aplicación, separando el CSS del HTML para crear componentes visuales más limpios y un código más fácil de mantener en el futuro"},
  {item:3,
    src:Docker,
    parrafo:"Utilicé Git y GitHub para gestionar los cambios en el código de mi proyecto, completando el primer despliegue funcional de la página web utilizando servicios de alojamiento gratuitos como GitHub Pages o Netlify."},

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
  background-color: rgb(0, 77, 73);
  border-radius: 15px;
  font-size: 18px;
}
.titulo{
  font-size: 2.5rem;
  color: rgb(196, 97, 230);
}
.fecha{
  font-size: 1.5rem;
  color: rgb(161, 97, 145);
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
  color: rgb(191, 179, 245);
  text-rendering: optimizeLegibility;
}




</style>
