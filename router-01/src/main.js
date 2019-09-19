import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
Vue.use(VueRouter)
Vue.use(BootstrapVue)



Vue.component('header-component',Header)
Vue.component('footer-component',Footer)
Vue.component('page1-component',Page1)
Vue.component('page2-component',Page2)

const router = new VueRouter({
  routes,
  mode : 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
