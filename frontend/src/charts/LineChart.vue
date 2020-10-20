<template>
    <VueApexCharts width="500" type="line" :options="options" :series="getSeries"></VueApexCharts>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'LineChart',
  components: {
      VueApexCharts
  },
  props : {
    sensorType : String,
    title: String,
    xLabel: String,
    yLabel: String,
    data: Array
  },
  data() {
    return {
      options: {
        xaxis: {
          type: 'category',
          title: {
            text: this.xLabel
          }
        },
        yaxis: {
          type: 'numeric',
          title: {
            text: this.yLabel
          }
        },
        colors: ['#3e3ea3', '#333333', '#ac3a43'],
        chart: {
          id: 'line-chart',
        },
        noData: {
          text: 'Loading...'
        },
        title: {
          text: this.title,
          floating: false,
          align: 'left',
          margin: 10,
          style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily:  undefined,
            color:  '#263238'
          },
        }
      },
    }
  },
  computed: {
    getSeries() {
      return [
        {
          name: this.title,
          data: this.data
        },
      ];
    }
  }
}
</script>

<style scoped>

</style>