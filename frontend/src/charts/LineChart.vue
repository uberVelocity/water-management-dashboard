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
  },
  data() {
    return {
      series: [
        {
          name: this.sensorType.toUpperCase(),
          data: []
        },
      ],
      options: {
        xaxis: {
          type: 'category',
          title: {
            text: 'Date & Time'
          }
        },
        yaxis: {
          type: 'numeric',
          title: {
            text: this.sensorType.toUpperCase()
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

      const sensorData = this.$store.getters.PS_SENSORS;

      let seriesData;
      // TODO: not scalable, doesn't really make the chart component reusable,
      // find a better way
      if (this.sensorType === 'pressure') {
        seriesData = sensorData.map(el => {
          return el['variables']['temperature'];
        });
      } else {
        seriesData = sensorData.map(el => {
          return el['variables']['pressure'];
        });
      }

      const timestampList = sensorData.map(el => {
        const unix_dt = new Date(el['timestamp'] * 1000);
        const time = unix_dt.toLocaleTimeString("en-GB");
        const date = unix_dt.toLocaleDateString("en-GB");
        
        let datetime = date + ' ' + time;
        // eslint-disable-next-line no-console
        console.log(datetime);
        return datetime;
      });

      const res = seriesData.map(function(e, i) {
        return {x: timestampList[i], y: e};
      });

      return [
        {data: res, name: 'Temperature'},
      ];
    }
  },
}
</script>

<style scoped>

</style>