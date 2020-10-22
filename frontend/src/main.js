import Vue from 'vue'
import App from './App.vue'

// Import CSS Framework Buefy
import 'buefy/dist/buefy.css'
import Buefy from 'buefy'
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
  connection: 'http://localhost:5500'
}))

Vue.use(VueRouter)
Vue.use(Buefy)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home},
  { path: '/admin', component: Admin },
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
