<template id="">
  <div class="">
    <nuxt-link to="/paciente/medicamentos/">Atras</nuxt-link>
    <h1>Medicamento con id: {{$route.params}}</h1>
  </div>
</template>

<script type="text/javascript">
  export default {
    validate(data){
      //validacion para numeros en rutas;
      //console.log(data);
      return /^\d+$/.test(data.params.id);
    }
  }
</script>
