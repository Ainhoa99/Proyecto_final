<template>
  <div class="row">
    <div class="contenido">
      <h2>Sobre nosotros</h2>
          <p>
            Somos un pequeño grupo de Desarrollo de Aplicaciones Web formado por Xabier Bravo y Ainhoa López.
            <br>
            Pretendemos hacer un minijuego con el que poder demostrar lo estudiado a lo largo del curso.
            <br>
            De esta manera, queremos aplicar nuestros conociemientos en la materia de forma práctica.
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