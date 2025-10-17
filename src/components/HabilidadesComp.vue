<script setup>
import { ref } from 'vue';

const Habilidades = ref([
  {
    id: 1,nombre: "Lenguajes de Programacion",habilidades: [
      {item: 1,nombre: "JavaScript",nivel: "Intermedio", icono: "/src/components/icons/JavaScript.svg"},
      {item: 2,nombre: "Python",nivel: "Intermedio", icono: "/src/components/icons/Python.svg"},
      {item: 3,nombre: "HTML / CSS",nivel: "Intermedio", icono: "/src/components/icons/HTML-CSS.svg"},
      {item: 4,nombre: "Java",nivel: "Intermedio", icono: "/src/components/icons/java.svg"},
      {item: 5,nombre: "SQL",nivel: "Intermedio", icono: "/src/components/icons/SQL.svg"}
    ]
  },
  {
    id: 2,nombre: "Frameworks y Librerias ",habilidades: [
      {item: 1,nombre: "React.js",nivel: "Basico", icono: "/src/components/icons/React.svg"},
      {item: 2,nombre: "Vue.js",nivel: "Basico", icono: "/src/components/icons/Vue.svg"},
      {item: 3,nombre: "Node.js",nivel: "Basico", icono: "/src/components/icons/Node.svg"},
      {item: 4,nombre: "Django",nivel: "Basico", icono: "/src/components/icons/django.svg"},
      {item: 5,nombre: "Bootstrap",nivel: "Basico", icono: "/src/components/icons/bootstrap.svg"}
    ]
  },
  {
    id: 3,nombre: "Herramientas y Software ",habilidades: [
      {item: 1,nombre: "Git",nivel: "Intermedio", icono: "/src/components/icons/Git.svg"},
      {item: 2,nombre: "Docker",nivel: "Basico", icono: "/src/components/icons/Docker.svg"},
      {item: 3,nombre: "Cypres",nivel: "Basico", icono: "/src/components/icons/cypress.svg"},
      {item: 4,nombre: "Figma",nivel: "Basico", icono: "/src/components/icons/Figma.svg"},
      {item: 5,nombre: "Visual Studio Code",nivel: "Intermedio", icono: "/src/components/icons/VsCode.svg"}
    ]
  },
  {
    id: 4,nombre: "Bases de datos ",habilidades: [
      {item: 1,nombre: "MongoDB",nivel: "Basico", icono: "/src/components/icons/MongoDB.svg"},
      {item: 2,nombre: "MySQL",nivel: "Basico", icono: "/src/components/icons/MySQL.svg"},
      {item: 3,nombre: "PostgreSQL",nivel: "Basico", icono: "/src/components/icons/PostgreSQL.svg"},
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
.skills-container{
  padding: 2rem;
  display: flex;
}

.skills-categoria{
  margin-bottom: 20px;
}

.skills-categoria h3{
  display: flex;
  justify-content: left;
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: aliceblue;
  font-weight: bold;
}

.skill{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
}

.skill{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: rgba(241, 245, 243, 0.856);
  padding: 0.3rem;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(2, 151, 151, 0.963);
  flex: 1 1 200px;
  max-width: 250px;
}
.skill:hover{
  background-color: rgba(2, 151, 151, 0.963);
  border-radius: 12px;
  font-size: 1.3em;
  transition: .5s ease;
}
.skill img{
  width: 35px;
  height: 35px;
}
.skill span{
  font-size: 1em;
  color: #333;
}

@media(max-width:768px){
  .skills-categoria h3{
    justify-content: center;
  }
  .skill{
    justify-content: center;
  }
}


</style>
