import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Secret from '../views/Secret.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {     path: '/',     name: 'Home',     component: Home    },
  {     path: '/register',     name: 'Register',     component: Register    },
  {     path: '/login',     name: 'Login',     component: Login    },
  {     path: '/secret',     name: 'Secret',     component: Secret    },
  {
    path: '/about',     name: 'About',  
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
