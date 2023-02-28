<template>
    <div class="row">
        <div class="contenido">
            <h1> Juego del ahorcado </h1>
            <p>¡Adivina la palabra letra a letra antes de que se acaben tus intentos para ganar!</p>
            <br>
            <router-link to="/game"><button type="button" class="bg-info rounded-pill py-3">Jugar</button></router-link>
            
        </div>
            
    </div>
</template>

<script>
export default {
  name: 'menuPrincipal'
}
</script>