# vue-authentication-okta-02

In this project I have precompiled SASS so the CSS goes in the App.vue.

I don't know if this is a great idea - I think I would prefer the CSS in a regular CSS file but never mind, we can sort that later.

Now installing Bulma

https://dev.to/justaashir/bulma-vue-easy-setup-2b3

npm install bulma

That didn't really work so I will have to go back and find out how I installed bulma before which I did and it was lovely, so I do think it would be worth it!

Actually yes I did get bulma all working in the end.

yarn add bulma

Then, in main.ts

```javascript
import './../node_modules/bulma/css/bulma.css';
import "bulma/css/bulma.css"
```

That is all that is needed to apply bulma.js!

Easy when you know how!

OK so attempting to follow this

https://developer.okta.com/quickstart/#/vue/nodejs/express

now installing okta

npm install @okta/okta-vue --save

actually

yarn add @okta/okta-vue which has also added to package.json

Then in router/index.ts I also had to add

import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '@okta/okta-vue'

Vue.use(VueRouter)

Vue.use(Auth,{
  issuer:'https://${}/oauth2/default',
  clientId: '....',
  redirectUri: 'http://localhost:8080/implicit/callback',
  scopes:['openid','profile','email'],
  pkce:true
});

although before this worked I had to add

yarn add @types/okta__okta-vue

and then the project compiled

### Add Okta code

Now adding Okta code

import Auth from '@okta/okta-vue'

Vue.use(VueRouter)

Vue.use(Auth,{
  issuer:'https://dev-961456.okta.com/oauth2/default',
  clientId: process.env.VUE_APP_OKTA_CLIENT_ID,
  redirectUri: 'http://localhost:8080/implicit/callback',
  scopes:['openid','profile','email'],
  pkce:true
});


And this is compiling fine.

But is the data correct?

And we don't want secrets in our code?  I am not sure! Let's check

so create file .env in the project root

also .env is in the .gitignore repository

so the variable must start with VUE_APP_ to be read

Vue.use(Auth,{
  issuer:'https://dev-961456.okta.com/oauth2/default',
  clientId: process.env.VUE_APP_OKTA_CLIENT_ID,
  redirectUri: 'http://localhost:8080/implicit/callback',
  scopes:['openid','profile','email'],
  pkce:true
});

this will correctly print out the id

