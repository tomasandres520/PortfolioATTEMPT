<script setup>
//IMAGENES
import JavaScript from "/src/components/icons/JavaScript.svg"
import Python from "/src/components/icons/Python.svg"
import HTMLCSS from "/src/components/icons/HTML-CSS.svg"
import Java from "/src/components/icons/java.svg"
import SQL from "/src/components/icons/SQL.svg"
import React from  "/src/components/icons/React.svg"
import Vue from "/src/components/icons/Vue.svg"
import Node from "/src/components/icons/Node.svg"
import Django from "/src/components/icons/django.svg"
import Bootstrap from "/src/components/icons/bootstrap.svg"
import Git from "/src/components/icons/Git.svg"
import Docker from "/src/components/icons/Docker.svg"
import Cypres from "/src/components/icons/cypress.svg"
import Figma from "/src/components/icons/Figma.svg"
import VSC from "/src/components/icons/VsCode.svg"
import MongoDB from "/src/components/icons/MongoDB.svg"
import MySQL from "/src/components/icons/MySQL.svg"
import PostgreSQL from "/src/components/icons/PostgreSQL.svg"
//--------------------------
import { ref } from 'vue';

const Habilidades = ref([
  {
    id: 1,nombre: "Lenguajes de Programacion",habilidades: [
      {item: 1,nombre: "JavaScript",nivel: "Intermedio", icono: JavaScript},
      {item: 2,nombre: "Python",nivel: "Intermedio", icono: Python},
      {item: 3,nombre: "HTML / CSS",nivel: "Intermedio", icono: HTMLCSS},
      {item: 4,nombre: "Java",nivel: "Intermedio", icono: Java},
      {item: 5,nombre: "SQL",nivel: "Intermedio", icono: SQL}
    ]
  },
  {
    id: 2,nombre: "Frameworks y Librerias ",habilidades: [
      {item: 1,nombre: "React.js",nivel: "Basico", icono:React},
      {item: 2,nombre: "Vue.js",nivel: "Basico", icono: Vue},
      {item: 3,nombre: "Node.js",nivel: "Basico", icono: Node},
      {item: 4,nombre: "Django",nivel: "Basico", icono: Django},
      {item: 5,nombre: "Bootstrap",nivel: "Basico", icono: Bootstrap}
    ]
  },
  {
    id: 3,nombre: "Herramientas y Software ",habilidades: [
      {item: 1,nombre: "Git",nivel: "Intermedio", icono: Git},
      {item: 2,nombre: "Docker",nivel: "Basico", icono: Docker},
      {item: 3,nombre: "Cypres",nivel: "Basico", icono: Cypres},
      {item: 4,nombre: "Figma",nivel: "Basico", icono: Figma},
      {item: 5,nombre: "Visual Studio Code",nivel: "Intermedio", icono: VSC}
    ]
  },
  {
    id: 4,nombre: "Bases de datos ",habilidades: [
      {item: 1,nombre: "MongoDB",nivel: "Basico", icono: MongoDB},
      {item: 2,nombre: "MySQL",nivel: "Basico", icono: MySQL},
      {item: 3,nombre: "PostgreSQL",nivel: "Basico", icono:PostgreSQL},
    ]
  }
])
</script>

<template>
  <section class="skills-container">
    <div v-for="habilidad in Habilidades" :key="habilidad.id" class="skills-categoria">
      <h3>{{ habilidad.nombre }}</h3>
      <ul class="skills">
        <li v-for="listas in habilidad.habilidades" :key="listas.item" class="skill">
          <img :src="listas.icono" :alt="listas.nombre">
          <span>{{ listas.nombre }}: {{ listas.nivel }}</span>
        </li>
      </ul>
    </div>

  </section>
</template>


<style scoped>
.skills-container {
  padding: 2rem;
  display: flex;
  flex-wrap: wrap; /* ✅ Permite que las categorías se apilen en móviles */
  gap: 2rem; /* Espaciado entre categorías */
  justify-content: center;
}

.skills-categoria {
  flex: 1 1 300px; /* Cada categoría ocupa al menos 300px, pero se ajusta */
  max-width: 500px; /* Evita que sea demasiado ancho en desktop */
}

.skills-categoria h3 {
  text-align: left;
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: aliceblue;
  font-weight: bold;
  padding: 0 8px;
}

.skills {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.skill {
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: rgba(241, 245, 243, 0.856);
  padding: 0.6rem;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(2, 151, 151, 0.963);
  min-width: 0; /* ✅ Evita desbordamiento de texto */
}

.skill:hover {
  background-color: rgba(2, 151, 151, 0.963);
  border-radius: 12px;
  font-size: 1.1em;
  color: white;
  transition: 0.3s ease;
}

.skill img {
  width: 35px;
  height: 35px;
  flex-shrink: 0; /* ✅ Evita que la imagen se encoja demasiado */
}

.skill span {
  font-size: 1em;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ✅ Móviles */
@media (max-width: 768px) {
  .skills-container {
    padding: 1rem;
    gap: 1.5rem;
  }

  .skills-categoria {
    flex: 1 1 100%; /* Ocupa el 100% del ancho en móviles */
  }

  .skills-categoria h3 {
    text-align: center;
    font-size: 1.3rem;
  }

  .skill {
    justify-content: flex-start;
    padding: 0.5rem;
  }

  .skill span {
    white-space: normal; /* Permite salto de línea en móvil si es necesario */
  }
}
</style>
