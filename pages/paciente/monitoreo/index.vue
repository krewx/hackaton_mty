<template id="">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" > <nuxt-link to="/paciente/"> Inicio </nuxt-link> </li>
          <li class="breadcrumb-item active" aria-current="page"> Monitoreo </li>
        </ol>
      </nav>
      <hr>
      <ul class="list-group">
          <MonitoreoPreview v-for="item of lista"
          :key="item.id"
          :id="item.id"
          :nombre="item.nombre"
          :proxima="item.proxima"
          :ultima="item.ultima"
          :status="item.status" />
      </ul>
    </div>
</template>



<script type="text/javascript">
import  MonitoreoPreview from '~/components/Monitoreo/MonitoreoPreview.vue'
  export default {
    components:{
    MonitoreoPreview
    },
    data:function(){
      return {
        lista:[]
      }

    },
    mounted:function(){
      this.lista = JSON.parse(localStorage.monitoreo);
    }
  }
</script>
