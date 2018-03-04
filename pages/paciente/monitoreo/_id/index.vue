<template id="">
    <div class="">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" > <nuxt-link to="/paciente/"> Inicio </nuxt-link> </li>
          <li class="breadcrumb-item active" aria-current="page"> <nuxt-link to="/paciente/monitoreo/"> Monitoreo </nuxt-link> </li>
          <li class="breadcrumb-item active" aria-current="page"> {{$route.params.id}} </li>
        </ol>
      </nav>
      <hr>
      <div class="">
        <button type="button" @click="callParam" name="button">a ver?</button>


      </div>
    </div>
</template>
<script type="text/javascript">
export default {
  data(){
    return {
      userId:''
    }
  },
  methods:{
    callParam(){
      console.log(this.$parent)
      console.log(this.$props)
    }
  },
  layout:'pacientes',
  props:['datos']

}
</script>
