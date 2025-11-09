<script setup>
//IMPORT DE IMAGENES
import Linkeding  from "/src/assets/svg/linkedin_icon.svg";
import Instagram from "/src/assets/svg/instagram_icon.svg";
import Github from"/src/assets/svg/github_icon.svg";
import Curriculum from "/src/assets/svg/cv_resume_icon.svg";
//-----------
const title = "Tomás Miguel Andrés"
const description = "Estudiante de la Universidad Tecnologica Nacional - San Rafael"
const residencia = " Argentina - Santa Fe"
const presentacion = "Bienvenido a mi portfolio || Soy parte del team 'Qwerty123' que se fusionó con los integrantes de'Codigo Colectivo' "
const redesSociales = [
  { id:1, name: "LinkedIn", src: Linkeding, url:"https://linkedin.com/in/tu-perfil", enabled: true },
  { id:2, name: "Instagram", src: Instagram, url:"https://www.instagram.com/tomas.andres520/", enabled: true },
  { id:3, name: "GitHub", src: Github, url:"https://github.com/tomasandres520", enabled: true },
  { id:4, name: "Curriculum", src: Curriculum, url: "/cv.pdf", enabled: true },
]
</script>

<template>
    <section class="datos-personales">
        <div class="card">
            <h1>{{ title }}</h1>
            <h2>{{ description }}</h2>
            <p>{{ presentacion }}</p>
              <ul class="container-lista">
                <li v-for="red in redesSociales" :key="red.id" class="red-item">
                  <a
                  v-if="red.url"
                  :href="red.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="icon-link"
                  >
                    <img
                    class="icon-redsocial"
                    :src="red.src"
                    :alt="red.name"
                    width="35"
                    height="35"
                  />
                </a>
              </li>
            </ul>
            <p>{{ residencia }}</p>
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
  z-index: 10;
  transition: opacity 0.5s ease;
  background: rgba(224, 37, 27, 0.15);
  pointer-events: none;
}
.card::before{
  background:linear-gradient(
  to top right, rgb(28, 41, 52),
  rgb(147, 174, 197));
  z-index: -1;
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


.container-lista {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  gap: 0; /* ← clave: 0px entre íconos */
  z-index: 25;
}

/* ✅ Eliminar márgenes/paddings por defecto de <li> */
.red-item {
  margin: 0;
  padding: 0;
}

/* ✅ Enlace: sin padding extra, solo el necesario para clic */
.icon-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;   /* igual para todos */
  height: 40px;  /* igual para todos */
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s;
}

.icon-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* ✅ Ícono: centrado y sin márgenes */
.icon-redsocial {
  width: 30px;
  height: 30px;
  filter: brightness(1);
  transition: filter 0.2s;
}
.icon-link:hover .icon-redsocial {
  filter: brightness(1.3);
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
  color: rgb(255, 255, 255);
  position: relative;
  z-index: 1;
}

</style>
