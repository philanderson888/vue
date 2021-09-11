import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/test'
import users from '@/components/users'
import usersFromInternet from '@/components/usersFromInternet'
import usersFromMLab from '@/components/usersFromMLab'
import godLog from '@/components/godLog'
import elementFromScratch from '@/components/elementFromScratch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'users',
      component: users
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/usersFromInternet',
      name: 'usersFromInternet',
      component: usersFromInternet
    },
    {
      path: '/usersFromMLab',
      name: 'usersFromMLab',
      component: usersFromMLab
    },
    {
      path: '/godLog',
      name: 'godLog',
      component: godLog
    },
    {
      path: '/elementFromScratch',
      name: 'elementFromScratch',
      component: elementFromScratch
    }
  ]
})
