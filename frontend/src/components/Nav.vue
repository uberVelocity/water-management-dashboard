<template>
  <div>
    <b-navbar>
      <template slot="start">
        <b-navbar-item @click="goHome" href="#"> Home </b-navbar-item>
        <b-navbar-item @click="goAdmin" href="#"> Admin </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div v-if="get_logged_in">
            <b-dropdown :triggers="['hover']" aria-role="list">
              <button class="button is-info" slot="trigger">
                  <span>Welcome, {{get_username}}</span>
              </button>

              <b-dropdown-item aria-role="listitem" @click="logout" style="color: red">Log out</b-dropdown-item>
            </b-dropdown>
          </div>
          <div v-else class="buttons">
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
  import { ToastProgrammatic as Toast } from 'buefy'

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
        let response = undefined;

        try {
          response = await axios.get('http://localhost:4000/api/auth/admin', config);
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log(e);
        }

        if (response !== undefined && response.status === 200) {
          // eslint-disable-next-line no-console
          console.log(response.data);
          this.$router.push('/admin')
        } else {
          // eslint-disable-next-line no-console
          console.error(response);
          Toast.open({
            message: 'You are not authorized to access this page!\nPlease log in!',
            type: 'is-danger'
          });
        }
      },
      logout() {
        // clear local storage
        localStorage.clear();

        // toggle logged in
        this.$store.dispatch('SET_LOGGED_IN', false);
        
        Toast.open({
            message: 'You are no longer logged in!',
            type: 'is-warning'
        });
      }
    },
    mounted() {
      if (localStorage.getItem('authorization')) {
        this.$store.dispatch("SET_LOGGED_IN", true);
      } else {
        this.$store.dispatch("SET_LOGGED_IN", false);
      }
    },
    computed: {
      get_username() {
        return localStorage.getItem('username');
      },
      get_logged_in() {
        return this.$store.getters.LOGGED_IN;
      }
    }
  }
</script>

<style scoped>
</style>