<template id="">
    <div class=" container">
      <hr>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" > <nuxt-link to="/paciente/"> Inicio </nuxt-link> </li>
          <li class="breadcrumb-item" aria-current="page"> <nuxt-link to="/paciente/medicamentos"> Medicamentos </nuxt-link> </li>
          <li class="breadcrumb-item active" aria-current="page"> {{medicamento.nombre}} </li>
        </ol>
        <div class="">

          <div class="alert alert-primary" role="alert">
            <h4 class="alert-heading">Instrucciones de terapeuticas</h4>
            <ul>
              <li v-for="texto in medicamento.instrucciones" :key="texto">
                {{texto}}
              </li>
            </ul>
          </div>
          <br>
          <div class="alert alert-danger" role="alert">
            <h4 class="alert-heading">Contraindicaciones </h4>
            <ul>
              <li v-for="texto in medicamento.riesgos" :key="texto">
                {{texto}}
              </li>
            </ul>
          </div>
          <br>
        </div>
        <PieChartComponent/>
      </nav>
    </div>
</template>
<script type="text/javascript">
import  MedicamentoDetalle from '~/components/Medicamentos/MedicamentoDetalle.vue'
import  PieChartComponent from '~/components/PieChartComponent.vue'
  export default {
    components:{
    MedicamentoDetalle,
    PieChartComponent
    },
    data:function(){
      return {
        medicamento:{}
      }

    },
    layout:'pacientes',
    mounted:function(){
      var itms = JSON.parse(localStorage.medicamentos);
      for(var i = 0; i< itms.length;i++){
        if(itms[i].id == this.$route.params.id)
          this.medicamento = itms[i];
        //  console.log(this.monitoreo);
      }
    },
  }
</script>
