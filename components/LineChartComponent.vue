<template>
  <canvas id="myChart" width="400" height="400"></canvas>
</template>

<script>
export default {
  name:'LineChartComponent',
  props:{
    data:{
      type:Array,
      required:false
    },
    labels: {
      type:Array,
      required:false
    },
    label: {
      type:String,
      required:false
    }
  },
  mounted: function(){
  	var ctx = document.getElementById("myChart");
  	var myChart = new Chart(ctx, {
  	    type: 'line',
  	    data: {
  	        labels: (this.labels) ? this.labels : ["January","February","March","April","May","June","July"],
  	        datasets: [{
  	            label: (this.label) ? this.label : '# glucosa (md/dl)',
  	            data: (this.data) ? this.data : [65,59,80,81,56,55,40],
  	            borderColor: "rgb(75, 192, 192)",
  	            "lineTension":0.1
  	        }]
  	    },
  	    options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
        }
      }
  	});
  }
}
</script>

<style>
</style>
