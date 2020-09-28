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
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'Nav',
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