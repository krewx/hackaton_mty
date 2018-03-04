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
          <MonitoreoPreview id="1"
          nombre="Glucosa"
          proxima=" 3 horas"
          ultima=" 3 horas "
          status="1" />
          <MonitoreoPreview id="1"
          nombre="Frecuencia Cardiaca"
          proxima="Ahora"
          ultima=" 3 horas "
          status="2" />
          <MonitoreoPreview id="1"
          nombre="Saturacion de oxigeno"
          proxima=" hace 5 minutos"
          ultima=" 3 horas "
          status="3" />
      </ul>



    </div>
</template>

<script type="text/javascript">
import  MonitoreoPreview from '~/components/Monitoreo/MonitoreoPreview.vue'
  export default {
    components:{
    MonitoreoPreview
    },
  }
</script>
