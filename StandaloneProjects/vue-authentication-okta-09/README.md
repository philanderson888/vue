# vue-authentication-okta-09

This is a perfect rebuild of 08

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
vue create vue-authentication-okta-09; cd vue-authentication-okta-09;yarn install; yarn serve
```

### add in package.json from last app
```json
    "@okta/okta-vue": "^2.0.0",
    "@types/okta__okta-vue": "^1.2.0",
    "async": "^3.2.0",
    "axios": "^0.19.2",
    "bulma": "^0.8.2"
```

### Re-install and run

```js
cd c:\github\vue\StandaloneProjects\vue-authentication-okta-09;yarn serve
```

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
import './../node_modules/bulma/css/bulma.css';
import "bulma/css/bulma.css"
import "./assets/css/bulma.scss"
console.clear()
```

### install bulma

```js
yarn add bulma; yarn serve
```

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

### images

```html
<img class="splash-screen" alt="Vue logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" />
<img alt="Okta Logo" class="splash-screen" src="https://www.okta.com/sites/all/themes/Okta/images/logos/developer/Dev_Logo-01_Large.png" />
<img alt="oauth logo" class="splash-screen" src="https://st.fbk.eu/sites/st.fbk.eu/files/styles/adaptive/public/oauth2-logo_0.jpg?itok=XqBscURN" />
<HelloWorld msg="VueJS Authentication with Okta and OAuth2.0"/>
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
```

### link in Messages.vus

```html
<template>
  <div class="messages">
    <h1>Messages</h1>
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

### API runs but no Bulma - forget for now.

## Build the server

### Add authentication as middleware in the router

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

```node
npm install @okta/okta-vue --save
npm install @types/okta__okta-vue --save
yarn serve
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
  ,
  { path: '/implicit/callback', component: Auth.handleCallback() }
```

At this point the API is reading fake data and also we have a valid OAuth login and logout working.  The API is displaying regardless if logged in or out though, and it's only fake data and not reading from a server.  So next phase is to get a server up and running.

### server.js

Following

https://developer.okta.com/quickstart/#okta-node-js-express-js-quickstart

```bash
yarn add express; 
yarn add @okta/jwt-verifier;
yarn add cors;
```

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
app.get('/api/messages', (req, res) => {
  res.json([{
    message: 'Hello, world!'
  }]);
});

app.listen(3000, () => {
  console.log('Serve Ready on port 3000');
});
```

### Run the server without authentication

```js
node server.js
```

