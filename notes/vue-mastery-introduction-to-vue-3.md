# vue mastery - introduction to vue 3

## contents

## introduction

this follows along with the basic vue mastery course `introduction to vue 3` which is behind a paywall but I have signed up and am following along with these tutorials ...

## starter code

starter code is found at https://github.com/Code-Pop/Intro-to-Vue-3

so use a command shell and type

```js
git clone https://github.com/Code-Pop/Intro-to-Vue-3
cd Intro-to-Vue-3
```

you can then copy your files to your own repository, ready to start working on them.  So for example I have copied all these files to `c:\github\vue\projects\vue-mastery-intro-to-vue-3\intro-01`.  I copied them all except the .git folder which is not necessary as I already have a .git folder for `vuejs` at a higher level.  It will sometimes cause complications also to copy a .git folder as a child of another .git folder.

So we now have our raw files and are ready to get started.

We have `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vue Mastery</title>
    <!-- Import Styles -->
    <link rel="stylesheet" href="./assets/styles.css" />
    <!-- Import Vue.js -->
    <script src="https://unpkg.com/vue@3.0.0-beta.12/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app">
      <h1>Product goes here</h1>
    </div>

    <!-- Import Js -->
    <script src="./main.js"></script>
  </body>
</html>
```

`main.js``

```js
const product = 'Socks'
```

we also have `assets\styles` and `assets\images`
