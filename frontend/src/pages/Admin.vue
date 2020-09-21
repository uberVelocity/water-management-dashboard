<template>
  <div>
    <Nav/>
    <div class="columns">
      <div class="column is-narrow">
        <AdminMenu @setCurrentPage="setCurrentPage"/>
      </div>
      <div class="column" v-show="currentPage === 'sensors'">
        <SensorList />
      </div>
      <div class="column" v-show="currentPage === 'users'">
        <UserList />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import SensorList from '@/components/SensorList.vue'
import AdminMenu from '@/components/AdminMenu.vue'
import UserList from '@/components/UserList.vue'

export default {
  name: 'Admin',
  components: {
    Nav,
    SensorList,
    AdminMenu,
    UserList
  },
  data() {
    return {
      currentPage: 'sensors'
    }
  },
  methods: {
    setCurrentPage(value) {
      if (this.currentPage !== value)
        this.currentPage = value
    }
  }
}
</script>

<style scoped>
</style>