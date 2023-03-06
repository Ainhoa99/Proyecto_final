<template>
  <div class="row">
    <div class="contenido">
      <Grid />
        
    </div>
            
  </div>
    
</template>
<script >
import Grid from '@/components/Grid';

export default {
  name: 'app',
  components: {
    Grid
  },
  created() {
    this.$store.commit('initGrid');
  }
}
</script>