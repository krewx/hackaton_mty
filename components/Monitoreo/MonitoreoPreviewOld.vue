<template id="">
  <ul class="list-group componente">
    <nuxt-link to="/paciente/" class="list-group-item list-group-item-action flex-column align-items-start list-group-item-success">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1 titulo">Monitoreo de glucosa</h5>
        <small class="text-muted">Proxima captura en 3 horas</small>
      </div>
    <small class="text-muted">Ultima captura hace 3 horas.</small>
    </nuxt-link>
    <nuxt-link :to="'/paciente/' + 1 " class="list-group-item list-group-item-action flex-column align-items-start list-group-item-warning">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1 titulo">Monitoreo de ritmo cardiaco</h5>
        <small class="text-muted">Proxima captura en 5 minutos.</small>
      </div>
    <small class="text-muted">Ultima captura hace 3 horas.</small>
    </nuxt-link>
    <nuxt-link :to="'/paciente/' + 2 " class="list-group-item list-group-item-action flex-column align-items-start list-group-item-danger">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1 titulo">Monitoreo de ritmo cardiaco</h5>
        <small class="text-muted">Captura pendiente.</small>
      </div>
    <small class="text-muted">Ultima captura hace 3 horas.</small>
    </nuxt-link>
  </ul>
</template>

<style scoped>
  .list-group.componente {
    margin-top:20px;
    margin-left:5px;
    margin-right:5px;
  }

  .mb-1.titulo{
    font-size:1rem;
  }

</style>
