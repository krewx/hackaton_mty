<template id="">
  <div class="">
    <MedicamentoDetalle />
    <PieChartComponent>
    </PieChartComponent>
  </div>
</template>

<script type="text/javascript">
import  MedicamentoDetalle from '~/components/Medicamentos/MedicamentoDetalle.vue'
import  PieChartComponent from '~/components/PieChartComponent.vue'
  export default {
    components:{
      MedicamentoDetalle,
      PieChartComponent
    }
  }
</script>
