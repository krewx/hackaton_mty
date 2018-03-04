<template id="">
  <nuxt-link :to="'/paciente/monitoreo/' + nombre " class="list-group-item list-group-item-action flex-column align-items-start "
  :class="{'list-group-item': status == 1,'list-group-item-warning': status == 2, 'list-group-item-danger': status == 3}">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1 titulo">{{nombre}}</h5>
      <small class="text-muted"> Proxima: {{ proxima }}.</small>
    </div>
    <small class="text-muted"> Ultima captura {{ ultima }} </small>
  </nuxt-link>
</template>


<script type="text/javascript">
  export default {
    name:'MonitoreoPreview',
    props:{
      id:{
        type:String,
        required:true
      },
      nombre:{
        type:String,
        required:true,
      },
      proxima:{
        type:String,
        required:false,
      },
      ultima:{
        type:String,
        required:false,
      },
      status:{
        type:String,
        required:false
      }
    }
  }
</script>


<style scoped>
  .mb-1.titulo{
    font-size:1rem;
  }
</style>
