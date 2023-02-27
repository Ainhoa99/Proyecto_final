<template>
  <navBar msg=""/>
  <router-view/>
  <footerBar msg=""/>
</template>

<script>
import navBar from './components/navBar.vue'
import footerBar from './components/footerBar.vue'



export default {
  name: 'HomeView',
  components: {
    navBar, footerBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: black;
  font-size: 30px;
}
svg{
  width: 50px;
  height: 50px;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
