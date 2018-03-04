<template id="">
    <div class="">
      <div class="MedList">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">
                #
              </th>
              <th scope="col">
                Medicamento
              </th>
              <th scope="col" class="text-center">
                Estado de toma
              </th>
              <th class="text-center">
              % de cumplimiento
              </th>
            </tr>
          </thead>
           <tbody>
             <tr v-for="medicamento in lista" :key="medicamento.id" @click="verMed(medicamento)" >
               <td>
                 {{medicamento.id}}
               </td>
               <td>
                 {{medicamento.nombre}}
               </td>
               <td  class="text-center">
                 {{medicamento.status}}
               </td>
               <td class="text-center">
                 {{medicamento.cumplimiento}}
               </td>
             </tr>
           </tbody>
        </table>
      </div>
    </div>
</template>
<script type="text/javascript">
import  MedicamentosLista from '~/components/Medicamentos/MedicamentosLista.vue'
  export default {
    components:{
    MedicamentosLista
    },
    data:function(){
      return {
        lista:[]
      }

    },
    methods:{
      verMed:function(data){
        this.$route.path().push('/'+data.nombre+'/')
        
      }
    },
    mounted:function(){
      this.lista = JSON.parse(localStorage.medicamentos);
    }
  }
</script>
