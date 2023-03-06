<template>
    <div class="row">
        <div class="contenido">
            <h1> JUEGOS </h1>
            <p>Elige el juego que quieres probar</p>
            <br>
            <router-link to="/gameAhorcado"><button type="button" class="bg-info rounded-pill mr-4 py-3">Jugar ahorcado</button></router-link>
            <router-link to="/game3Raya"><button type="button" class="bg-info rounded-pill py-3">Jugar 3 en raya</button></router-link>
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