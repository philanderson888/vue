import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {routes} from './routes.js'

Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

export const eventBus = new Vue()

var vm1 = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//initial status
vm1.onLine = navigator.onLine
// emit initial status to component
eventBus.$emit('onlineStatus', vm1.onLine)

//monitor for changes
function updateConnectionStatus(){
  vm1.onLine = navigator.onLine
  eventBus.$emit('onlineStatus', vm1.onLine)
  if(vm1.onLine == false) {
    console.log('connection has gone offline')
  }
  if(vm1.onLine == true) {
    console.log('connection has gone online')
  }
}
window.addEventListener('online',updateConnectionStatus)
window.addEventListener('offline',updateConnectionStatus)
