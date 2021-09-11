import Vue from 'vue'
import App from './App.vue'
import VueLodash from 'vue-lodash'
import Lab01 from './Lab01.vue'
import Lab02 from './Lab02.vue'
import Lab03 from './Lab03.vue'
import Lab04Component from './Lab04Component.vue'
import Lab04 from './Lab04.vue'
import Lab05 from './Lab05.vue'
import Lab05GlobalComponent from './Lab05GlobalComponent.vue'
import Lab06 from './Lab06.vue'
import Lab07 from './Lab07.vue'
import Lab08 from './Lab08.vue'

Vue.component('lab-04-component',Lab04Component);
Vue.component('lab-05-global-component',Lab05GlobalComponent);

Vue.use(VueLodash);

new Vue({
  el: '#app',
  render: h => h(App)
});

new Vue({
  el:'#lab-01',
  render: h => h(Lab01)
});

new Vue({
  el:'#lab-02',
  render: h=>h(Lab02)
});

new Vue({
  el:'#lab-03',
  render:h=>h(Lab03)
});

new Vue({
  el:'#lab-04',
  render:h=>h(Lab04)
});

new Vue({
  el:'#lab-05',
  render:h=>h(Lab05)
});

var vm06 = new Vue({
  el: '#lab-06',
  render:h=>h(Lab06)
});

export const eventBus = new Vue();  

var vm07 = new Vue({
  el: '#lab-07',
  render:h=>h(Lab07)
});

new Vue({
  el: '#lab-08',
  render:h=>h(Lab08)
});