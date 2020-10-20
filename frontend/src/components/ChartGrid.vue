<template>
  <div class="columns">
    <div class="column">
      <LineChart sensorType="pressure"
        title="Testing pressure out"
        xLabel="myTime"
        yLabel="myPressure"
        :data="getSeries"
      />
    </div>
  </div>
</template>

<script>
import LineChart from "@/charts/LineChart";
export default {
  name: "AdminMenu",
  components: { LineChart },
  computed: {
    getSeries() {
      const sensorData = this.$store.getters.PS_SENSORS;

        // y
      let seriesData = sensorData.map((el) => {
        return el["variables"]["pressure"];
      });

        // x
      const timestampList = sensorData.map((el) => {
        const unix_dt = new Date(el["timestamp"] * 1000);
        const time = unix_dt.toLocaleTimeString("en-GB");
        const date = unix_dt.toLocaleDateString("en-GB");

        let datetime = date + " " + time;
        return datetime;
      });

      const res = seriesData.map(function (e, i) {
        return { x: timestampList[i], y: e };
      });

      // eslint-disable-next-line no-console
      console.log('Plotting ...');
      // eslint-disable-next-line no-console
      console.log(res);
      return res;
    },
  },
};
</script>

<style scoped>
</style>