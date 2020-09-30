<template>
  <div>
    <Nav />
    <div class="chart">
      <template>
        <div class="charts">
          <div class="columns">
            <div class="column">
              <VueApexCharts width="500" type="line" :options="options" :series="series"></VueApexCharts>
            </div>
          </div>
        </div>
        <div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import Nav from '@/components/Nav'
  import {
    mapActions
  } from 'vuex'
  import VueApexCharts from 'vue-apexcharts'
  export default {

    name: 'Home',
    components: {
      Nav,
      VueApexCharts
    },
    data() {
      return {
        isConnected: false,
        socket: undefined,
        series: [],
        xaxis: {
          type: 'datetime'
        },
        options: {
          colors: ['#3e3ea3', '#333333', '#ac3a43'],
          chart: {
            id: 'vuechart-example',
            type: 'bar'
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
    sockets: {
      connect() {
        // Fired when the socket connects.
        this.isConnected = true;
      },
      disconnect() {
        this.isConnected = false;
      },
      // Fired when the server sends something on the "messageChannel" channel.
      temperature(data) {
        data = data.map(e => ({x: e.ts, y: e.temperature}));
        this.series = [{
          data: data
        }];
        // eslint-disable-next-line no-console
        console.log(data);
      }
    },
    methods: {
      ...mapActions(['fetchSensors']),
    },
    created() {
      //this.fetchSensors();
    }
  }
</script>

<style scoped lang="scss">
  .charts {
    padding: 5em 0em 0em 5em;
    margin: 5em 0em 0em 5em;
  }
</style>