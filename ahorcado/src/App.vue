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
  margin: 0;
  padding: 0;
}

nav {
  padding: 15px;
}

nav a {
  font-weight: bold;
  color: black;
  font-size: 30px;
  text-decoration: none;
}
nav a:hover{
  color: white;
}


svg{
  width: 50px;
  height: 30px;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
.logo{
  width: 125px;
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
width: 50px;
transition: .3s;
}

.icon:hover {
transform: scale(1.5);
}

.contenido {
text-align: center;
padding-top: 5%;
padding-bottom: 5%;
}
.logo {
width: 100px;
height: auto;
}
footer{
  position: fixed;
  width: 100%;
  bottom: 0;
}
h1, h2{
  font-weight: 20px;
  padding: 20px;
}
button{
  padding: 50px;
  transition: .3s;
}
button:hover{
  transform: scale(1.2);
}
</style>

