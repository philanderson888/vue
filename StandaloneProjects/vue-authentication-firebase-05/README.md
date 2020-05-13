# vue-authentication-firebase-05

*This is a rebuild of [vue-authentication-firebase-03](../vue-authentication-firebase-03) as vue-authentication-firebase-04 had a problem with the props not being detected as rendered properly*

## Introduction

The goal is to build a fully working authenticating application with

- VueJS
- Firebase
- Email authentication to log in and out
- Secrets page only visible when logged in

## Youtube

Following https://www.youtube.com/watch?v=XtbYBoKb2zY

## Install

```powershell
cd \github\vue\StandaloneProjects\;vue create vue-authentication-firebase-04; cd vue-authentication-firebase-04;yarn install;yarn serve
```

## Run

```powershell
clear;cd C:\github\vue\StandaloneProjects\vue-authentication-firebase-05;yarn serve
```

### Libraries

```powershell
yarn add firebase axios bulma; yarn serve
```


### Home.vue

```html
<img class="image-logo" src="https://www.fullstackpython.com/img/logos/vuejs-wide.png" />
<img class="image-logo" src="https://firebase.google.com/images/brand-guidelines/logo-standard.png" />
<HelloWorld msg="Vue App With Firebase Authentication"/>
```

### main.ts

```js
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './../node_modules/bulma/css/bulma.css';
import "bulma/css/bulma.css"
import "./assets/css/bulma.scss"
import axios from 'axios'
import firebase from 'firebase/app'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

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
console.group(`firebaseConfig is`)
console.log(firebaseConfig)
console.groupEnd()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```




### bulma at assets\css\bulma.scss

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
.error{
    color:red;
    font-size:18px;
}
input{
    width:400px;
    padding:30px;
    margin:20px;
    font-size:21px;
}
button{
    width:400px;
    height:40px;
    font-size:100%;
    background-color: rgb(183, 233, 235);
    border-radius: 2vmin;
}
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
```

### Views - create Login.vue, Register.vue, Secret.vue

### Router index.ts

```js
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Secret from '../views/Secret.vue'
```

```json
  {     path: '/',          name: 'Home',       component: Home          },
  {     path: '/register',  name: 'Register',   component: Register      },
  {     path: '/login',     name: 'Login',      component: Login         },
  {     path: '/secret',    name: 'Secret',     component: Secret        },
  {     path: '/about',     name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
```


### App.vue

```html
<router-link to="/">Home</router-link> |
<router-link to="/about">About</router-link> |
<router-link to="/register">Register</router-link> |
<router-link to="/login">Login</router-link> |
<router-link to="/secret">Secret Page</router-link>
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
```

Registration now works


### TopHeader 

```html
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
            this.$user = user
        })
    },
    updated(){
      console.group(this.loggedIn ? "User is logged in" : "User is not logged in");
      console.log(`user email is ${this.$user.email}`)
      console.log(`user object is`)
      console.log(this.$user)
      console.groupEnd
    },
    data(){
        return{
            loggedIn:false
        }

    },
    methods:{
        async signOut(){
            try{
                await firebase.auth().signOut()
                console.group("Logging out")
                console.groupEnd()
                this.$router.replace({name:'Login'})

            }
            catch(err){
                console.log(err)
            }
            
        }, 
        signIn(){
            return {
                
            }
        }
    }
}
</script>
```

### App.vue

```html
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
```

Button now shows `login` or `logout` button depending on the status of the user


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
import Vue from 'vue'
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
                Vue.prototype.$user = user;
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
```

