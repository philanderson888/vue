# vue-authentication-okta-05

This version finally has it!

The user logs in on the application.

The user then tries to read data from the API.

The data is sent if the user is authenticated.

If not 401 unauthorised message is returned

Happy days!

That's about a day and a half's work!

That was impressive

I could make a great series of YouTube video tutorials on this and get it all working and make some hits!

I could make a YouTube series on this!



# vue-authentication-okta-04

Note that this version successfully logs the API token to the console.

This is a big step forwards!

Also I can get the Messages screen to show in the console logging whether or not I am logged in.

  Logged in - get API token
  Not logged in - no token to log out

I am going to save this version and move on to version 05 which hopefully can actually pass the token etc.  Not sure but stamping this version here!


### link

https://developer.okta.com/quickstart/#/vue/nodejs/express


### create and add bulma css

	vue create ..

	choose dart css

	yarn add bulma

### add assets/css/bulma.scss

```css
@charset "utf-8";
/*! bulma.io v0.8.2 | MIT License | github.com/jgthms/bulma */
@import "../../../node_modules/bulma/bulma.sass";
```

Then, in main.ts

```javascript
import './../node_modules/bulma/css/bulma.css';
import "bulma/css/bulma.css"
import "./assets/css/bulma.scss"
```

### App.vue in css OR add to bulma.scss

```css
body{
    background-color: rgb(210, 231, 225);
}
.splash-screen{
    width: 10min;
    height: 10vmin;
    margin: -1vmin 2vmin 1vmin 2vmin;
}
```
### Home.vue 

```html
<img class="splash-screen" alt="Vue logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" />
<img alt="Okta Logo" class="splash-screen" src="https://www.okta.com/sites/all/themes/Okta/images/logos/developer/Dev_Logo-01_Large.png" />
<img alt="oauth logo" class="splash-screen" src="https://st.fbk.eu/sites/st.fbk.eu/files/styles/adaptive/public/oauth2-logo_0.jpg?itok=XqBscURN" />
<HelloWorld msg="VueJS Authentication with Okta and OAuth2.0"/>
```



### installing okta

```node
npm install @okta/okta-vue --save
yarn add @types/okta__okta-vue
```

### set VUE_APP_OKTA_CLIENT_ID in EnvironmentVariables and restart computer

### okta code

```javascript
import Auth from '@okta/okta-vue'

Vue.use(VueRouter)

console.log('process.env.VUE_APP_OKTA_CLIENT_ID')
console.log(process.env.VUE_APP_OKTA_CLIENT_ID)

Vue.use(Auth,{
  issuer:'https://dev-961456.okta.com/oauth2/default',
  clientId: process.env.VUE_APP_OKTA_CLIENT_ID,
  redirectUri: 'http://localhost:8080/implicit/callback',
  scopes:['openid','profile','email'],
  pkce:true
});
```

Now we are ready to move forwards with OAuth!


### App.vue - add login and logout buttons using $auth.isAuthenticated()

```html
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" tag="button" id='home-button'> Home </router-link>
      <router-link to="/about">About</router-link>
      <button v-if='authenticated' v-on:click='logout' id='logout-button'> Logout </button>
      <button v-else v-on:click='login' id='login-button'> Login </button>
    </div>



    <router-view/>
  </div>
</template>

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



<script>

export default {
  name: 'app',
  data: function () {
    return {
      authenticated: false
    }
  },
  created () {
    this.isAuthenticated()
  },
  watch: {
    // Everytime the route changes, check for auth status
    '$route': 'isAuthenticated'
  },
  methods: {
    async isAuthenticated () {
      this.authenticated = await this.$auth.isAuthenticated()
    },
    login () {
      this.$auth.loginRedirect('/')
    },
    async logout () {
      await this.$auth.logout()
      await this.isAuthenticated()

      // Navigate back to home
      this.$router.push({ path: '/' })
    }
  }
}
</script>
```


### router/index.js for the response

```html
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '@okta/okta-vue'

Vue.use(VueRouter)

console.log('process.env.VUE_APP_OKTA_CLIENT_ID')
console.log(process.env.VUE_APP_OKTA_CLIENT_ID)

Vue.use(Auth,{
  issuer:'https://dev-961456.okta.com/oauth2/default',
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
  { path: '/implicit/callback', component: Auth.handleCallback() }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

```


### it's working!!! commit this!!!


### Run the server

Using this part as a guide

https://developer.okta.com/quickstart/#okta-node-js-express-js-quickstart

```bash
yarn add express
yarn add okta/jwt-verifier
yarn add cors


```node
const express = require('express');
const OktaJwtVerifier = require('@okta/jwt-verifier');
var cors = require('cors');

const oktaJwtVerifier = new OktaJwtVerifier({
    issuer:'https://dev-961456.okta.com/oauth2/default',
    clientId: process.env.VUE_APP_OKTA_CLIENT_ID,
  assertClaims: {
    aud: 'api://default',
  },
});

/**
 * A simple middleware that asserts valid access tokens and sends 401 responses
 * if the token is not present or fails validation.  If the token is valid its
 * contents are attached to req.jwt
 */
function authenticationRequired(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    return res.status(401).end();
  }

  const accessToken = match[1];
  const expectedAudience = 'api://default';

  return oktaJwtVerifier.verifyAccessToken(accessToken, expectedAudience)
    .then((jwt) => {
      req.jwt = jwt;
      next();
    })
    .catch((err) => {
      res.status(401).send(err.message);
    });
}

const app = express();

/**
 * For local testing only!  Enables CORS for all domains
 */
app.use(cors());

/**
 * An example route that requires a valid access token for authentication, it
 * will echo the contents of the access token if the middleware successfully
 * validated the token.
 */
app.get('/secure', authenticationRequired, (req, res) => {
  res.json(req.jwt);
});

/**
 * Another example route that requires a valid access token for authentication, and
 * print some messages for the user if they are authenticated
 */
app.get('/api/messages', authenticationRequired, (req, res) => {
  res.json([{
    message: 'Hello, word!'
  }]);
});

app.listen(3000, () => {
  console.log('Serve Ready on port 3000');
});
```
