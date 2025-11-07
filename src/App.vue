<!-- Portfolio Creado a partir de las clases de UTN- Modificado por mi, y corregido con ayuda de la IA-->


<script setup>
//Desde la etiqueta "script" es lenguaje JS
import Navbar from './components/Navbar.vue';
import DatosPersonales from './components/DatosPersonales.vue';
import ExperienciaComp from './components/ExperienciaComp.vue';
import PreyectosComp from './components/PreyectosComp.vue';
import HabilidadesComp from './components/HabilidadesComp.vue';
import InteresComp from './components/InteresComp.vue';
import EstudiantesComp from './EstudiantesComp.vue';

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
    <section id="estudiantes">
      <h2>Educacion - Cursos</h2>
      <!--Aqui cambiaria esta seccion por el card.animated-->
      <EstudiantesComp />
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
  font-family: 'Courier New', Courier, monospace;
  color: aliceblue;
}

footer a{
  color: black;
  border: 7px solid;
  border-radius: 14px;
  border-color: rgb(22, 63, 99);
  background-color: rgb(194, 220, 243);
}

</style>
