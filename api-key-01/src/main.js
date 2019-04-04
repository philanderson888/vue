import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

console.log(process)

console.log(process.env)

console.log(process.env.VUE_APP_API_Key_01)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
