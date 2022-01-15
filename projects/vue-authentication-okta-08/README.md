# vue-authentication-okta-08

This is a rebuild from scratch of vue-authentication-okta-07 which built the client only and not the server, and did not have any authentication enabled but got the fake api working from a local array

This README.md is very comprehensive and complete on how to build a Vue API quickly!


### install

```js
vue create vue-authentication-okta-08;cd vue-authentication-okta-08;yarn install;yarn serve
```

### add in package.json from last app
```json
    "@okta/okta-vue": "^2.0.0",
    "@types/okta__okta-vue": "^1.2.0",
    "async": "^3.2.0",
    "axios": ">=0.21.2",
    "bulma": "^0.8.2"
```

### rebuild
```js
cd C:\github\vue\projects\vue-authentication-okta-08; yarn install; yarn serve
```

### add in assets\css\bulma.scss

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

### add bulma into project at main.ts

```js
import './../node_modules/bulma/css/bulma.css';
import "bulma/css/bulma.css"
import "./assets/css/bulma.scss"
console.clear()
```

### add a new route 

```json
,
  {
    path: '/messages',
    name: 'Messages',
    component: () => import(/* webpackChunkName: "messages" */ '../views/Messages.vue')
  }
```

### add a new router link on App.vue

```html
<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/messages">Messages</router-link>
</div>
```

### add Messages.vue

```html
<template>
  <div class="messages">
    <h1>Messages</h1>
  </div>
</template>
```

### update images in Home.vue

```html
<template>
  <div class="home">
    <img class="splash-screen" alt="Vue logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" />
    <img alt="Okta Logo" class="splash-screen" src="https://www.okta.com/sites/all/themes/Okta/images/logos/developer/Dev_Logo-01_Large.png" />
    <img alt="oauth logo" class="splash-screen" src="https://st.fbk.eu/sites/st.fbk.eu/files/styles/adaptive/public/oauth2-logo_0.jpg?itok=XqBscURN" />
    <HelloWorld msg="VueJS Authentication with Okta and OAuth2.0"/>
  </div>
</template>
```

### Remove excess in component HelloWorld

### Add in Messages.vue

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

### Hook it up in Messages.vue

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







