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
  export default {
    name: 'SensorList',
    data() {
      return {
        sensors: [{
            id: '1',
            state: 'Online',
            values: [10, 20, 30, 40, 50, 60]
          },
          {
            id: '2',
            state: 'Online',
            values: [10, 20, 30, 40, 50, 60]
          },
          {
            id: '3',
            state: 'Offline',
            values: [10, 60, 30, 40, 50, 60]
          },
        ]
      }
    }
  }
</script>

<style style='scoped'>
  .container {
    margin-right: 30em;
    margin-top: 5em;
    margin-left: 5em;
    padding: 0px 5em 0px 5em;
    text-align: left;
  }
</style>