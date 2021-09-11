import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Lodash from 'lodash'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {routes} from './routes'
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Lodash)
const router = new VueRouter({
  routes,
  mode:'history'
})
export const eventBus = new Vue()
var vm1 = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
vm1.onLine = navigator.onLine  //true/false
console.log('initial online status is ' + vm1.onLine)
eventBus.$emit('onlineStatus',vm1.onLine)
function updateConnectionStatus(){
  vm1.onLine = navigator.onLine
  eventBus.$emit('onlineStatus',vm1.onLine)  
}
window.addEventListener('online',updateConnectionStatus)
window.addEventListener('offline',updateConnectionStatus)
