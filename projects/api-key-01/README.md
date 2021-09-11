# API keys

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### API keys

API keys can be stored as environment variables

Create an .env file and add this to .gitignore so it's not pushed to GitHub.

```bash
# development or production
NODE_ENV=development
VUE_APP_TITLE=App Title
VUE_APP_API_Key_01=123456
```

When we build our Vue project the variable VUE_APP_API_Key_01 will return the appropriate value

in `main.js`

```javascript
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

console.log(process)

console.log(process.env)

console.log(process.env.VUE_APP_API_Key_01)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
/*
ObjectBASE_URL: "/"
NODE_ENV: "development"
VUE_APP_API_Key_01: "123456"
VUE_APP_TITLE: "App Title"

123456
*/
```
