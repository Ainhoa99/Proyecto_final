<template>
  <div class="row">
    <div class="contenido">
      <h2>Sobre nosotros</h2>
          <p>
            Somos un grupo dedicado al Desarrollo de Aplicaciones Web formado por Xabier Bravo y Ainhoa López.
            <br>
            Hasta el momento hemos hecho una página web que alberga un minijuego, pero seguiremos ampliando el número de juegos disponibles.
            <br>
            Este proyecto nos ha permitido por una parte demostrar lo aprendido durante este grado, y por otra, aplicar estos conocimientos a la realidad profesional.
          </p>
        
    </div>
  </div>
  <footerBar msg=""/>
  
</template>

<script>
import footerBar from '../components/footerBar.vue'

export default {
name: 'aboutUs',
    components: {
    footerBar
  }
}
</script>