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
      <h4 class="text-center">Historico de {{$route.params.id}}</h4>
      <div v-if="monitoreo.status == 1" >
          <MonitoreoHistorial />
    		  <LineChartComponent
    		  	:data="info"
    		  	:labels="labels"  >
    		  </LineChartComponent>
      </div>
      <div class="" v-if="monitoreo.status == 2">
        <form class="" >
          <div class="form-group">
            <label for="exampleInputEmail1">Latidos por minuto</label>
            <input type="number" class="form-control" aria-describedby="emailHelp" placeholder="Latidos por minuto">
          </div>
          <button class="btn btn-primary" type="button" name="button" @click="agregarLatidos">Guardar</button>
        </form>
      </div>
    </div>
</template>
<script type="text/javascript">
import  MonitoreoHistorial from '~/components/Monitoreo/MonitoreoHistorial.vue'
import  MonitoreoCaptura from '~/components/Monitoreo/MonitoreoCaptura.vue'
import  LineChartComponent from '~/components/LineChartComponent.vue'

export default {
  components:{
    MonitoreoHistorial,
    MonitoreoCaptura,
    LineChartComponent
  },
  data(){
    return {
     nuevo:0,
     itms :[],
     monitoreo:{},
     info:[130,90,135],
     labels: ['7:12 am','02:30 pm','08:00 pm']
    }
  },
  mounted:function(){
    this.itms = JSON.parse(localStorage.monitoreo);
    //console.log(this.$route.params,itms);
    for(var i = 0; i< this.itms.length;i++){
      if(this.itms[i].nombre == this.$route.params.id)
        this.monitoreo = this.itms[i];
    }
    console.log(this.monitoreo);
  },
  methods:{
    agregarLatidos(){


    }
  },
  layout:'pacientes',

}
</script>
