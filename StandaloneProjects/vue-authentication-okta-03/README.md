# vue-authentication-okta-03


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


