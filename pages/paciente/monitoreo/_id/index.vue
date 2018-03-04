<template id="">
    <div class="">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" > <nuxt-link to="/paciente/"> Inicio </nuxt-link> </li>
          <li class="breadcrumb-item active" aria-current="page"> <nuxt-link to="/paciente/monitoreo/"> Monitoreo </nuxt-link> </li>
          <li class="breadcrumb-item active" aria-current="page"> {{$route.params.id}} </li>
        </ol>
      </nav>
      <hr>
      <div class="" v-if="monitoreo.status == 1">
          <MonitoreoHistorial />

      </div>
      <div class="" v-if="monitoreo.status == 2">
        status 2
      </div>
      <div class="" v-if="monitoreo.status == 3">
        status 3
      </div>
    </div>
</template>
<script type="text/javascript">
import  MonitoreoHistorial from '~/components/Monitoreo/MonitoreoHistorial.vue'

export default {
  components:{
    MonitoreoHistorial
  },
  data(){
    return {
     monitoreo:{}
    }
  },
  mounted:function(){
    var itms = JSON.parse(localStorage.monitoreo);
    //console.log(this.$route.params,itms);
    for(var i = 0; i< itms.length;i++){
      if(itms[i].nombre == this.$route.params.id)
        this.monitoreo = itms[i];
      //  console.log(this.monitoreo);
    }
  },
  methods:{
    callParam(){
      console.log(this.$parent)
      console.log(this.$props)
    }
  },
  layout:'pacientes',

}
</script>
