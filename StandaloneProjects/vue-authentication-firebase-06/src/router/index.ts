import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Secret from '../views/Secret.vue' 
import * as firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    {     path: '/',          name: 'Home',       component: Home          },
    {     path: '/register',  name: 'Register',   component: Register      },
    {     path: '/login',     name: 'Login',      component: Login         },
    {     path: '/secret',    
          name: 'Secret',     
          component: Secret,
          meta: {requiresAuth:true}
    },
    {     path: '/about',     name: 'About',
          component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  const requiresAuth = to.matched.some(record=>record.meta.requiresAuth)
  // returns current user if it exists so this is a method of checking if we have a valid user ie logged in
  const isAuthenticated = firebase.auth().currentUser;
  console.group(`is the user authenticated in the router?`)
  console.log(isAuthenticated?.email)
  console.log(isAuthenticated)
  console.groupEnd()
  if(requiresAuth && !isAuthenticated){
    next('/Login')
  }
  else{
    next()
  }
})

export default router
