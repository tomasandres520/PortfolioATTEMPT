// eslint-disable-next-line vue/multi-word-component-names
<script setup>
import { ref } from 'vue';

// Definición de los enlaces de navegación
const navegacion = ref([
        {id: 1, nombre: "Experiencia", enlace: "#experiencia"},
    {id: 2, nombre: "Proyectos", enlace: "#proyectos"},
    {id: 3, nombre: "Habilidades", enlace: "#habilidades"},
]);
</script>

<template>
    <nav class="navbar">
        <div class="navbar-menu">
            <ul class="nav-list">
                <li v-for="nav in navegacion" :key="nav.nombre">
                    <a :href="nav.enlace" class="nav-item">
                        {{ nav.nombre }}
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
/* 🎨 Estilos Generales de la Barra */
.navbar {
    display: flex;
    flex-wrap: wrap;
    background-color: #3f5a7a; /* Color de fondo azul oscuro/gris */
    padding: 1rem 1.5rem;
    justify-content: flex-end; /* Alinear el menú a la derecha */
    font-size: 1.1rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%; /* Asegurar que ocupe todo el ancho */
    box-sizing: border-box;
}

/* 🧭 Contenedor del Menú */
.navbar-menu {
    display: flex;
    align-items: center;
}

/* 📑 Lista de Navegación */
.nav-list {
    display: flex; /* Muestra los elementos en línea */
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 1.5rem; /* ✨ Espaciado entre los ítems de lista */
}

/* 📜 Ítem de Lista (El <li>) - Opcional, solo para referencia */
.nav-list li {
    /* No necesita estilos específicos gracias a 'gap' */
}

/* 🔗 Estilo del Enlace (El <a>) */
.nav-item {
    color: #ffffff; /* Texto blanco para contraste */
    text-decoration: none;
    padding: 0.5rem 1rem; /* Padding alrededor del texto */
    border: 2px solid transparent; /* Borde transparente por defecto */
    border-radius: 8px; /* Bordes redondeados */
    transition: all 0.3s ease-in-out; /* Transición para todos los cambios */
}

/* 🖱️ Efecto Hover */
.nav-item:hover {
    background-color: #4a75a3; /* Un color de fondo más suave al pasar el ratón */
    border-color: #f0f0f0; /* Borde sutil al pasar el ratón */
    color: #ffffff;
    transform: translateY(-2px); /* Pequeño efecto de elevación */
}

/* 📱 Media Query para Móviles */
@media (max-width: 768px) {
    .navbar {
        padding: 1rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .navbar-menu {
        width: 100%;
        justify-content: center;
    }

    .nav-list {
        flex-direction: column; /* Apilar los enlaces */
        width: 100%;
        gap: 0.5rem;
        align-items: center;
    }

    .nav-list li {
        width: 100%;
        text-align: center;
    }

    .nav-item {
        font-size: 1rem;
        width: 90%;
        display: block;
        margin: 0 auto;
        box-sizing: border-box; /* Asegura que el padding no desborde el ancho */
    }
}
</style>
