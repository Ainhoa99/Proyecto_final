<template>
  <navBar msg=""/>

  <menuPrincipal msg=""/>

  <footerBar msg=""/>

  <juegoAhorcado msg=""/>

  
  <aboutUs msg=""/>
  

  <contactoVista msg=""/>

<!-- Iconos de font awesome -->
<!--
<font-awesome-icon icon="envelope" />
<font-awesome-icon icon="home" />
<font-awesome-icon icon="users" />

-->
</template>

<script>
import navBar from './components/navBar.vue'
import menuPrincipal from './components/menuPrincipal.vue'
import footerBar from './components/footerBar.vue'

import juegoAhorcado from './components/juegoAhorcado.vue'

import aboutUs from './components/aboutUs.vue'
import contactoVista from './components/contactoVista.vue'



export default {
  name: 'App',
  components: {
    navBar, footerBar, menuPrincipal, juegoAhorcado, aboutUs, contactoVista
  }
}
</script>



<style>
#app {
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: larger;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin: 0;
  padding: 0;
}

.icon {
  width: 100px;
}

.contenido {
  text-align: center;
  padding-top: 5%;
  padding-bottom: 5%;
}
.logo {
  width: 200px;
  height: auto;
}
</style>
