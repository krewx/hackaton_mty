<template id="">

  <div >
      <h1>pacientes index</h1>
    <input type="text" v-model="userId" >
    <button  @click="onLoadUser"> ver paciente</button>
  </div>
</template>

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
    }
  }
</script>
