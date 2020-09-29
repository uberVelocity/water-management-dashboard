<template>
  <div>
    <b-navbar>
      <template slot="start">
        <b-navbar-item @click="goHome" href="#">
          Home
        </b-navbar-item>
        <b-navbar-item @click="goAdmin" href="#">
          Admin
        </b-navbar-item>
        <b-navbar-item @click="goLive" href="#">
          Live
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <RegisterModal />
            <LoginBtn />
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
  import LoginBtn from '@/components/LoginBtn.vue';
  import RegisterModal from '@/components/RegisterModal.vue';

  export default {
    name: 'Nav',
    components: {LoginBtn, RegisterModal},
    methods: {
      goHome() {
        this.$router.push('/')
      },
      goAdmin() {
        this.$router.push('/admin')
      },
      goLive() {
        this.$router.push('/live')
      }
    }
  }
</script>

<style scoped>

</style>