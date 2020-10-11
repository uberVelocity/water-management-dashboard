<template>
    <VueApexCharts width="500" type="line" :options="options" :series="series"></VueApexCharts>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    name: 'LineChart',
    components: {
        VueApexCharts
    },
    data() {
      return {
        series: [],
        xaxis: {
          type: 'datetime'
        },
        options: {
          colors: ['#3e3ea3', '#333333', '#ac3a43'],
          chart: {
            id: 'line-chart',
          },
          dataLabels: {
            enabled: false
          },
          noData: {
            text: 'Loading...'
          }
        },
      }
    },
}
</script>

<style scoped>

</style>