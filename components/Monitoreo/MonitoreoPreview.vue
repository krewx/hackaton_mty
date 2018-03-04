<template id="">
  <nuxt-link to="/paciente/" class="list-group-item list-group-item-action flex-column align-items-start list-group-item-success">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1 titulo">Monitoreo de {{nombre}}</h5>
      <small class="text-muted">Proxima captura en 3 horas</small>
    </div>
    <small class="text-muted">Ultima captura hace 3 horas.</small>
  </nuxt-link>
</template>


<script type="text/javascript">
  export default {
    name:'MonitoreoPreview',
    proprs:{
      id:{
        type:String,
        required:true
      },
      nombre:{
        type:String,
        required:true,
      },
      proximaToma:{
        type:Date,
        required:true
      }
    }
  }
</script>


<style scoped>


  .mb-1.titulo{
    font-size:1rem;
  }

</style>
