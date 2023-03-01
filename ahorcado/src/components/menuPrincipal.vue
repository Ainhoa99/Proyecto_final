<template>
    <div class="row">
        <div class="contenido">
            <h1> Juego del ahorcado </h1>
            <p>¡Adivina la palabra letra a letra antes de que se acaben tus intentos para ganar!</p>
            <br>
            <router-link to="/game"><button type="button" class="bg-info rounded-pill py-3">Jugar</button></router-link>
            
        </div>
            
    </div>
    <footerBar msg=""/>
</template>

<script>
import footerBar from '../components/footerBar.vue'

export default {
  name: 'menuPrincipal',
    components: {
    footerBar
  }
}
</script>