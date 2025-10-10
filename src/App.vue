<script setup>
//Desde la etiqueta "script" es lenguaje JS
import DatosPersonales from './components/DatosPersonales.vue';
import Navbar from './components/Navbar.vue';
</script>


<template>
  <!--Desde la etiqueta "TEMPLETE" para abajo es lenguaje HTML-->
  <header>
    <!--BARA DE NAVEGACION-->
    <Navbar />
    <!-- DATOS PERSONALES -->
    <DatosPersonales />

  </header>
  <main>
    <section id="educacion">
      <h2>Educacion - Cursos</h2>
    </section>
    <section id="experiencia">
      <h2>Experiencia</h2>
    </section>
    <section id="proyectos">
      <h2>Proyectos</h2>
    </section>
    <section id="habilidad">
      <h2>Habilidades</h2>
    </section>
    <section id="intereses">
      <h2>Intereses</h2>
    </section>
  </main>

</template>

<style scoped>
/*Desde la etiqueta "STYLE" es lenguaje CSS*/
</style>
