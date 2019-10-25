import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

// eslint-disable-next-line no-console
console.log("starting phil's application");


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");