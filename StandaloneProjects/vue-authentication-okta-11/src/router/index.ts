import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '@okta/okta-vue'

Vue.use(VueRouter)

console.log('process.env.VUE_APP_OKTA_CLIENT_ID')
console.log(process.env.VUE_APP_OKTA_CLIENT_ID)

Vue.use(Auth,{
  issuer: process.env.VUE_APP_OKTA_ISSUER,
  clientId: process.env.VUE_APP_OKTA_CLIENT_ID,
  redirectUri: 'http://localhost:8080/implicit/callback',
  scopes:['openid','profile','email'],
  pkce:true
});



  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/messages',
    name:'Messages',
    component:() => import(/* webpackChunkName: "about" */ '../views/Messages.vue')
    },
    { path: '/implicit/callback', component: Auth.handleCallback() }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
