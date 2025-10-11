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

.navbar {
background-color: var(--vt-c-indigo);
columns: #fff;
padding: 0.5rem 1rem;
align-items: center;
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
padding: 0.5rem;
}
a {
border: 1px solid;
border-color: hsla(160,100%,37%,0.2);
border-radius: 5px;
  /*Elimina lo subrayado de los enlaces y elementos con clase "green" */
text-decoration: none;
/*Añade transicion para el cambio de estilo*/
transition: 0.4;
/*Añade padding alrededor del texto*/
padding: 5px;
}
a:hover{
  /*Cambia el color cuando el mouse pasa sobre el elemento */
background-color: hsla(160,100%,37%,0.2);
}

@media (max-width: 768px){
.navbar-menu{
    display: flex;
    justify-content: flex-end;
    width: 100%;
}
}
</style>
