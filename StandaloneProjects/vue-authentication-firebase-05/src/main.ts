import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './../node_modules/bulma/css/bulma.css';
import "bulma/css/bulma.css"
import "./assets/css/bulma.scss"
import axios from 'axios'
import firebase from 'firebase/app'

Vue.prototype.$axios = axios
Vue.prototype.$user = null
Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_01_API_KEY,
  authDomain: "vue-authentication-firebase-01.firebaseapp.com",
  databaseURL: "https://vue-authentication-firebase-01.firebaseio.com",
  projectId: "vue-authentication-firebase-01",
  storageBucket: "vue-authentication-firebase-01.appspot.com",
  messagingSenderId: process.env.VUE_APP_FIREBASE_01_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_01_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_01_MEASUREMENT_ID,
};
firebase.initializeApp(firebaseConfig);
console.group(`firebaseConfig is`)
console.log(firebaseConfig)
console.groupEnd()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')