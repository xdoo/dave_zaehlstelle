<template>
  <v-chart 
    :options="bar"
    autoresize
    ></v-chart>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SampleChart extends Vue {
   
   get bar() {
     return {
       xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
          type: 'value'
      },
      color: ['#1976D2'],
      series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
      }]
     }
   }
}
</script>
<style>
/**
 * The default size is 600px×400px, for responsive charts
 * you may need to set percentage values as follows (also
 * don't forget to provide a size for the container).
 */
.echarts {
  width: 100%;
  height: 100%;
}
</style>