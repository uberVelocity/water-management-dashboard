<template>
  <div>
    <Nav/>
    <h1>status: {{status}}</h1>
    <b-button @click="getStatusDemo" label="Get Status"></b-button>
    <b-button @click="getData" label="Get Data"></b-button>
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
import { mapGetters, mapActions } from 'vuex';
import Nav from '@/components/Nav'
import SensorList from '@/components/SensorList.vue'
import AdminMenu from '@/components/AdminMenu.vue'
import UserList from '@/components/UserList.vue'
import axios from 'axios'

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
      currentPage: 'sensors',
      status: ''
    }
  },
  methods: {
    ...mapGetters(['getStatus']),
    ...mapActions(['fetchStatus']),
    setCurrentPage(value) {
      if (this.currentPage !== value)
        this.currentPage = value
    },
    getStatusDemo() {
      this.status = this.getStatus()
    },
    async getData() {
      const response = await axios.get('/api/sensor/')
      // eslint-disable-next-line no-console
      console.log(response)
    }
  },
  created() {
    this.fetchStatus()
  }
}
</script>

<style scoped>
</style>