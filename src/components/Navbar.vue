<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue';
const navegacion= ref([
    {id:1,nombre:"Educacion",enlace:"#educacion"},
    {id:2,nombre:"Experiencia",enlace:"#experiencia"},
    {id:3,nombre:"Proyectos",enlace:"#proyectos"},
    {id:4,nombre:"Habilidades",enlace:"#habilidades"},
]);
</script>
<template>
    <nav class="navbar">
        <div class="navbar-menu">
            <ul>
                <li class="nav-list"><a v-for="nav in navegacion" :key="nav.nombre" :href="nav.enlace" class="nav-item">{{ nav.nombre }}</a></li>
            </ul>
        </div>
    </nav>
</template>



<style scoped>
.navbar{
flex-wrap: wrap;
background-color: var(--vt-c-indigo);
padding: 1.5rem 1.5rem;
justify-content: space-between;
font-size: 1.5rem;
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.navbar-item{
color: #fff;
text-decoration: none;
margin-right: 1rem;
}
.navbar-menu{
display: flex;
justify-content: flex-end;
}
.nav-list{
list-style: none;
padding: 1.5rem;
}
a {
  color: rgb(111, 250, 123);
border: 3px solid;
border-color: hsl(165, 7%, 65%);
border-radius: 12px;
  /*Elimina lo subrayado de los enlaces y elementos con clase "green" */
text-decoration: none;
/*Añade transicion para el cambio de estilo*/
transition: 0.4;
/*Añade padding alrededor del texto*/
padding:10px;
}
a:hover{
  /*Cambia el color cuando el mouse pasa sobre el elemento */
background-color: hsla(160, 95%, 78%, 0.747);
color: black;
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.5rem 0 0;
    align-items: flex-start;
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .nav-list li {
    width: 100%;
    margin-bottom: 0.6rem;
  }

  .navbar-item {
    font-size: 1.1rem; /* Ajustado para móvil */
    width: 100%;
    max-width: none;
    margin-right: 0; /* Elimina el margen de desktop */
  }

  a {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    box-sizing: border-box;
    text-align: center;
  }
}
</style>
