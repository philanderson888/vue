# vue-authentication-firebase-02

This is a continuation from # vue-authentication-firebase-01

## Vue Authentication With Firebase

This is going to be an exciting app built from the ground up with Vue and connecting to Firebase.  It's going to log in and hopefully use tokens for authentication.

The video I am following is https://www.youtube.com/watch?v=XtbYBoKb2zY which is pretty current at 11 Nov 2019.

The start date of this project is  is 10 May 2019



Philip Anderson (learning Vue and Authentication)



## Firebase Project Creation

Set up firebase on the web:

- Url: https://console.firebase.google.com
- Name: vue-authentication-firebase-01
- Google Analytics: Yes
- Add web app and register and copy the code

## Vue

### Libraries

```powershell
yarn add firebase axios bulma; 
yarn serve
```

main.ts

```
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// bulma
import './../node_modules/bulma/css/bulma.css';
import "bulma/css/bulma.css"
import "./assets/css/bulma.scss"
// axios and firebase
import axios from 'axios'
import firebase from 'firebase/app'

// By adding to the prototype this means we can access this from anywhere in the Vue application wherever!
Vue.prototype.$axios = axios
Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_01_API_KEY,
  authDomain: "vue-authentication-firebase-01.firebaseapp.com",
  databaseURL: "https://vue-authentication-firebase-01.firebaseio.com",
  projectId: "vue-authentication-firebase-01",
  storageBucket: "vue-authentication-firebase-01.appspot.com",
  messagingSenderId: process.env.VUE_APP_FIREBASE_01_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_01_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_01_MEASUREMENT_ID,
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

```

run with

```powershell
clear;cd C:\github\vue\StandaloneProjects\vue-authentication-firebase-01\; yarn serve
```

### Bulma CSS at assets\css\bulma.scss

```css
@charset "utf-8";
/*! bulma.io v0.8.2 | MIT License | github.com/jgthms/bulma */
@import "../../../node_modules/bulma/bulma.sass";

body{
    background-color: rgb(210, 231, 225);
}
.image-logo{
    width: 7min;
    height: 5vmin;
    margin: -1vmin 2vmin 1vmin 2vmin;
}

```

### Home.Vue

```html
<img class="image-logo" src="https://www.fullstackpython.com/img/logos/vuejs-wide.png" />
<img class="image-logo" src="https://firebase.google.com/images/brand-guidelines/logo-standard.png" />
<HelloWorld msg="Vue App With Firebase Authentication"/>
```

## Add Login.vue, Register.vue, Secret.vue

## Authentication

### Firebase

Enable Email and Password option 

### Main.ts

```js
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '../node_modules/bulma/css/bulma.css';
import "bulma/css/bulma.css"
import "./assets/css/bulma.scss"
import axios from 'axios'
import firebase from 'firebase/app'

// By adding to the prototype this means we can access this from anywhere in the Vue application wherever!
Vue.prototype.$axios = axios
Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_01_API_KEY,
  authDomain: "vue-authentication-firebase-01.firebaseapp.com",
  databaseURL: "https://vue-authentication-firebase-01.firebaseio.com",
  projectId: "vue-authentication-firebase-01",
  storageBucket: "vue-authentication-firebase-01.appspot.com",
  messagingSenderId: process.env.VUE_APP_FIREBASE_01_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_01_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_01_MEASUREMENT_ID,
};
console.group(`firebaseConfig is`)
console.log(firebaseConfig)
console.groupEnd()
firebase.initializeApp(firebaseConfig);
//firebase.analytics();



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

```



### Register.vue

```html
<template>
    <div>
        <h1>Register</h1>
        <div v-if="error" class="error">{{error.message}}</div>
        <form @submit.prevent="pressed">
            <div class="email">
                <input type="email" v-model="email" placeholder="email" />
            </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="password"/>
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
    methods:{
        async pressed(){
            try{
                const user = firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
                console.log()
                console.group(`user is`)
                console.log(user)
                console.groupEnd()
                console.log()
                this.$router.replace({name: 'Secret'})
            }
            catch(err){
                console.log(err)
            }
        }
    },
    data(){
        return{
            email:null,
            password:null,
            error:null
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
```

This now registers a new user and redirects to `secret` route.

## vue-authentication-firebase-02

*Note that the firebase-01 tutorial stops here and the firebase-02 tutorial starts here*

### TopHeader Component which shows if user is logged in or not, plus a `logout` option 

```html
<template>
    <div>
        Logged in 
        <span v-if="loggedIn">Yes</span>
        <span v-else>No</span>
        <div>
            <button @click="signOut">Sign out</button>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'
export default {
    data(){
        return{
            loggedIn:false
        }

    },
    methods:{
        async signOut(){
            try{
                const data = await firebase.auth().signOut()
                console.group("Logging out data")
                console.log(data)
                console.groupEnd()
                this.$router.replace({name:'login'})

            }
            catch(err){
                console.log(err)
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>	
```

App.vue has been changed slightly to add this component in directly

```html
<template>
  <div id="app">
    <div id="nav">
      <top-header></top-header>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/login">Login</router-link> | 
      <router-link to="/register">Register</router-link> | 
      <router-link to="/secret">Secret</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader'
export default { 
  components: { 'top-header' : TopHeader }
}
</script>>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

```

### Is User Logged In Or Not?

```html
// Top Header
<template>
    <div>
        <div v-if="loggedIn">
            <button @click="signOut">Log out</button>
        </div>       
        <div v-else>
            <button @click="signIn">Log in</button>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'
export default {
    created(){
        firebase.auth().onAuthStateChanged(user => {
            this.loggedIn = !!user // returns false if no user, true if a user exists
        })
    },
    data(){
        return{
            loggedIn:false
        }

    },
    methods:{..}
}
</script>


```

## Adding `Log in` component

pausing at 27:28 in this video https://www.youtube.com/watch?v=XtbYBoKb2zY