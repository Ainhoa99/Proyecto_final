
<template>
    <div class="row">
        <div class="contenido">
            <h2>Método de contacto</h2>
            <p>
                Podrá ponerse en contacto con nosotros a traves del email, facebook, twitter y whatsapp
                <br>
                Además, si quiere ver nuestro trabajo, lo tiene disponible en GitHub y Google drive pulsando en los enlaces situados en la zona inferior de la página.
            </p>
        </div>
    </div>
    <footerBar msg=""/>
</template>

<script>
import footerBar from '../components/footerBar.vue'
export default {
    name: 'contactoVista',
    components: {
    footerBar
  }
}
</script>