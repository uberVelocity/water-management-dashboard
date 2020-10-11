<template>
  <div>
    <Nav />
    <div class="chart">
      <template>
        <div class="charts">
          <div class="columns">
            <div class="column">
              <LineChart />
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
  import LineChart from '@/charts/LineChart'
  export default {

    name: 'Home',
    components: {
      Nav,
      LineChart,
    },
    data() {
      return {
        isConnected: false,
        socket: undefined,
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
      // Fired when the server sends something on the "pressure" channel.
      pressure(data) {
        // data = data.map(e => ({x: e.ts, y: e.pressure}));
        /*
        if (data.type == 'pt') {
          this.$store.dispatch("STORE_PT_SENSORS", data);
        }
        */
        // eslint-disable-next-line no-console
        console.log(data);
      }
    },
    methods: {
      ...mapActions(['fetchSensors']),
    },
  }
</script>

<style scoped lang="scss">
  .charts {
    padding: 5em 0em 0em 5em;
    margin: 5em 0em 0em 5em;
  }
</style>