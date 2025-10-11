<script setup>
const title = "Juan Perez"
const description = "Tecnico Universitario en Programacion - UTN"
const residencia = "San Rafael,Mendoza, Argentina"
const presentacion = "Hola, bienvenido a mi portafolio de proyectos.Soy un desorrallador chiquitito"
const redesSociales = [
    {id:1, name: "Linkeding", src:"/src/assets/svg/linkedin_icon.svg", url: "" },
    {id:2, name: "Instagram", src:"/src/assets/svg/instagram_icon.svg", url: "" },
    {id:3, name: "Github", src:"/src/assets/svg/github_icon.svg", url: "https://github.com/PaulRomero24"},
    {id:4, name: "Curriculum", src:"/src/assets/svg/cv_resume_icon.svg", url:"" },
]
const telefono = "+2130352351"
</script>

<template>
    <section class="datos-personales">
        <div class="card">
            <h1>{{ title }}</h1>
            <h2>{{ description }}</h2>
            <p>{{ presentacion }}</p>
            <ul class="container-lista">
                <li v-for= "red in redesSociales" :key="red.id">
                    <a :href="red.url"><img class="icon-redesociales" :src="red.src" width="35rem" :alt="red.name"></a>
                  </li>
            </ul>
            <h3>Mi telefono personal : {{ telefono }} </h3>
            <h4>{{ residencia }}</h4>
        </div>
    </section>
</template>

<style scoped>

h1{
    font-size: 2.5rem;
}

p {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.card {
    background-color: rgb(28, 41, 52);
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    text-align: center;
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
h3{
    font-size: 1.2rem;
    font-weight: 600;
}
</style>
