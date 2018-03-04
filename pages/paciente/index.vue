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
        {'instrucciones':['Consumir despues de cada alimento','No ingerir bebidas alcoholicas 30 minutos antes'],"riesgos":['Consumir en caso de glucosa superior a 135 md/dl '],"id":"1","nombre":"Insulina","proxima":" 3 horas ", "frecuencia":" cada 6 horas","status":" Correcta ", "cumplimiento":"88 %"},
        {'instrucciones':['Evitar bebidas con alcohol'],"riesgos":['Ninguno'], "id":"2","nombre":"Paracetamol","proxima":" Ahora ", "frecuencia":" cada 8 horas","status":" Pendiente ","cumplimiento":"84 %"},
        {'instrucciones':['No superar dosis indicada'],"riesgos":['Suspender en caso de molestias en la piel'],"id":"3","nombre":"Heparina","proxima":" 4 horas ", "frecuencia":" cada 5 horas","status":" Pendiente ", "cumplimiento":"86 %"}
      ]);

	  OneSignal.push(["init", {
	  		appId: 'f03d1541-af29-452c-a644-375574401d95',
	  		safari_web_id: 'web.onesignal.auto.44737891-769a-4856-a052-0f3c9471900',
	      allowLocalhostAsSecureOrigin: true,
	      welcomeNotification: {
	          disable: false
	      }
	  }]);
	  OneSignal.isPushNotificationsEnabled().then(function(isEnabled) {
	      if (isEnabled)
	        OneSignal.sendSelfNotification(
	          /* Title (defaults if unset) */
	          "OneSignal Web Push Notification",
	          /* Message (defaults if unset) */
	          "Action buttons increase the ways your users can interact with your notification.",
	           /* URL (defaults if unset) */
	          'https://example.com/?_osp=do_not_open',
	          /* Icon */
	          'https://onesignal.com/images/notification_logo.png',
	          {
	            /* Additional data hash */
	            notificationType: 'news-feature'
	          },
	          [{ /* Buttons */
	            /* Choose any unique identifier for your button. The ID of the clicked button is passed to you so you can identify which button is clicked */
	            id: 'like-button',
	            /* The text the button should display. Supports emojis. */
	            text: 'Like',
	            /* A valid publicly reachable URL to an icon. Keep this small because it's downloaded on each notification display. */
	            icon: 'http://i.imgur.com/N8SN8ZS.png',
	            /* The URL to open when this action button is clicked. See the sections below for special URLs that prevent opening any window. */
	            url: 'https://example.com/?_osp=do_not_open'
	          },
	          {
	            id: 'read-more-button',
	            text: 'Read more',
	            icon: 'http://i.imgur.com/MIxJp1L.png',
	            url: 'https://example.com/?_osp=do_not_open'
	          }]
	        );

	  });

    }
  }
</script>
