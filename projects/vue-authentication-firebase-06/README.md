# vue-authentication-firebase-06

## Author

Philip Anderson

## Revision

Build date 14 May 2020

## Contents

- [vue-authentication-firebase-06](#vue-authentication-firebase-06)
  - [Author](#author)
  - [Revision](#revision)
  - [Contents](#contents)
  - [Introduction](#introduction)
    - [install](#install)
  - [run](#run)
  - [replace images](#replace-images)
  - [Add Bulma CSS at assets\css\bulma.scss](#add-bulma-css-at-assetscssbulmascss)
  - [libraries](#libraries)
    - [use libraries in main.ts](#use-libraries-in-maints)
  - [add views and routes for Login, Register, Secret](#add-views-and-routes-for-login-register-secret)
    - [create Views](#create-views)
    - [create routes](#create-routes)
    - [add routes into app](#add-routes-into-app)
  - [add registration page](#add-registration-page)
    - [console.firebase.google.com](#consolefirebasegooglecom)
  - [add in topheader to now indicate status of user and if logged in or not](#add-in-topheader-to-now-indicate-status-of-user-and-if-logged-in-or-not)
    - [add topheader into the main app](#add-topheader-into-the-main-app)
  - [login](#login)
  - [Working Login And Registration](#working-login-and-registration)
    - [Login.vue](#loginvue)
    - [TopHeader.vue](#topheadervue)
  - [look at securing the `secret` route](#look-at-securing-the-secret-route)
    - [router.js](#routerjs)
  - [Send confirmation email to user](#send-confirmation-email-to-user)
  - [Future development opportunities](#future-development-opportunities)

## Introduction 

This is a series of builds of VueJS with the goal of building a working VueJS Authentication system using Firebase as the user management interface and allowsing firstly for login by email and then secondly hopefully by using login with other methods eg Google and Facebook.

Here is the YouTube video I am following https://www.youtube.com/watch?v=XtbYBoKb2zY

So far I have, in [vue-authentication-firebase-05](../vue-authentication-firebase-05), got user registration working and also logging status of whether a user is logged in or not.  This is all working.

I am repeating the builds in order to force myself to rebuild from scratch every day in order to build up a robust speed through repetition.

### install

```powershell
cd \github\vue\projects\;vue create vue-authentication-firebase-06; cd vue-authentication-firebase-06;yarn install;yarn serve
```

## run

```powershell
clear;cd C:\github\vue\projects\vue-authentication-firebase-06;yarn serve
```

## replace images

```html
<img class="image-logo" src="https://www.fullstackpython.com/img/logos/vuejs-wide.png" />
<img class="image-logo" src="https://firebase.google.com/images/brand-guidelines/logo-standard.png" />
<HelloWorld msg="Vue App With Firebase Authentication"/>
```

## Add Bulma CSS at assets\css\bulma.scss

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
h3 {
    margin: 40px 0 0;
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
```

## libraries

```powershell
yarn add firebase axios bulma; yarn serve
```

### use libraries in main.ts

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
Vue.prototype.$user = null
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
## add views and routes for Login, Register, Secret

### create Views

### create routes

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
### add routes into app

```html
<router-link to="/">Home</router-link> |
<router-link to="/about">About</router-link> |
<router-link to="/register">Register</router-link> |
<router-link to="/login">Login</router-link> |
<router-link to="/secret">Secret Page</router-link>
```

## add registration page

### console.firebase.google.com

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
                const user = await firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
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

## add in topheader to now indicate status of user and if logged in or not

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

### add topheader into the main app

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

## login

```html
<template>
    <div>
        <h1>Login</h1>
        <div v-if="error" class="error">{{error.message}}</div>
        <form @submit.prevent="pressed">
            <div class="email">
                <input type="email" v-model="email" placeholder="email" />
            </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="password"/>
            </div>
            <button type="submit">Log In</button>
            <router-link to="/register"><button type="button">Register</button></router-link>
        </form>
    </div>
</template>
```

User is now logged in and shows the logged in status at the top of the screen.

Very excited!

What happens if the login is invalid?  It logs to the console but not back to the user on the screen.

Let's now add

```js
this.error = err.message
```

## Working Login And Registration

I am very happy now.  I have links to login and registration all working, and the ability to register and log in a new user!  Happy days.  Here is the amended code.

### Login.vue

```html
<template>
    <div>
        <h1>Login</h1>
        <div v-if="error" class="error">{{error.message1}} <router-link to='/register'>register</router-link> {{error.message2}}</div>
        <form @submit.prevent="pressed">
            <div class="email">
                <input type="email" v-model="email" placeholder="email" />
            </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="password"/>
            </div>
            <button type="submit">Log In</button>
            <router-link to="/register"><button type="button">Register</button></router-link>
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
                const user = await firebase.auth().signInWithEmailAndPassword(this.email,this.password)
                console.log()
                console.group(`attempting to log in `)
                console.log(user)
                console.groupEnd()
                console.log()
                this.$router.replace({name: 'Secret'})
            }
            catch(err){
                console.log(err)
                this.error = {
                    message1: 'Invalid login - username or password were incorrect.  Please try again or ',
                    message2: ' a new user',
                    url : '/register'
                }
                console.log(`error message is "${this.error.message1} register ${this.error.message2}"`)
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

### TopHeader.vue

```html
<template>
    <div>
        <div v-if="loggedIn">
            <button @click="logOut">Log out</button>
        </div>       
        <div v-else>
            <button @click="logIn">Log in</button>
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
        async logOut(){
            try{
                await firebase.auth().signOut()
                console.group("Logging out")
                console.groupEnd()
                this.$user = {
                    email:null,
                    password:null
                }
                this.$router.replace({name:'Login'})
            }
            catch(err){
                console.log(err)
            }
        }, 
        async logIn(){
            this.$router.replace({name:'Login'})        
        }
    }
}
</script>
```


## look at securing the `secret` route

Now we have registration, login and logout working we can secure our desired routes

### router.js

```js
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
```

Yes!  we now have

- Registration in Firebase
- Log in to Firebase
- Securing a secret route using Firebase
- Redirection to login page if not logged in!

Happy days!

## Send confirmation email to user

Yes I have this all working!

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
                const user = await firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
                  .then(userData => {
                      console.group(`registration complete`)
                      console.log(userData)
                      userData.user.sendEmailVerification()
                        .then(()=>{
                            console.log('verification email sent')
                        })
                        .catch( (error) => {
                            console.log('verification email was not sent')
                            console.log(error)
                        })
                        console.groupEnd()
                })
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

## Future development opportunities

a) Log in with Google and Facebook

https://medium.com/@michaljurkowski/how-to-make-basic-authentication-in-vue-js-using-google-firebase-e3ec7dad274

b) Get JWT token