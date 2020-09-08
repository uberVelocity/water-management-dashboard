import Vue from 'vue'
import App from './App.vue'

// Import CSS Framework Buefy
import 'buefy/dist/buefy.css'
import Buefy from 'buefy'
import VueRouter from 'vue-router'

// Import Pages
import Home from '@/pages/Home'
import Admin from '@/pages/Admin'

Vue.use(VueRouter)
Vue.use(Buefy)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home},
  { path: '/admin', component: Admin }
]

const router = new VueRouter({
  routes, // short for `routes: routes`,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
