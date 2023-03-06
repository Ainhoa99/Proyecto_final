<template>
  <div class="row">
    <div class="contenido">
        <button id="jugar" class="bg-info" v-on:click="inicio">Obtener palabra</button>
        <p id="resultado">

        </p>
        <h1> AHORCADO </h1>
        <img src="/img/Ahorcado-0.png" alt="ahorcado" id="imagen_ahorcado">
        <div>
          <p id="palabra_adivinar">
          </p>
         
          <div id="letras">
            <button class="letra" v-on:click="click_letras" disabled>A</button>
            <button class="letra" v-on:click="click_letras" disabled>B</button>
            <button class="letra" v-on:click="click_letras" disabled>C</button>
            <button class="letra" v-on:click="click_letras" disabled>D</button>
            <button class="letra" v-on:click="click_letras" disabled>E</button>
            <button class="letra" v-on:click="click_letras" disabled>F</button>
            <button class="letra" v-on:click="click_letras" disabled>G</button>
            <button class="letra" v-on:click="click_letras" disabled>H</button>
            <button class="letra" v-on:click="click_letras" disabled>I</button>
            <button class="letra" v-on:click="click_letras" disabled>J</button>
            <button class="letra" v-on:click="click_letras" disabled>K</button>
            <button class="letra" v-on:click="click_letras" disabled>L</button>
            <button class="letra" v-on:click="click_letras" disabled>M</button>
            <button class="letra" v-on:click="click_letras" disabled>N</button>
            <button class="letra" v-on:click="click_letras" disabled>Ñ</button>
            <button class="letra" v-on:click="click_letras" disabled>O</button>
            <button class="letra" v-on:click="click_letras" disabled>P</button>
            <button class="letra" v-on:click="click_letras" disabled>Q</button>
            <button class="letra" v-on:click="click_letras" disabled>R</button>
            <button class="letra" v-on:click="click_letras" disabled>S</button>
            <button class="letra" v-on:click="click_letras" disabled>T</button>
            <button class="letra" v-on:click="click_letras" disabled>U</button>
            <button class="letra" v-on:click="click_letras" disabled>V</button>
            <button class="letra" v-on:click="click_letras" disabled>W</button>
            <button class="letra" v-on:click="click_letras" disabled>X</button>
            <button class="letra" v-on:click="click_letras" disabled>Y</button>
            <button class="letra" v-on:click="click_letras" disabled>Z</button>
          </div>
        </div>
        
        
    </div>
            
  </div>
    
</template>
<script >
import datos from "../assets/palabras.json";
var palabra = '';
var aciertos=0;
var errores=0;
const boton_letra = document.getElementsByClassName('letra');
export default {
  name: 'juegoAhorcado',
  data: () => ({
    palabra: ""
  }),
  computed:{
    items() {
      return datos.map((item) => {
        return item;
      })
    }
  },
  methods: {
    obtener_random: function(min, max){
      const valores = max-min;
      const valor_azar = Math.floor(Math.random()*valores) + min;
      return valor_azar
    },
    inicio: function(event){
      const imagen = document.getElementById('imagen_ahorcado');
      imagen.src='img/Ahorcado-0.png';
      const resultado = document.getElementById('resultado');
      resultado.innerHTML="";
      const button = event.target;
      button.disabled=true;
      errores=0;
      aciertos=0;
      for(let i=0;i<boton_letra.length;i++){
        boton_letra[i].disabled=false;
      }
        const parrafo =document.getElementById('palabra_adivinar');
        const cant_palabras = datos.length;
        const valor_azar = this.obtener_random(0,cant_palabras);
        palabra = datos[valor_azar];
        // ver la palabra elegida
        console.log(palabra);
        const cant_letras = palabra.length;
        while(parrafo.hasChildNodes()){
          parrafo.removeChild(parrafo.firstChild)
        }
        for (var i=0; i<cant_letras;i++){
          const span = document.createElement('span');
          parrafo.appendChild(span);
          span.className="raya"
          span.innerHTML="_"
        }
    },
    click_letras: function(event){
      // const btn_letras = document.getElementById('letras');
      var acierto=false;
      const spans = document.getElementsByClassName('raya');
      const button = event.target;
      button.disabled=true;
      const letra = button.innerHTML.toLocaleLowerCase();
      const palabra_minus = palabra.toLocaleLowerCase();
      for (let i=0;i<palabra_minus.length;i++){
        if(letra == palabra_minus[i]){
          spans[i].innerHTML=letra
          aciertos= aciertos +1;
          acierto=true;
        }
      }
      if (acierto==false){
        errores = errores+1;
        console.log(errores);
        // CAMBIO DE LA IMAGEN
        // var source= new URL('/img/Ahorcado-'+errores+'.png', import.meta.url);
        const imagen = document.getElementById('imagen_ahorcado');
        imagen.src='/img/Ahorcado-'+errores+'.png'

      }
      const resultado = document.getElementById('resultado');
      if (errores == 7){
        resultado.innerHTML="Lo lamento, has perdido la partida. <br> La palabra era: "+palabra;
        this.finJuego()
      } else if (aciertos==palabra_minus.length) {
        resultado.innerHTML="¡ENHORABUENA! Has ganado la partida";
        this.finJuego();
      }
    },
    finJuego: function(){
      const boton_inicio = document.getElementById('jugar');
      boton_inicio.disabled=false;
      for(let i=0;i<boton_letra.length;i++){
        boton_letra[i].disabled=true;
      }
      
    }
  }

}

</script>