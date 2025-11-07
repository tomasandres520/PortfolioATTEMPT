<script setup>
//IMPORT DE IMAGENES
import Linkeding  from "/src/assets/svg/linkedin_icon.svg";
import Instagram from "/src/assets/svg/instagram_icon.svg";
import Github from"/src/assets/svg/github_icon.svg";
import Curriculum from "/src/assets/svg/cv_resume_icon.svg";
//-----------
const title = "QWERTY1234"
const description = "Estudiantes de la Universidad Tecnologica Nacional - San Rafael"
const residencia = " Argentina"
const presentacion = "Hola, bienvenido a nuestro portfolio grupal de proyectos."
const redesSociales = [
    {id:1, name: "Linkeding", src:Linkeding, url: "" },
    {id:2, name: "Instagram", src:Instagram, url: "" },
    {id:3, name: "Github", src:Github, url: "https://github.com/PaulRomero24"},
    {id:4, name: "Curriculum", src:Curriculum, url:"" },
]
</script>

<template>
    <section class="datos-personales">
        <div class="card">
            <h1>{{ title }}</h1>
            <h2>{{ description }}</h2>
            <p>{{ presentacion }}</p>
            <ul class="container-lista">
                <li v-for= "red in redesSociales" :key="red.id">
                    <a :href="red.url" target="_blank"><img class="icon-redesociales" :src="red.src" width="35rem" :alt="red.name"></a>
                  </li>
            </ul>
            <h4>{{ residencia }}</h4>
        </div>
    </section>
</template>

<style scoped>


.card {
    position: relative;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    text-align: center;
    transition: width 0.5 ease;
}
.card::before,.card::after{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.card::after{
  opacity: 1;
  transition: opacity 0.5s ease;
  background: rgba(224, 37, 27, 0.15);
}
.card::before{
  background:linear-gradient(
  to top right, rgb(28, 41, 52),
  rgb(147, 174, 197));
  z-index: 1;
  opacity: 0;
  transform: translateY(50%);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.card:hover{
  background: linear-gradient(rgb(17, 134, 230),rgb(92, 111, 126));
  opacity: 1;
  transform: translateY(0);
  transition: all 0.75s ease 0.5s;
}
  .card:hover::before {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1s ease, transform 1s ease 0.25s;
  }


.container-lista{
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
}

.icon-redsocial{
    align-items: center;
    background-color: aliceblue;
    border-radius: 50%;
    padding: 2px;
    margin: 5px;
    box-shadow: 0 0 5px rgba(95, 124, 205, 0.934);
}
.icon-redsocial:hover{
    background-color: rgb(28, 41, 52);
    box-shadow: 0 0 5px rgba(251, 249, 249, 0.934);
}
h1{
    font-size: 2.5rem;
}

p {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
}
h3{
    font-size: 1.2rem;
    font-weight: 600;
}

h1,h2,h3,h4,p{
  color: antiquewhite;
  position: relative;
  z-index: 1;
}

</style>
