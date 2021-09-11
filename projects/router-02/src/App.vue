<template>
  <div class="container-fluid" id="app">
    <h1>{{ msg }}</h1>
    <h2><a href="/">Home</a> | <a href="/attendance">Attendance</a></h2>
    <router-view />
	</div>
</template>


<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Leadership Logons'
    }
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
  margin-top: 5px;
}

#app>div{
  background-color: #42b983;
}





h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
