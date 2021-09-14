# vue mastery - introduction to vue 3

## contents

- [vue mastery - introduction to vue 3](#vue-mastery---introduction-to-vue-3)
  - [contents](#contents)
  - [introduction](#introduction)
  - [starter code](#starter-code)
  - [getting started](#getting-started)
  - [get started with our script](#get-started-with-our-script)
  - [rendering data with `expression syntax` {{ ... }}](#rendering-data-with-expression-syntax---)
  - [binding data with `v-bind`](#binding-data-with-v-bind)
  - [conditional rendering with `v-if`, `v-else-if` and `v-else`](#conditional-rendering-with-v-if-v-else-if-and-v-else)
  - [hiding elements with `v-show`](#hiding-elements-with-v-show)
  - [displaying lists with `v-for`](#displaying-lists-with-v-for)
  - [events with `v-on:click="dothis"`](#events-with-v-onclickdothis)
  - [events with `@mouseover`](#events-with-mouseover)
  - [other events](#other-events)
  - [css dynamic inline styling](#css-dynamic-inline-styling)
  - [enabling and disabling features with `:disabled`](#enabling-and-disabling-features-with-disabled)
  - [conditional classes](#conditional-classes)
  - [computed properties](#computed-properties)
  - [components](#components)
    - [templates](#templates)
  - [props](#props)
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

## getting started

to get started we can add `vuejs` directly to our html file thus 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vue Mastery</title>
    <!-- Import Styles -->
    <link rel="stylesheet" href="./assets/styles.css" />
    <!-- Import Vue.js -->
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  </head>
  <body>
    <div id="app">
      <h1>Product goes here</h1>
    </div>

    <script></script>
  </body>
</html>
```

## get started with our script

in our `<script></script>` tag add the following

```js
var app = new Vue({
    el: '#app' 
})
```
this creates a new vue instance using the library we just added.  

it also ties our vue element `el` to the <div id='app'> in our html

we can also replace our one line of data with data sent into the app at launch

```js
var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks'
    }
})
```

so at the moment if we run our `html` with `open with live server` extension, we get `Product goes here` text

## rendering data with `expression syntax` {{ ... }}

to render data in our `html` we can alter the data as so:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Vue Mastery</title>
  <!-- Import Styles -->
  <link rel="stylesheet" href="./assets/styles.css" />
  <!-- Import Vue.js -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
</head>
<body>
  <div id="app">
    <!-- expression syntax -->
    <h1>{{ product }}</h1>
  </div>

  <script>
  options = {
    // element
    el: '#app',
    data: {
      product: 'Socks'
    }
  }
  var app = new Vue(options)
  </script>
</body>
</html>
```

We know that our data is live, because if we go to our `chrome dev tools` console tab we can alter the value of `product`

```js
app.product='new product'
```
and we should see the new value of `product` appearing on the screen now


## binding data with `v-bind`

We can bind data to an element, for example in this case we bind image data

```
v-bind:attribute="expression"
```
```js
v-bind:src="expression"
```

also written in short hand

```js
:src="expression"
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Vue Mastery</title>
  <!-- Import Styles -->
  <link rel="stylesheet" href="./assets/styles.css" />
  <!-- Import Vue.js -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
</head>
<body>
  <div class="nav-bar"></div>
  <div id="app">
    <div class="product">
      <div class="product-image">
        <img :src={{image}} />
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
      </div>
    </div>
  </div>

  <script>
  var app = new Vue({
    el: '#app',
    data: {
      product: 'Socks',
      image: './assets/images/socks_green.jpg'
    }
  })
  </script>
</body>
</html>
```

This now shows our image which in the `css` i have set to size 10% of screen width

```css
img {
  border: 2px solid #d8d8d8;
  width: 10%;
  margin: 40px;
  padding: 15px;
}
```

we can bind many attributes such as

```js
:alt="description"
:href="url"
:title="tooltip"
:class="myclass"
:disabled="isDisabled"
```

## conditional rendering with `v-if`, `v-else-if` and `v-else`

We can now render a paragraph depending if a condition is true or not

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Vue Mastery</title>
  <!-- Import Styles -->
  <link rel="stylesheet" href="./assets/styles.css" />
  <!-- Import Vue.js -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
</head>
<body>
  <div id="app">
    <div class="nav-bar">
      <div class="nav-item">
        <a class="nav-item" :href="url">vue mastery</a>
      </div>
    </div>
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image" />
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
        <p v-if="isInStock && inventory >= 10">In Stock</p>
        <p v-else-if="isInStock && inventory < 10 && inventory > 0">Low on stock</p>
        <p v-else>Out of Stock</p>
        <p v-if="isInStock && inventory > 0">{{inventory}} items</p>
      </div>
      <div class="product-image">
        <img v-bind:src="image" />
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
      </div>
    </div>
  </div>

  <script>
  var app = new Vue({
    el: '#app',
    data: {
      product: 'Socks',
      image: './assets/images/socks_green.jpg',
      url: 'https://www.vuemastery.com',
      isInStock:true,
      inventory: 5
    }
  })
  </script>
</body>
</html>
```

## hiding elements with `v-show`

this toggles the `display:visible` and `display:hidden` css properties

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Vue Mastery</title>
  <!-- Import Styles -->
  <link rel="stylesheet" href="./assets/styles.css" />
  <!-- Import Vue.js -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
</head>
<body>
  <div id="app">
    <div class="nav-bar">
      <div class="nav-item">
        <a class="nav-item" :href="url">vue mastery</a>
      </div>
    </div>
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image" />
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
        <p v-if="isInStock && inventory >= 10">In Stock</p>
        <p v-else-if="isInStock && inventory < 10 && inventory > 0">Low on stock</p>
        <p v-else>Out of Stock</p>
        <p v-if="isInStock && inventory > 0">{{inventory}} items</p>
      </div>
      <div class="product-image">
        <img v-bind:src="image" />
      </div>
      <div class="product-info">
        <h1 v-show="showMe">{{ product }}</h1>
      </div>
    </div>
  </div>

  <script>
  var app = new Vue({
    el: '#app',
    data: {
      product: 'Socks',
      image: './assets/images/socks_green.jpg',
      url: 'https://www.vuemastery.com',
      isInStock:true,
      inventory: 5,
      showMe: true 
    }
  })
  </script>

</body>
</html>
```

## displaying lists with `v-for`

we can now add arrays into our `data` and display them

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Vue Mastery</title>
  <!-- Import Styles -->
  <link rel="stylesheet" href="./assets/styles.css" />
  <!-- Import Vue.js -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
</head>
<body>
  <div id="app">
    <div class="nav-bar">
      <div class="nav-item">
        <a class="nav-item" :href="url">vue mastery</a>
      </div>
    </div>
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image" />
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
        <p v-if="isInStock && inventory >= 10">In Stock</p>
        <p v-else-if="isInStock && inventory < 10 && inventory > 0">Low on stock</p>
        <p v-else>Out of Stock</p>
        <p v-if="isInStock && inventory > 0">{{inventory}} items</p>
        <ul>
          <li v-for="detail in details">{{detail}}</li>
          <li v-for="variant in variants" :key="variant.variantId">variant {{variant.variantId}} - {{variant.variantColor}}</li>
        </ul>
      </div>
      <div class="product-image">
        <img v-bind:src="image" />
      </div>
      <div class="product-info">
        <h1 v-show="showMe">{{ product }}</h1>
      </div>
    </div>
  </div>

  <script>
  var app = new Vue({
    el: '#app',
    data: {
      product: 'Socks',
      image: './assets/images/socks_green.jpg',
      url: 'https://www.vuemastery.com',
      isInStock:true,
      inventory: 5,
      showMe: true,
      details:['80% cotton', '20% polyester'],
      variants:[{variantId:2234,variantColor:'green'},{variantId:2235,variantColor:'blue'}]
    }
  })
  </script>
</body>
</html>
```

## events with `v-on:click="dothis"`

let's add a button to our application which increments our shopping cart by one time on each click

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Vue Mastery</title>
  <!-- Import Styles -->
  <link rel="stylesheet" href="./assets/styles.css" />
  <!-- Import Vue.js -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
</head>
<body>
  <div id="app">
    <div class="nav-bar">
      <div class="nav-item">
        <a class="nav-item" :href="url">vue mastery</a>
      </div>
    </div>
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image" />
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
        <p v-if="isInStock && inventory >= 10">In Stock</p>
        <p v-else-if="isInStock && inventory < 10 && inventory > 0">Low on stock</p>
        <p v-else>Out of Stock</p>
        <p v-if="isInStock && inventory > 0">{{inventory}} items</p>
        <ul>
          <li v-for="detail in details">{{detail}}</li>
          <li v-for="variant in variants" :key="variant.variantId">variant {{variant.variantId}} - {{variant.variantColor}}</li>
          <span v-for="size in sizes">{{size}}</span>
        </ul>
      </div>
      <div class="product-image">
        <img v-bind:src="image" />
      </div>
      <div class="product-info">
        <h1 v-show="showMe">{{ product }}</h1>
      </div>
    </div>
    <button class="button" v-on:click={{cart++}}>Increment Cart</button>
    <button class="button" v-on:click="addToCart">Add To Cart</button>
    <div class="cart">
      <p>Cart ({{cart}} items)</p>
    </div>
  </div>

  <script>
  var app = new Vue({
    el: '#app',
    data: {
      product: 'Socks',
      image: './assets/images/socks_green.jpg',
      url: 'https://www.vuemastery.com',
      isInStock:true,
      inventory: 5,
      showMe: true,
      details:['80% cotton', '20% polyester'],
      variants:[{variantId:2234,variantColor:'green'},{variantId:2235,variantColor:'blue'}],
      sizes:["XS,","S,","M,","L,","XL"],
      cart: 0
    },
    methods: {
      addToCart: function() {
        this.cart++
      }
    }
  })
  </script>
</body>
</html>
```

## events with `@mouseover`

we can also add mouseover events, for example to update the image on display with different variants on colours

```html
<div class="product-image">
   <img v-bind:src="imageUrl" />
</div>

<ul>
    <li v-for="detail in details">{{detail}}</li>
    <li v-for="variant in variants" :key="variant.variantId" @mouseover="alterImageColor(variant.url)" >variant {{variant.variantId}} - {{variant.variantColor}}</li>
    <span v-for="size in sizes">{{size}}</span>
</ul>
```

```js
data: {
    imageUrl: './assets/images/socks_green.jpg',
    variants:[
    {variantId:2234, variantColor:'green', url:'./assets/images/socks_green.jpg'},
    {variantId:2235, variantColor:'blue' , url:'./assets/images/socks_blue.jpg'}
    ],
},
methods: {
    alterImageColor: function(url){
    console.log(`new url is ${url}`)
    this.imageUrl = url
    }
}
```

## other events

other events are handled such as 

```html
<form @submit="onSubmit">..</form>
<input @keyup.enter="send" />
```

see more at https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf 


## css dynamic inline styling

we can set dynamic inline styling as follows

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Vue Mastery</title>
  <!-- Import Styles -->
  <link rel="stylesheet" href="./assets/styles.css" />
  <!-- Import Vue.js -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
</head>
<body>
  <div id="app">
    <div class="nav-bar">
      <div class="nav-item">
        <a class="nav-item" :href="url">vue mastery</a>
      </div>
    </div>
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="imageUrl" />
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
        <p v-if="isInStock && inventory >= 10">In Stock</p>
        <p v-else-if="isInStock && inventory < 10 && inventory > 0">Low on stock</p>
        <p v-else>Out of Stock</p>
        <p v-if="isInStock && inventory > 0">{{inventory}} items</p>
        <ul>
          <li v-for="detail in details">{{detail}}</li>
          <li v-for="variant in variants" 
              :key="variant.variantId" 
              class="color-box" 
              :style="{ backgroundColor: variant.color } "
              @mouseover="alterImageColor(variant.url)" 
          >
            {{variant.color}}
          </li>
          <li>
            <span v-for="size in sizes">{{size}}</span>
          </li>
        </ul>
        
      </div>
      <div class="product-image">
        <img v-bind:src="imageUrl" />
      </div>
      <div class="product-info">
        <h1 v-show="showMe">{{ product }}</h1>
      </div>
    </div>
    <button class="button" v-on:click={{cart++}}>Increment Cart</button>
    <button class="button" v-on:click="addToCart">Add To Cart</button>
    <div class="cart">
      <p>Cart ({{cart}} items)</p>
    </div>
  </div>
  <script>
  var app = new Vue({
    el: '#app',
    data: {
      product: 'Socks',
      imageUrl: './assets/images/socks_green.jpg',
      url: 'https://www.vuemastery.com',
      isInStock:true,
      inventory: 5,
      showMe: true,
      details:['80% cotton', '20% polyester'],
      variants:[
        {variantId:2234, color:'green', url:'./assets/images/socks_green.jpg'},
        {variantId:2235, color:'blue' , url:'./assets/images/socks_blue.jpg'}
      ],
      sizes:["XS,","S,","M,","L,","XL"],
      cart: 0,
      color: "#109aeb"
    },
    methods: {
      addToCart() {
        this.cart++
      },
      alterImageColor(url){
        console.log(`new url is ${url}`)
        this.imageUrl = url
      }
    }
  })
  </script>
</body>
</html>
```

```css
.color-box{
  display: inline-block;
  padding: 1vh 1vw;
  margin-top:5px;
  color:white;
  text-align: center;
  background-color:#109aeb;
}
```

Note that when using inline css styles we can either use `camelCase` ie `fontSize` or `kebab-case` ie `'font-size'` which must be in quotes

```html
<p style="{fontSize : fontSize}">...</p>
<p style="{'font-size': fontSize}">...</p>
<script>
data:{
    fontSize:'13px'
}
</script>
```

We can also bind to multiple `css styles` at once using

```html
<p style="{styleObject, styleObject2}">...</p>
<script>
data:{
    styleObject: { color:red, fontSize:'13px' },
    styleObject2:{ fontWeight: bold }
}
</script>
```

so the object is both `red`, `13px` and also `bold`

## enabling and disabling features with `:disabled`

we can enable and disable features, for example buttons, depending on conditions

```html
<!DOCTYPE html>
<html lang="en">
<body>
  <div id="app">
    <button class="button" v-on:click="incrementStock">Increment Stock</button>
    <button class="button" v-on:click="decrementStock">Decrement Stock</button>
    <button class="button" v-on:click={{cart++}} :disabled="!inStock">Increment Cart</button>
    <button class="button" v-on:click={{cart--}} :disabled="!inStock">Decrement Cart</button>
    <button class="button" v-on:click="addToCart">Add To Cart</button>
    <div class="cart">
      <p>Cart ({{cart}} items)</p>
    </div>
    <div class="cart">
      <p>Stock ({{stock}} items)</p>
    </div>
  </div>
  <script>
  var app = new Vue({
    el: '#app',
    data: {
      stock: 5,
      inStock: false,
    },
    methods: {
      addToCart() {
        this.cart++
      },
      isInStock(){
        console.log(`is item in stock? ${this.stock>0}`)
        if (this.Stock>0){
          inStock = true;
        }
        return this.stock > 0
      },
      decrementStock(){
        console.log('decrementing stock')
        if(this.stock>0){
          this.stock--;          
        }
        if(this.stock<=0){
          this.inStock=false
        }
      },
      incrementStock(){
        console.log('incrementing stock')
        this.stock++;
        if(this.stock>0){
          this.inStock=true
        }
      }
    }
  })
  </script>
</body>
</html>
```

## conditional classes

We can see conditional classes at work here on the buttons below

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Vue Mastery</title>
  <link rel="stylesheet" href="./assets/styles.css" />
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
</head>
<body>
  <div id="app">
    <div class="nav-bar">
      <div class="nav-item">
        <a class="nav-item" :href="url">vue mastery</a>
      </div>
    </div>
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="imageUrl" />
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
        <p v-if="isInStock && stock >= 10">In Stock</p>
        <p v-else-if="isInStock && stock < 10 && stock > 0">Low on stock</p>
        <p v-else>Out of Stock</p>
        <p v-if="isInStock && stock > 0">{{stock}} items</p>
        <ul>
          <li v-for="detail in details">{{detail}}</li>
          <li v-for="variant in variants" 
              :key="variant.variantId" 
              class="color-box" 
              :style="{ backgroundColor: variant.color } "
              @mouseover="alterImageColor(variant.url)" 
          >
            {{variant.color}}
          </li>
          <li>
            <span v-for="size in sizes">{{size}}</span>
          </li>
        </ul>
      </div>
      <div class="product-image">
        <img v-bind:src="imageUrl" />
      </div>
      <div class="product-info">
        <h1 v-show="showMe">{{ product }}</h1>
      </div>
    </div>
    <button class="button" v-on:click="incrementStock">Increment Stock</button>
    <button class="button" :class="{disabledButton:stock<=0}" v-on:click="decrementStock">Decrement Stock</button>
    <button class="button" :class="{disabledButton:stock<=0}"  v-on:click={{cart++}} :disabled="!inStock">Increment Cart</button>
    <button class="button" :class="{disabledButton:cart<=0}" v-on:click={{cart--}} :disabled="cart<=0">Decrement Cart</button>
    <button class="button" :class="{disabledButton:stock<=0}" v-on:click="addToCart">Add To Cart</button>
    <div class="cart">
      <p>Cart ({{cart}} items)</p>
    </div>
    <div class="cart">
      <p>Stock ({{stock}} items)</p>
    </div>
  </div>
  <script>
  var app = new Vue({
    el: '#app',
    data: {
      product: 'Socks',
      imageUrl: './assets/images/socks_green.jpg',
      url: 'https://www.vuemastery.com',
      stock: 5,
      inStock: true,
      showMe: true,
      details:['80% cotton', '20% polyester'],
      variants:[
        {variantId:2234, color:'green', url:'./assets/images/socks_green.jpg'},
        {variantId:2235, color:'blue' , url:'./assets/images/socks_blue.jpg'}
      ],
      sizes:["XS,","S,","M,","L,","XL"],
      cart: 0,
      color: "#109aeb"
    },
    methods: {
      addToCart() {
        this.cart++
      },
      alterImageColor(url){
        console.log(`new url is ${url}`)
        this.imageUrl = url
      },
      isInStock(){
        console.log(`is item in stock? ${this.stock>0}`)
        if (this.Stock>0){
          inStock = true;
        }
        return this.stock > 0
      },
      decrementStock(){
        console.log('decrementing stock')
        if(this.stock>0){
          this.stock--;          
        }
        if(this.stock<=0){
          this.inStock=false
          console.log(`this.inStock=${this.inStock}`)
        }
      },
      incrementStock(){
        console.log('incrementing stock')
        this.stock++;
        if(this.stock>0){
          this.inStock=true
        }
      }
    }
  })
  </script>
</body>
</html>
```

## computed properties

we can also calculate properties live on the fly and display them.  The advantage of computed properties over methods is that the computed properties are cached and only run if their dependencies change, but methods are run afresh every time.  So for large items which don't change much, computed properties are definitely a more efficient way of displayng data.

for example we could replace

```html
<h1>{{brand}} {{ product }}</h1>
```
with

```html
<h1>{{title}}</h1>

<script>
computed:{
  title(){
    return this.brand + ' ' + this.product
  }
}
</script>
```

## components

components are modular blocks within our app which can be added or removed at will.

with data as a function we can have the same reusable template but each template returns different data depending on its place in the code

```js
options = {
  template:`
  <div>
    ....
  </div>`
},
data(){   return {  }    }
Vue.component('componentName',options)
```

### templates

templates can be created in a number of ways.  the first way to be aware of is using backtick `literals`

```js
template: `<div>this is a template</div>`
```



## props

props are used to pass data `into` components from above

```html
<componentName message="this is a message" />
```

passes props `message` into the component

```jsx
options = {
  props: [message],
  template: `<div>{{message}}</div>`,
  data(){   return {}  }
}
Vue.component(`componentName`, options)
```

props can be an array

```js
props : [prop1,prop2,prop3]
```

or an object

```js
let componentOptions = {
  props: {
    message: {
      type: String, 
      required: true, 
      default: 'default value of message'
    }
  },
  template: `<div><h1>Product Component</h1><p>{{message}}</p></div>`,
  data(){
    return { someData: 'some data'}
  }
}
Vue.component('product',componentOptions)
```

