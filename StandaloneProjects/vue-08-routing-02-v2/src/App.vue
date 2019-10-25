<template>
  <div id="app">
    <h1>Welcome To My Vue App</h1>
    <h3 style="margin-top:30px">These URLs work with no router mode</h3>
    <a href='/'>Home</a> | <a href="/#/helloworld">All Components</a> | <a href='/#/component01'>Component01</a> | <a href="/#/component02">Component02</a>
    <br />
    <h3 style="margin-top:30px">These URLs work with router mode 'history'</h3>
    <a href='/'>Home</a> | <a href="/helloworld">All Components</a> | <a href='/component01'>Component01</a> | <a href="/component02">Component02</a>
    <h3 style="margin-top:30px">Same thing using router-link</h3>
    <router-link to="/">Home</router-link> | 
    <router-link to="helloworld">Hello World</router-link>
    <router-link to="component01">Component01</router-link>
    <router-link to="component02">Component02</router-link>
    <h3  style="margin-top:30px">Finally using a header component with bootstrap links</h3>
    <Header />
    <HelloWorld/>
    <Home/>
    <Component01/>
    <Component02/>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import Component01 from './components/Component01'
import Component02 from './components/Component02'
import Header from './components/Header'
   
 export default {
  name: 'App',
  components: {
    Header, HelloWorld, Home, Component01, Component02
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
