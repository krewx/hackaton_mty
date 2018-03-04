<template id="">
  <div class="MedList">
    
    <table class="table">
      <thead>
        <tr>
          <th scope="col">
            # Toma
          </th>
          <th>
            Hora
          </th>
          <th scope="col">
            Valor
          </th>
          <th>
            Optimo
          </th>
        </tr>
      </thead>
       <tbody>

         <tr v-for="valor in tomas" :key="valor.id"  >
           <td scope="col" >
             {{ valor.id }}
           </td>
           <td >
            {{valor.hora}}
           </td>
           <td>
             {{valor.valor}}
           </td>
           <td>
             {{valor.optimo}}
           </td>
         </tr>
         <tr>
           <td colspan="4" class="text-center">
             <h3>
                Proxima captura en 3 horas
             </h3>
           </td>
         </tr>
       </tbody>
    </table>
  </div>
</template>


<script type="text/javascript">
  export default {
    data:function(){
      return {
        tomas:[{'id':1,'numero':'1','hora':'7:12 am','valor':'130 md/dl', 'optimo':'80 - 130 md/dl'}]
      }
    }
  }
</script>
