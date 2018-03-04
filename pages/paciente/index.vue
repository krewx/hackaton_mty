<template id="">
  <div class="" >
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Inicio</li>
      </ol>
    </nav>
    <hr>
    <ul class="list-group componente">
      <nuxt-link to="/paciente/medicamentos/"
      class="list-group-item d-flex justify-content-between align-items-center">
       <div class="d-flex w-100 justify-content-between">
        Medicamentos
        <span class="badge badge-primary badge-pill">3</span>
       </div>
     </nuxt-link>
    </ul>
    <ul class="list-group componente">
      <nuxt-link to="/paciente/monitoreo/"
      class="list-group-item d-flex justify-content-between align-items-center">
       <div class="d-flex w-100 justify-content-between">
        Monitoreo
        <span class="badge badge-primary badge-pill">2</span>
       </div>
     </nuxt-link>
    </ul>

  </div>
</template>

<style scope>

.list-group.componente {
  margin-top:20px;
  margin-left:5px;
  margin-right:5px;
  margin-bottom:20px;
}

a.list-group-item {
  color:#000;
  font-size:1.2rem;

}

a.list-group-item:hover {
  color:inherit;
  background-color:#f9f9f9;


}

</style>



<script >
  export default {

    data(){
      return {
        userId:''
      }
    },
    methods:{
      onLoadUser(){
        this.$router.push('/paciente/medicamentos/')
      }
    },
    layout:'pacientes',
    mounted(){
      localStorage.monitoreo = JSON.stringify([
        {"id":"1","nombre":"Glucosa","proxima":" 3 horas ", "ultima":" 3 horas","status":"1"},
        {"id":"2","nombre":"Frecuencia Cardiaca","proxima":" Ahora ", "ultima":" 3 horas","status":"2"},

      ]);

      localStorage.medicamentos = JSON.stringify([
        {"id":"1","nombre":"Insulina","proxima":" 3 horas ", "frecuencia":" cada 6 horas","status":" Correcta ", "cumplimiento":"88 %"},
        {"id":"2","nombre":"Paracetamol","proxima":" Ahora ", "frecuencia":" cada 8 horas","status":" Pendiente ","cumplimiento":"84 %"},
        {"id":"3","nombre":"Heparina","proxima":" 4 horas ", "frecuencia":" cada 5 horas","status":" Pendiente ", "cumplimiento":"86 %"}

      ]);


    }
  }
</script>
