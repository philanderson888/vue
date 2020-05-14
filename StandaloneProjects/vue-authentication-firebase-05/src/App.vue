<template>
  <div id="app">
    <div id="nav">
      <top-header></top-header>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/secret">Secret Page</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader.vue'
export default {
  components:{
    'top-header': TopHeader
  }
}
</script>
