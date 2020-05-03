# vue-authentication-okta-07

This is a build from scratch on a Sunday when I have more time!

This version builds just the API client from scratch, with no authentication and a fake API

### Initialise

```js
yarn global add @vue/cli
vue create vue-authentication-okta-07
yarn install
yarn serve
```

Now adding this to package.json

```js
"@okta/okta-vue": "^2.0.0",
"@types/okta__okta-vue": "^1.2.0",
"async": "^3.2.0",
"axios": "^0.19.2",
"bulma": "^0.8.2",
"core-js": "^3.6.4",
"register-service-worker": "^1.7.1",
"vue": "^2.6.11",
"vue-class-component": "^7.2.3",
"vue-property-decorator": "^8.4.1",
"vue-router": "^3.1.6",
"vuex": "^3.1.3"
```

```js
yarn install
yarn serve
```
Clean out the Vue app and add another page for messages!

OK that is all finished so I now have 3 pages

| View     | Component         |
| -------- | ----------------- |
| Home     | HelloWorld        |
| About    |                   |
| Messages | ComponentMessages |

### API - build with data from local array

OK I have that working now!

I feel this is a good place to pause and save this work and to create 08 as the next phase which is authentication added in, and the API server.
