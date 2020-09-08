import Vue from 'vue'
import App from './App.vue'
import 'buefy/dist/buefy.css'
import Buefy from 'buefy'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import Admin from '@/pages/Admin'

Vue.use(VueRouter)
Vue.use(Buefy)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home},
  { path: '/admin', component: Admin }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for `routes: routes`,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
