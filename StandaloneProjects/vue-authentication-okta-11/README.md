# vue-authentication-okta-11

## Introduction

This is a rebuild in the continuing series of building a VueJS Authentication app from scratch using OKTA, and building a client and a server which both authenticate via OKTA and a secret key is obtained as well to validate the authentication.  It's exciting and I am on a journey at present to discover fully how to use and build this material out.

Phil Anderson

8 May 2020

## Contents

- [vue-authentication-okta-11](#vue-authentication-okta-11)
  - [Introduction](#introduction)
  - [Contents](#contents)
  - [URL of tutorial](#url-of-tutorial)
  - [Install](#install)
    - [.vuerc in ~](#vuerc-in)
  - [Images](#images)
  - [dependencies](#dependencies)
    - [run every time](#run-every-time)
  - [Bulma CSS](#bulma-css)
    - [try buefy](#try-buefy)
    - [going back to bulma for now](#going-back-to-bulma-for-now)
    - [assets\css\bulma.scss](#assetscssbulmascss)
    - [add bulma at main.ts](#add-bulma-at-maints)
  - [Messages.vue](#messagesvue)
    - [add route](#add-route)
    - [Add in component MessageList.vue](#add-in-component-messagelistvue)
    - [link in Messages.vue](#link-in-messagesvue)
    - [Summary so far](#summary-so-far)
  - [OKTA Authentication On Client](#okta-authentication-on-client)
    - [router.js use OKTA as middleware](#routerjs-use-okta-as-middleware)
    - [App.vue - Add login and logout buttons](#appvue---add-login-and-logout-buttons)
    - [Router add callback route](#router-add-callback-route)
    - [logging (removed from project)](#logging-removed-from-project)
    - [Summary so far](#summary-so-far-1)
  - [Build the API](#build-the-api)
    - [Server.js](#serverjs)
    - [install](#install-1)
    - [server.js](#serverjs-1)
    - [Run the server without authentication](#run-the-server-without-authentication)
    - [server running at http://localhost:3000/api/messages](#server-running-at-httplocalhost3000apimessages)
  - [API data unauthenticated](#api-data-unauthenticated)
    - [server.js JSON data for API](#serverjs-json-data-for-api)
  - [Display API data on the client](#display-api-data-on-the-client)
    - [MessageList.vue](#messagelistvue)
    - [Summary So Far](#summary-so-far-2)
    - [Add logging](#add-logging)
  - [API data with Authentication](#api-data-with-authentication)
    - [Intro](#intro)
    - [MessageList.vue](#messagelistvue-1)
    - [Sever.js final code for authentication](#severjs-final-code-for-authentication)
  - [Summary](#summary)
  - [Next](#next)



## URL of tutorial

https://developer.okta.com/quickstart/#okta-node-js-express-js-quickstart

## Install

### .vuerc in ~

```json
{
  "useTaobaoRegistry": false,
  "packageManager": "yarn",
  "presets": {
    "vue-create-script.json": {
      "useConfigFiles": false,
      "plugins": {
        "@vue/cli-plugin-babel": {},
        "@vue/cli-plugin-typescript": {
          "classComponent": true,
          "useTsWithBabel": true
        },
        "@vue/cli-plugin-pwa": {},
        "@vue/cli-plugin-router": {
          "historyMode": true
        },
        "@vue/cli-plugin-vuex": {},
        "@vue/cli-plugin-eslint": {
          "config": "base",
          "lintOn": [
            "save"
          ]
        }
      },
      "cssPreprocessor": "dart-sass"
    }
  }
}
```

```js
vue create vue-authentication-okta-11; cd vue-authentication-okta-11;yarn install; yarn serve
```

## Images

```html
<img class="splash-screen" alt="Vue logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" />
<img alt="Okta Logo" class="splash-screen" src="https://www.okta.com/sites/all/themes/Okta/images/logos/developer/Dev_Logo-01_Large.png" />
<img alt="oauth logo" class="splash-screen" src="https://st.fbk.eu/sites/st.fbk.eu/files/styles/adaptive/public/oauth2-logo_0.jpg?itok=XqBscURN" />
<HelloWorld msg="VueJS Authentication with Okta and OAuth2.0"/>
```


## dependencies

```node
yarn add async axios buefy @okta/okta-vue @types/okta__okta-vue 
```

### run every time

```js
cd c:\github\vue\StandaloneProjects\vue-authentication-okta-11;yarn serve
```

## Bulma CSS

### try buefy

*Not sure if buefy will interfere with bulma so have removed bulma from package.json*

```js
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)
```

### going back to bulma for now

*It had been put back into package.json anyway, so no harm done*

### assets\css\bulma.scss

```css
@charset "utf-8";
/*! bulma.io v0.8.2 | MIT License | github.com/jgthms/bulma */
@import "../../../node_modules/bulma/bulma.sass";

body{
    background-color: rgb(210, 231, 225);
}
.splash-screen{
    width: 10min;
    height: 10vmin;
    margin: -1vmin 2vmin 1vmin 2vmin;
}
.ul-posts{
    margin:2vmin;
}
li.posts{
    border:1px solid #82878d;
    padding:2vmin;
}
```

### add bulma at main.ts

```js
//buefy - not using
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)
// bulma
import './../node_modules/bulma/css/bulma.css';
import "bulma/css/bulma.css"
import "./assets/css/bulma.scss"
console.clear()
```


## Messages.vue

### add route

```json
{
path: '/messages',
name:'Messages',
component:() => import(/* webpackChunkName: "about" */ '../views/Messages.vue')
}
```

```html
<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/messages">Messages</router-link>
</div>
```



### Add in component MessageList.vue

```html
<template>
  <div class="messages">
    <h1>{{ msg }}</h1>
    <ul class="ul-posts" v-if="posts && posts.length">
      <li class="posts" v-for="post in posts" :key='post.title'>
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
        <p>{{post.date}}</p>
        <p>{{post.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      posts: [
        {
          title: "title1",
          body: "body1",
          date: "date",
          text: "text2"
        },
        {
          title: "title2",
          body: "body1",
          date: "date",
          text: "text2"
        },
        {
          title: "title3",
          body: "body3",
          date: "date",
          text: "text3"
        }
      ]
    }
  }
}
</script>
</script> <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"
        scoped="">
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
</style>
```

### link in Messages.vue

```html
<template>
  <div class="messages">
    <MessageList msg="VueJS Authentication with Okta and OAuth2.0"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MessageList from '@/components/MessageList.vue'

export default {
  name: 'Messages',
  components: {
    MessageList
  }
}
</script>
```

### Summary so far

I'm very happy at this point

Have bulma or buefy working (not sure which but at least one is working!)

Have my fake API up and running

Now have to look at building my server but before that I can add in OKTA Authentication so this is phase 2!

## OKTA Authentication On Client

### router.js use OKTA as middleware

```javascript
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
```



### App.vue - Add login and logout buttons 

```html
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" tag="button" id='home-button'> Home </router-link>
      <router-link to="/about" tag="button" id='about-button'> About </router-link>
      <router-link to="/messages" tag="button" id='messages-button'> Messages </router-link>
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


### Router add callback route

```json
  { path: '/implicit/callback', component: Auth.handleCallback() }
```

At this point the API is reading fake data and also we have a valid OAuth login and logout working.  The API is displaying regardless if logged in or out though, and it's only fake data and not reading from a server.  So next phase is to get a server up and running.

### logging (removed from project)

```js
// change method from async logout to just logout
console.log('logging in in 10 seconds')
console.group()
console.log()
console.log('In App.vue')
console.log('this is ')
console.log(this)
console.log('$auth holds')
console.log(this.$auth)
console.log()
console.log(this.$auth.config)
console.log()
console.log(this.$auth.config.clientId)
console.log()
console.log(this.$auth.httpRequestClient)
console.log()
console.log()
console.groupEnd()

setTimeout(() => {
this.$auth.logout()
this.isAuthenticated()
// Navigate back to home
this.$router.push({ path: '/' })
}, 10000);

```

### Summary so far

We have working

1. Client with fake API
2. OKTA login and logout buttons working fine

We now need to build our own Server which gives API information.  We will do this in 2 stages

3. Server
   1. API information (unauthenticated)
   2. API information (authenticated, with token)

## Build the API

Now we can build the server, first without authentication.

Still following this tutorial https://developer.okta.com/quickstart/#okta-node-js-express-js-quickstart 

### Server.js

It's a nodejs project

### install

```js
code server.js
yarn add express cors @okta/jwt-verifier
```

### server.js

```js
const express = require('express');
const OktaJwtVerifier = require('@okta/jwt-verifier');
var cors = require('cors');
var port = 3000;

const oktaJwtVerifier = new OktaJwtVerifier({
    issuer: process.env.VUE_APP_OKTA_ISSUER,
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
    console.log(`authenticating`)
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    console.log("no match")
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
      // where does this log to? not logging to console!
      console.log(`Error in application - ${err.message}`)
      res.status(401).send('Unauthorized error - '+ err.message);
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
app.get('/api/messages', (req, res) => {
  res.json([{
    message: 'Hello, world!'
  }]);
});

app.get('/api', (req, res) => {
    res.json({
      message: 'This is the API root.  Try adding /messages to your url'
    });
  });

  app.get('/', (req, res) => {
    res.json({
      message: 'This is the API root.  Try adding /api/messages to your url'
    });
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

### Run the server without authentication



```js
cd C:\github\vue\StandaloneProjects\vue-authentication-okta-11-server;node server.js
cd C:\github\vue\StandaloneProjects\vue-authentication-okta-11;yarn serve
```

### server running at [http://localhost:3000/api/messages](http://localhost:3000/api/messages)

## API data unauthenticated

Now let's get the API data working in an unauthenticated manner.

### server.js JSON data for API

```js
app.get('/api/messages', authenticationRequired, (req, res) => {
  res.json({
    messages: [
      {
        title: 'Title',
        body: 'post body',
        date:  new Date(),
        text: 'I am a robot.'
      },
      {
        title: 'Title 2',
        body: 'post body 2',
        date:  new Date(new Date().getTime() - 1000 * 60 * 60),
        text: 'Hello, world!'
      },
      {
        title: 'Title 3',
        body: 'post body 3',
        date:  new Date(),
        text: 'I am a robot.'
      },
      {
        title: 'Title 4',
        body: 'post body 4',
        date:  new Date(new Date().getTime() - 1000 * 60 * 60),
        text: 'Hello, world!'
      }
    ]
  });
});
```

Good - I am now getting unauthenticated API data coming through on port 3000.

## Display API data on the client

Next stage is to display that API data on the client

### MessageList.vue

```html
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul class="ul-posts" v-if="posts && posts.length">
      <li class="posts" v-for="post in posts" :key='post.title'>
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
        <p>{{post.date}}</p>
        <p>{{post.text}}</p>
      </li>
  </ul>
  </div>
</template>
<script lang="ts">
import axios from 'axios'
// export default class MessageList extends Vue {
export default {
  props:{
   msg: {
     type: String,
     default:''
   }
  },
  data(){    
    return{
      posts:[ ]
    }
  },
  async created(){
    const accessToken = await this.$auth.getAccessToken()
    console.log('accessToken')
    console.log(accessToken)
    axios.defaults.headers.common['Authorization']=`Bearer ${accessToken}`
    console.log('axios')
    console.log(axios)
    console.log('axios.defaults')
    console.log(axios.defaults)
    console.log('axios.defaults.headers')
    console.log(axios.defaults.headers)
    console.log("axios.defaults.headers.common['Authorization']")
    console.log(axios.defaults.headers.common['Authorization'])
    try{
      const response = await axios.get(`http://localhost:3000/api/messages`)
      console.log(response.data)
      console.log(response.data.messages)
      console.log('this.posts')     
      console.log(this.posts)
      this.posts = response.data.messages; 
    }
    catch(e){
      console.error(`Errors! ${e}`)
    }
  }
}
</script> <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"
        scoped="">
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
</style>
```

### Summary So Far 

We are doing well.  Summary so far:

1. Got client working with fake API data
2. Got client to log in to OKTA and know it's authenticated
3. Got server working with no data
4. Got server working with API data unauthenticated
5. Got client to read API data unauthenticated

Now we have to work on the final tricky bit which is getting the client to log in, be authenticated, then request API data as an authenticated client and the API server verify this authentication with OKTA - that is the final and tricky bit! Let's see if we can do this!

5 hours into this tutorial today ### Friday 8 May 2020 12:37 PM 

Still going (it's a holiday today!)

### Add logging

```js
console.log('oktaJwtVerifier')
console.log(oktaJwtVerifier)
console.log()
console.log()
```

```js
function authenticationRequired(req, res, next) {
  console.log(`authenticating`)
  console.log()
  const authHeader = req.headers.authorization || '';
  console.log('authHeader');
  console.log(authHeader);
  console.log()
  console.log()
```

```js
  const accessToken = match[1];
  console.log('accessToken')
  console.log(accessToken)
  console.log('');
  console.log('');
  console.log('oktaJwtVerifier')
  console.log(oktaJwtVerifier)
  console.log('');
  console.log('');
  console.log('oktaJwtVerifier.claimsToAssert')
  console.log(oktaJwtVerifier.claimsToAssert)
  console.log('');
  console.log('');
  const audience = oktaJwtVerifier.claimsToAssert.aud;
  console.log('audience')
  console.log(audience)
  console.log()
  console.log()
```

Current State of MessageList.vue is as follows

- Yes, Getting Data
- Yes, Getting An API Key
- Yes, Logging The API Key
- No, Forcing Authentication to view the API

We fix the last bit in the next section

## API data with Authentication

### Intro

This is the final code which shows the API data only being sent under authentication.  Great!  Job done!

### MessageList.vue

```html
<template>
  <div class="posts">
    <h1>{{ msg }}</h1>
    <ul class="ul-posts" v-if="posts && posts.length">
      <li class="posts" v-for="post in posts" :key='post.title'>
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
        <p>{{post.date}}</p>
        <p>{{post.text}}</p>
      </li>
  </ul>
  </div>
</template>
<script lang="ts">
import axios from 'axios'
// export default class MessageList extends Vue {
export default {
  props:{
   msg: {
     type: String,
     default:''
   }
  },
  data(){    
    return{
      posts:[],
      $auth:{}
    }
  },
  async created(){

    console.group('this object is the Vue Component')
      console.log(this)
    console.groupEnd()
    console.log()
    console.log()

    console.group('$auth object')
      console.log(this.$auth)
    console.groupEnd()
    console.log()
    console.log()
    
    const accessToken = await this.$auth.getAccessToken()
    console.group('accessToken obtained with $auth.getAccessToken()')
      console.log(accessToken)
    console.groupEnd()
    console.log()
    console.log()
    axios.defaults.headers.common['Authorization']=`Bearer ${accessToken}`
    console.group('axios gets the API data')
    console.log(axios)
    console.log('axios.defaults')
    console.log(axios.defaults)
    console.log('axios.defaults.headers')
    console.log(axios.defaults.headers)
    console.log("axios.defaults.headers.common['Authorization']")
    console.log(axios.defaults.headers.common['Authorization'])
    console.groupEnd()
    console.log()
    console.log()
    try{
      const response = await axios.get(`http://localhost:3000/api/messages`)
      console.group('response.data')
      console.log(response.data)
      console.groupEnd();
      console.log()
      console.log()
      console.group('response.data.messages')
      console.log(response.data.messages)
      console.groupEnd()
      console.log()
      console.log()
      this.posts = response.data.messages; 
      console.group('this.posts')     
      console.log(this.posts)
      console.groupEnd()
      console.log()
      console.log()
    }
    catch(e){
      console.error(`Errors! ${e}`)
    }
  }
}
</script> <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"
        scoped="">

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
</style>
```

### Sever.js final code for authentication

```js
const express = require('express');
const OktaJwtVerifier = require('@okta/jwt-verifier');
var cors = require('cors');
var port = 3000;

const oktaJwtVerifier = new OktaJwtVerifier({
    issuer: process.env.VUE_APP_OKTA_ISSUER,
    clientId: process.env.VUE_APP_OKTA_CLIENT_ID,
    assertClaims: {
      aud: 'api://default'
    }
});


console.log('oktaJwtVerifier')
console.log(oktaJwtVerifier)
console.log()
console.log()

/**
 * A simple middleware that asserts valid access tokens and sends 401 responses
 * if the token is not present or fails validation.  If the token is valid its
 * contents are attached to req.jwt
 */
function authenticationRequired(req, res, next) {
  console.log(`authenticating`)
  console.log()
  const authHeader = req.headers.authorization || '';
  console.log('authHeader');
  console.log(authHeader);
  console.log()
  console.log()
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    console.log("no match")
    return res.status(401).end();
  }

  const accessToken = match[1];
  console.log('access token')
  console.log(accessToken)
  console.groupEnd()
  const expectedAudience = 'api://default';

  return oktaJwtVerifier.verifyAccessToken(accessToken, expectedAudience)
    .then((jwt) => {
      req.jwt = jwt;
      next();
    })
    .catch((err) => {
      // where does this log to? not logging to console!
      console.log(`Error in application - ${err.message}`)
      res.status(401).send('Unauthorized error - '+ err.message);
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
  res.json({
    messages: [
      {
        title: 'Title',
        body: 'post body',
        date:  new Date(),
        text: 'I am a robot.'
      },
      {
        title: 'Title 2',
        body: 'post body 2',
        date:  new Date(new Date().getTime() - 1000 * 60 * 60),
        text: 'Hello, world!'
      },
      {
        title: 'Title 3',
        body: 'post body 3',
        date:  new Date(),
        text: 'I am a robot.'
      },
      {
        title: 'Title 4',
        body: 'post body 4',
        date:  new Date(new Date().getTime() - 1000 * 60 * 60),
        text: 'Hello, world!'
      }
    ]
  });
});

app.get('/api', (req, res) => {
    res.json({
      message: 'This is the API root.  Try adding /messages to your url'
    });
  });

  app.get('/', (req, res) => {
    res.json({
      message: 'This is the API root.  Try adding /api/messages to your url'
    });
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

## Summary

In this tutorial we have worked through and built, from scratch

- A client which displays posts from a local array of data
- A server which generates API data in the form of posts
- A client which authenticates via OKTA and obtains an authorization token
- A server which demands an authentication token before generating API data
- A client which sends a request for data to the API with the token, and thus receives the data


Happy days!


## Next

The only thing which is now missing is the ability for any client to register with my app and get the data.  This is a new step and something I have not thought about!

But I am happy for now

Phil Anderson 

8 May 2020

