<template>
  <div>
    <Nav />
    <h1>Home</h1>
  </div>
</template>

<script>
  import Nav from '@/components/Nav'
  import {
    mapActions
  } from 'vuex'

  export default {
    name: 'Home',
    components: {
      Nav
    },
    methods: {
      ...mapActions(['fetchSensors'])
    },
    created() {
      this.fetchSensors()
    }
  }
</script>

<style>

</style>