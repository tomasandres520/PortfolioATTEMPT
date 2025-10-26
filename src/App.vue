<script setup>
//Desde la etiqueta "script" es lenguaje JS
import Navbar from './components/Navbar.vue';
import DatosPersonales from './components/DatosPersonales.vue';
import Educacion from './components/Educacion.vue';
import ExperienciaComp from './components/ExperienciaComp.vue';
import PreyectosComp from './components/PreyectosComp.vue';
import HabilidadesComp from './components/HabilidadesComp.vue';
import InteresComp from './components/InteresComp.vue';

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
      <!--EDUCACION-->
      <Educacion />
    </section>
    <section id="experiencia">
      <h2>Experiencia</h2>
      <ExperienciaComp />
    </section>
    <section id="proyectos">
      <h2>Proyectos</h2>
      <PreyectosComp />
    </section>
    <section id="habilidad">
      <h2>Habilidades</h2>
      <HabilidadesComp />
    </section>
    <section id="intereses">
      <h2>Intereses</h2>
      <InteresComp />
    </section>
  </main>
  <footer>
    <a href="#top">Inicio</a>
    <p>2025 Paul Romero - Portfolio web - tutorial UTN FRSR</p>
  </footer>
</template>

<style scoped>
/*Desde la etiqueta "STYLE" es lenguaje CSS*/
footer{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  font-size: 1.3rem;
  color: aliceblue;
}
</style>
