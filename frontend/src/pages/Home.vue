<template>
  <div>
    <Nav />
    <div class="chart">
      <template>
        <div class="charts">
          <div class="columns">
            <column>
              <VueApexCharts width="500" type="line" :options="options" :series="series"></VueApexCharts>
            </column>
            <column>
              <VueApexCharts width="500" type="bar" :options="options" :series="series"></VueApexCharts>
            </column>
            <column>
              <VueApexCharts width="500" type="bar" :options="options" :series="series"></VueApexCharts>
            </column>
          </div>
          <div class="columns">
            <column>
              <VueApexCharts width="500" type="bar" :options="elsed" :series="series2"></VueApexCharts>
            </column>
            <column>
              <VueApexCharts width="500" type="bar" :options="options" :series="series"></VueApexCharts>
            </column>
            <column>
              <VueApexCharts width="500" type="bar" :options="options" :series="series"></VueApexCharts>
            </column>
          </div>
          <div class="columns">
            <column>
              <VueApexCharts width="500" type="bar" :options="options" :series="series"></VueApexCharts>
            </column>
            <column>
              <VueApexCharts width="500" type="bar" :options="options" :series="series"></VueApexCharts>
            </column>
            <column>
              <VueApexCharts width="500" type="bar" :options="options" :series="series"></VueApexCharts>
            </column>
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
        options: {
          colors: ['#3e3ea3', '#333333', '#ac3a43'],
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        elsed: {
          fill: {
            colors: [
              '#44cc5e'
            ]
          },
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [2000, 2001, 2002, 2003, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }],
        series2: [{
          name: 'series-2',
          data: [300, 400, -405, -500, -409, -600, 700, -901]
        }]
      }
    },
    methods: {
      ...mapActions(['fetchSensors']),
    },
    created() {
      this.fetchSensors()
    }
  }
</script>

<style scoped lang="scss">
  .charts {
    padding: 5em 0em 0em 5em;
    margin: 5em 0em 0em 5em;
  }
</style>