<template>
  <navBar msg="Welcome to Your Vue.js App"/>

<!-- Iconos de font awesome -->
<!--
<font-awesome-icon icon="envelope" />
<font-awesome-icon icon="home" />
<font-awesome-icon icon="users" />
-->
</template>

<script>
import navBar from './components/navBar.vue'

export default {
  name: 'App',
  components: {
    navBar
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
</style>
