<template>
  <navBar msg=""/>
  <router-view/>
</template>

<script>
import navBar from './components/navBar.vue'




export default {
  name: 'HomeView',
  components: {
    navBar
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
  text-shadow: 1px 1.5px 2px white;
}


svg{
  width: 50px;
  height: 50px;
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
padding-top: 2%;
padding-bottom: 5%;
height: 100%;
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
  margin: 5px;
  transition: .3s;
}
button:hover{
  transform: scale(1.2);
}

#palabra_adivinar{
  margin: 5px;
}

#letras{
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
}

.letra{
  background-color: deepskyblue;
  border-radius: 30px ;
  font-size: x-small;
  padding: 20px;
  text-align: center;
  margin: 5px;
}

#jugar{
  border-radius: 10px;
  display: flex;
  padding: 5px;
}

#imagen_ahorcado{
  width: 100px;
}

span{
  margin: 2px;
  font-size: xx-large;
  font-weight: bold;
}
.v-line{
 border-left: thick solid #000;
 height:100%;
 left: 50%;
 position: absolute;
}
</style>

