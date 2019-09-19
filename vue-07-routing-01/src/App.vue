<template>
  <div id="app">
    <h1>Main App.Vue Page</h1>
    <a href="/">Home</a> | <a href="/component01">Component 01</a>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

