<template>
  <div>
    <div class="container">
      <ul>
        <li v-for="sensor in sensors" :key=sensor.id>
          Sensor ID: {{sensor.id}}
          <br>
          Sensor state: {{sensor.state}}
          <br>
          Sensor values: {{sensor.values}}
          <br>
          <br>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex';

  export default {
    name: 'SensorList',
    data() {
      return {
        sensors: []
      }
    },
    methods: {
      ...mapGetters(['getSensors'])
    },
    created() {
      this.sensors = this.getSensors()
    }
  }
</script>

<style scoped>
  .container {
    padding: 3vw;
  }
</style>