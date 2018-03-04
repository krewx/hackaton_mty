<template>
  <canvas id="myChart" width="400" height="400"></canvas>
</template>

<script>
export default {
  name:'PieChartComponent',
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
  	    type: 'pie',
  	    data: {
  	        labels: (this.labels) ? this.labels : ["Red", "Blue"],
  	        datasets: [{
  	            label: (this.label) ? this.label : '# of Votes',
  	            data: (this.data) ? this.data : [20, 80],
  	            backgroundColor: [
  	                'rgba(255, 99, 132, 0.2)',
  	                'rgba(54, 162, 235, 0.2)'
  	            ],
  	            borderWidth: 1
  	        }]
  	    },
  	    options: {}
  	});
  }
}
</script>

<style>
</style>
