<template>
  <div>
    <b-navbar>
      <template slot="start">
        <b-navbar-item @click="goHome" href="#"> Home </b-navbar-item>
        <b-navbar-item @click="goAdmin" href="#"> Admin </b-navbar-item>
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
  import axios from 'axios';

  export default {
    name: 'Nav',
    components: {LoginBtn, RegisterModal},
    methods: {
      goHome() {
        this.$router.push('/')
      },
      async goAdmin() {
        const config = {
          headers : {
              authorization : localStorage.getItem('authorization')
          }
        }

        // eslint-disable-next-line no-console
        console.log('Button pressed, sending request!');
        const response = await axios.get('http://localhost:4000/api/auth/admin', config);
        if (response.status === 200) {
            // eslint-disable-next-line no-console
            console.log(response.data);
            this.$router.push('/admin')
        } else {
            // eslint-disable-next-line no-console
            console.error(response);
            this.$buefy.toast.open('You are not authorized to access this page!\nPlease log in!');
        }
      },
    }
  }
</script>

<style scoped>
</style>