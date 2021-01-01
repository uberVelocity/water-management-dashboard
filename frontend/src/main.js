import Vue from 'vue'
import App from './App.vue'

// Import CSS Framework Buefy
import 'buefy/dist/buefy.css'
import Buefy from 'buefy'
import { ToastProgrammatic as Toast } from 'buefy'
import VueRouter from 'vue-router'

// Import Vuex store
import store from './store'

// Import Pages
import Home from '@/pages/Home'
import Admin from '@/pages/Admin'

// Import socket.io
import VueSocketIO from 'vue-socket.io'
Vue.use(new VueSocketIO({
  debug: true,
  connection: '/socket.io/',
  options: {transports: ['websocket'], upgrade: false, path: "/socket.io/" }
}))

// Import axios
import axios from 'axios';

Vue.use(VueRouter)
Vue.use(Buefy)

Vue.config.productionTip = false

const routes = [
  { 
    path: '/', 
    component: Home,
    name: "home"
  },
  {
    path: '/admin',
    component: Admin,
    name: "admin",
    async beforeEnter(to, from, next) {

      const token = localStorage.getItem('authorization');

      if (token) {
        const config = {
          headers : {
              authorization : token
          }
        }
        let response = undefined;
        try {
          response = await axios.get('/api/auth/admin', config);
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log(e);
        }
  
        if (response !== undefined && response.status === 200) {
          // eslint-disable-next-line no-console
          console.log(response.data);
          next();
        } else {
          // eslint-disable-next-line no-console
          console.error(response);
          // Redirect user to home
          Toast.open({
            message: 'Please log in to access this page',
            type: 'is-danger'
          });
          next({
            name: "home"
          });
        }
      } else {
        // Redirect user to home
        Toast.open({
          message: 'Please log in to access this page',
          type: 'is-danger'
        });
        next({
          name: "home"
        });
      }     

      

    }
  },
]

const router = new VueRouter({
  routes, 
  mode: 'history'
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')