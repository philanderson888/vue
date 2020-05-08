# vue-authentication-okta-10

Rebuild of okta-09

```js
vue create vue-authentication-okta-09; cd vue-authentication-okta-09;yarn install; yarn serve
```

```json
    "@okta/okta-vue": "^2.0.0",
    "@types/okta__okta-vue": "^1.2.0",
    "async": "^3.2.0",
    "axios": "^0.19.2",
    "bulma": "^0.8.2"
```

```js
cd c:\github\vue\StandaloneProjects\vue-authentication-okta-10;yarn serve
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

### not installed - try this way

```js
npm install bulma --save
```
