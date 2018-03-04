<template id="">
    <div class="">

    </div>
</template>
<script type="text/javascript">
import  MedicamentoDetalle from '~/components/Medicamentos/MedicamentoDetalle.vue'
  export default {
    components:{
    MedicamentoDetalle
    },
    data:function(){
      return {
        lista:[]
      }

    },
    mounted:function(){
      this.lista = JSON.parse(localStorage.medicamentos);
    }
  }
</script>
