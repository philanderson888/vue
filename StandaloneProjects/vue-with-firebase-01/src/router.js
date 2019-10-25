import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    { path: '*', redirect:'/login'},
    { path: '/about', name: 'about', },
    {  path:'/login',name:'login',component:Login      },
    {  path:'/register',name:'register',component:Register  }
  ]
})
