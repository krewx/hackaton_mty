<template id="">
  <div >
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" > <nuxt-link to="/paciente/"> Inicio </nuxt-link> </li>
        <li class="breadcrumb-item active" aria-current="page"> Medicamentos </li>
      </ol>
    </nav>
    <h2 class="text-center"> Tratamiento actual </h2>
    <MedicamentosLista />
  	<BarChartComponent
  		:data="info"
  		:labels="labels"
  		label="% de cumplimiento"
  	>
    </BarChartComponent>
  </div>
</template>




<script type="text/javascript">
  import  MedicamentosLista from '~/components/Medicamentos/MedicamentosLista.vue'
  import  BarChartComponent from '~/components/BarChartComponent.vue'
  export default {
    components:{
      MedicamentosLista,
      BarChartComponent
    },
    data: function(){
    	return {
    		info: [],
    		labels: []
    	}
    },
    layout:'pacientes',
    mounted: function(){
    	let lista = JSON.parse(localStorage.medicamentos);
    	var i, aux;
    	for (i=0; i<lista.length; i++){
    		aux = lista[i].cumplimiento.replace(" %","");
    		this.info.push(parseInt(aux));
    		this.labels.push(lista[i].nombre);
    	}
    }
  }
</script>
