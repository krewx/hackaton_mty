<template id="">
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" > <nuxt-link to="/paciente/"> Inicio </nuxt-link> </li>
        <li class="breadcrumb-item active" aria-current="page"> Medicamentos </li>
      </ol>
    </nav>
    <h2 class="text-center"> Tratamiento actual </h2>
    <MedicamentosLista />

    
  </div>
</template>




<script type="text/javascript">
  import  MedicamentosLista from '~/components/Medicamentos/MedicamentosLista.vue'
  export default {
    components:{
      MedicamentosLista
    },
    layout:'pacientes'
  }
</script>
