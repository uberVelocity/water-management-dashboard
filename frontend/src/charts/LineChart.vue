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
  props : {
    sensorType : String,
    title: String,
    xLabel: String,
    yLabel: String,
    data: Array
  },
  data() {
    return {
      series: [
        {
          name: this.title,
          data: this.data
        },
      ],
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
  created() {
    // eslint-disable-next-line no-console
    console.log(this.data);
  }
  // mounted() {
  //   this.series = [{
  //     data: this.$store.getters.PS_SENSORS
  //   }]
  // },
  // computed : {
  //   createSeries() {
  //     const res = this.x.map(function(e, i) {
  //       return {x: e, y: y[i]};
  //     });
  //     return [{data: res, name: this.title}];
  //   }
  // },
}
</script>

<style scoped>

</style>