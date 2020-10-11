<template>
    <VueApexCharts width="500" type="line" :options="options" :series="[{
        data: getSeries
      }]"></VueApexCharts>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'LineChart',
  components: {
      VueApexCharts
  },
  props : {
    sensorType : String
  },
  data() {
    return {
      series: [
        {
          name: 'Temperature',
          data: {}
        },
        {
          name: 'Pressure',
          data: {}
        },
      ],
      
      options: {
        xaxis: {
          type: 'datetime',
          labels: {
            format: 'dd/mm/yyyy'
          }
        },
        labels: ['Date', 'Temperature'],
        colors: ['#3e3ea3', '#333333', '#ac3a43'],
        chart: {
          id: 'line-chart',
        },
        noData: {
          text: 'Loading...'
        },
        title: {
          text: this.sensorType.toUpperCase() + ' sensor measurements',
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
  mounted() {
    this.series = [{
      data: this.$store.getters.PS_SENSORS
    }]
  },
  computed : {
    getSeries() {
      return this.$store.getters.PS_SENSORS;
    }
  }
}
</script>

<style scoped>

</style>