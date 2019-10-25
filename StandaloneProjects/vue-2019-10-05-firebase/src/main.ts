import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'es6-promise/auto'
import Vuex from 'vuex';
import vuetify from './plugins/vuetify';

Vue.use(Vuex)

Vue.config.productionTip = false;
Vue.prototype.$globalVariable = 'Some global data right here'

if((localStorage.getItem("vuex-counter")===null)||(localStorage.getItem("vuex-counter")==='NaN')){
  localStorage.setItem("vuex-counter",'0');
}
const counterFromStorage = localStorage.getItem("vuex-counter")
console.log('counterFromStorage = ' + counterFromStorage)
let vuexcuounter = counterFromStorage !== null ? parseInt(counterFromStorage) : 0;

const store = new Vuex.Store({
  state: {
    count: vuexcuounter
  },
  mutations: {
    increment(state) {
      state.count++
      let item = state.count
      localStorage.setItem("vuex-counter",item.toString())
    }
  }
})
console.log(store.state.count)

new Vue({
  beforeCreate: function () {
    console.log('hello');
  },

  router,
  store,

  data() {
    return {
    }
  },

  vuetify,
  render: h => h(App)
}).$mount("#app");
