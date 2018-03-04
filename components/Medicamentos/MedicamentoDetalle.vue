<template id="">
    <div class="">
      {{medicamento}}
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
        medicamento:{}
      }

    },
    mounted:function(){
      var itms = JSON.parse(localStorage.medicamentos);
      for(var i = 0; i< itms.length;i++){
        if(itms[i].id == this.$route.params.id)
          this.medicamento = itms[i];
        //  console.log(this.monitoreo);
      }
    }
  }
</script>
