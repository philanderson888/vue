import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: "AIzaSyCfMwaRvBc6hd4ubtZo0obYC8YpG0sgVC0",
  authDomain: "vue-with-firebase-01.firebaseapp.com",
  databaseURL: "https://vue-with-firebase-01.firebaseio.com",
  projectId: "vue-with-firebase-01",
  storageBucket: "",
  messagingSenderId: "1026739802852",
  appId: "1:1026739802852:web:6c9291fcc7acaece"
};

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
