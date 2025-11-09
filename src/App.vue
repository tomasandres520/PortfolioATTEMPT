<!-- Portfolio Creado a partir de las clases de UTN- Modificado por mi, y corregido con ayuda de la IA-->


<script setup>
//Desde la etiqueta "script" es lenguaje JS
import Navbar from './components/Navbar.vue';
import DatosPersonales from './components/DatosPersonales.vue';
import ExperienciaComp from './components/ExperienciaComp.vue';
import PreyectosComp from './components/PreyectosComp.vue';
import HabilidadesComp from './components/HabilidadesComp.vue';
import InteresComp from './components/InteresComp.vue';

// NOTA: Se ha eliminado la importación de 'EstudiantesComp'
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
    <!-- 🛑 SECCIÓN ESTUDIANTES ELIMINADA: Ya no está aquí. -->

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
    <a href="#top" class="footer-link">↑ Inicio</a>
    <p>© Tomás Miguel Andrés | Portfolio web 2025 - UTN FRSR</p>
  </footer>
</template>

<style scoped>
/* Estilos para el App.vue */
/* Ajuste de colores para adaptarse al tema oscuro */

/* 🆕 ESTILO AÑADIDO: Títulos de Sección (Experiencia, Proyectos, etc.) */
main h2 {
    text-align: center;
    padding: 20px 0 10px 0;
    margin-top: 20px;
    font-size: 2.2rem;
    color: #63b3ed; /* Azul claro para los títulos */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Estilos del Footer mejorados */
footer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  margin-top: 50px;

  /* Colores para tema oscuro */
  background-color: #1a202c; /* Mismo fondo oscuro que la sección de Proyectos */
  color: #a0aec0; /* Gris claro suave para texto general */
  font-size: 1.1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-top: 3px solid #3f5a7a; /* Borde sutil */
}

footer p {
    margin: 15px 0 0 0;
    font-size: 0.9em;
    font-weight: normal;
    text-align: center;
}

/* Estilo del Enlace "Inicio" */
.footer-link{
  /* Estilos de botón flotante limpio */
  background-color: #48bb78; /* Color de acento (como el botón de Proyectos) */
  color: #1a202c; /* Texto oscuro para el botón */
  font-weight: bold;
  font-size: 1.1em;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 50px; /* Forma de píldora/redondeada */
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.footer-link:hover{
  background-color: #38a169;
  transform: translateY(-2px); /* Pequeño efecto de elevación */
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.5);
}

/* Media Query para el Footer */
@media (max-width: 600px) {
    footer {
        padding: 2rem 1rem;
        font-size: 1rem;
    }
    .footer-link {
        font-size: 1em;
    }
}
</style>
