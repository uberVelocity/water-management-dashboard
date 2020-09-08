<template>
  <div>
    <Nav/>
    <h1>Admin</h1>
    <div class="columns">
      <div class="column is-one-third">
        <AdminMenu/>
      </div>
      <div class="column">
        <SensorList/>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import SensorList from '@/components/SensorList.vue'
import AdminMenu from '@/components/AdminMenu.vue'

export default {
  name: 'Admin',
  components: {
    Nav,
    SensorList,
    AdminMenu
  }
}
</script>

<style>
  p {
    background-color: red;
  }
</style>