<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>
<script src="https://www.gstatic.com/firebasejs/4.9.1/firebase.js"></script>
<script>
import Firebase from 'firebase'
// not sure if this line is needed but trying to bring in the process.env...apikey
import Vue from 'vue'
// Initialize Firebase
var config = {
  apiKey: process.env.VUE_APP_apikey,
  authDomain: "philanderson-2018-02-vue-01.firebaseapp.com",
  databaseURL: "https://philanderson-2018-02-vue-01.firebaseio.com",
  projectId: "philanderson-2018-02-vue-01",
  storageBucket: "philanderson-2018-02-vue-01.appspot.com",
  messagingSenderId: "1058276864694"
};
firebase.initializeApp(config);
let db = app.database()
let booksRef = db.ref('books')
export default {
  name: 'App'
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
