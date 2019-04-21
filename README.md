# A place for learning VueJS

Here is a learning repository for learning basic VueJS.

## Contents

[Introduction To VueJS](#introduction-to-vuejs)

[Getting Started : Hello World VueJS](#hello-world)

[Getting Started : Simple VueJS Syntax Commands (v-if-else, v-bind, v-model, v-show,v-on:keyup,v-on:click)](#basic-vue-syntax)

[Slightly More Advanced Topics : Computed Properties, Watching, Dynamically Updating CSS, Enabling/Disabling screen items, Inline CSS, v-if/else, v-show](#vue-slightly-more-advanced-topics)

[Working With Forms](#working-with-forms)

[Vue Classes](#vue-classes)

[Vue Components](#vue-components)

[Working With Events In Vue](#working-with-events-in-vue)

[Vue Notes On The Vue Handbook by Flavio Copes](https://flaviocopes.com/tags/vue/)

[Vue Client]

[Vue Tutorial Walkthroughs](#vue-tutorial-walkthroughs)

[Vue In Visual Studio](vue-in-visual-studio)

[Vue Glossary](#vue-glossary)

## Introduction To VueJS

Vue creates components with HTML/CSS/Javascript.

Vue works with NativeScript - see https://www.npmjs.com/package/nativescript-vue-template

### Who to follow

Follow Gregg Pollack from vuemastery.com

Follow Evan You who was the creator of Vue.js

[Anthony Gore](https://twitter.com/@anthonygore) is a teacher of VueJS whose goal is to help you become an expert in VueJS.

### Resources

[Basic Documentation at VueJS.org](https://vuejs.org/v2/guide)

[Advanced Documentation at vuemastery.com](https://www.vuemastery.com)

[Vue CLI 3 at https://cli.vuejs.org/guide/](https://cli.vuejs.org/guide/)

### Vue Plugin For Sublime

Download [https://github.com/vuejs/vue-syntax-highlight](https://github.com/vuejs/vue-syntax-highlight) to your Sublime Text 3 Packages folder

## Angular vs React vs Vue

### Angular

Angular was created by Google and released in 2010

Angular original is called AngularJS

Angular2 was released in 2016

Angular 2+ is called Angular.

Angular 7 is the latest version as of October 2018.

### React

React is developed by Facebook and was released in 2013.

Facebook extensively uses React in Facebook, Instagram and WhatsApp.  It's used by Uber for example.

### Vue

Vue is created by ex-Google employee Evan You in 2014.

Vue has done incredibly given that it does not have the backing of a large company, but just one individual!!!!

Vue has current stable 

Vue has been chosen by Chinese giants AliBaba and Baidu as their framework of choice.

## Vue Versions

Vue is now in version 3 as of April 2019.

One significant change is in Vue CLI 3 which is used to generate and scaffold code quickly for a start-up project.

Plugins can be added at any point during the development lifecycle.

## Vue Library

We can access the Vue library either online via a CDN or offline

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.common.dev.js"></script>
<script src="assets/js/vue.js"></script>
```

## Vue In Visual Studio

https://docs.microsoft.com/en-us/visualstudio/javascript/quickstart-vuejs-with-nodejs?view=vs-2017

Requirements

1. Visual Studio with NodeJS binaries installed

2. NodeJS installed

New Project, Typescript, Basic VueJS Application




## Vue Hello World

We can create a `hello world` vue file inside a regular .html file

```html
<html>
    <head>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
        <div id="app">{{message}}</div>         
        <script>
            var app = new Vue({
                el:'#app',
                data:{
                    message:'hello world',
                }
            })
            console.log(app.message)
            </script>
    </body>
</html>
```

Notice that the app is rendering live and we can prove this by opening up the Chrome Dev Tools and choose the Console and change `app.message` to an alternative value



## Creating Single-File Vue App From Scratch 

Egghead-01

Firstly let's create a standard div

```html

<div id="card">
    <header>{{ title }}</header>
    <div>{{ content }}</content>    
</div>
```

Let's declare a Vue instance

```javascript
var card = new Vue({
    el:'card',
    data:{
        title:'Dinosaurs',
        content:'<strong>Dinosaurs</strong> appeared during the Triassic period'
    }
})
```

## Basic Vue Syntax

[v-html](#v-html)

[v-on:click](#v-on-click)

[v-model : Binding data fields](#v-model-binding-data-fields)

[v-if and v-else](#v-if-and-v-else)

[v-on:keyup](#v-onkeyup)

[Adding items to an array](#dynamically-adding-items-to-a-list)

[v-for loop using an index](#v-for-with-index)

[Remoing items from an array](#adding-a-delete-button)

[v-model : binding data on screen to fields in data](#v-model--binding-data-fields)

[Checking for values to be not null](#checking-a-value-is-not-null)

### v-html

To make the `html` display properly we can change the syntax to 

```html
<h2 v-html="content"</h2>
```

### Accessing vue elements

`app` element now contains the items

```javascript
app.title
app.content
````


### List items

Add an array to `data`

```javascript
dinosaurs:[{name:"raptor"},{name:"triceratops"}]
```

```html
<ul>
    <li v-for="dinosaur in dinosaurs">
        {{dinosaur.name}}
    </li>
</ul>
```

See [v-for-01.html](v-for-01.html) for a working example


### v-on:click

We can bind a button click to a method

```html
<button v-on:click="doThis">Click Here</button>
```

### v-on:keyup

v-on:keyup.enter="methodName"

We can call a method with the enter key as well as clicking on a button

```html
<form v-on:keyup.enter="methodName">
```



### Dynamically adding items to a list

```html
<button v-on:click="addItemToList">Add Item To List</button>
```

```html
<form v-on:keypress.enter="addItem">
    <input id="itemForm" />
    <button v-on:click="addItem">Add Dinosaur</button>
</form>
```

```javascript
addItem(){
  event.preventDefault()
  var input = document.getElementById('itemForm')
  if(input.value!==''){
    let dataItem = {
        value:input.value
    }
    this.dinosaurs.push({
        name:dataItem.value
    })
    //input.value=''
  }
}
```

### v-for with index

We can have two ways to call v-for

1) v-for="item in items"

2) v-for="(item,index) in items"

we can now pass the index through to use it



### Adding a delete button

Let's add a delete button by adding the index to the v-for

```html
<li v-for="(dinosaur,index in dinosaurs">
    <button v-on:click="deleteItem(index)">X</button>{{dinosaur.name}}
</li>
```

```javascript
deleteItem(index){
this.dinosaurs.splice(index,1)
}
```



### v-model : binding data fields

We can bind data fields using v-model

For example in our input form we can use

```html
<form v-on:keypress.enter="addItem">
    Name:<input v-model="dinosaurName" id="dinosaurName" />
    Weight:<input v-model="dinosaurWeight" type="number" id="dinosaurWeight"/> kg
    <button v-on:click="addItem">Add Dinosaur</button>
</form>
```

with each dinosaur displaying as a list item

```html
<ul>
    <li v-for="(dinosaur,index in dinosaurs">
        <button v-on:click="deleteItem(index)">X</button>
        <h4>{{dinosaur.name}}</h4>
        <p>The {{dinosaur.name}} weighs {{dinosaur.weight}} kg</p>
        <a href="">https://en.wikidpedia.org/wiki/{{dinosaur.name}}</a>
    </li>
</ul>
```

where our Vue data item can now hold

```javascript
dinosaurs:[{name:"raptor",weight:20},{name:"triceratops",weight:200}],
dinosaurName:'',
dinosaurWeight:'',
```

so we can now add an item using

```javascript
addItem(){
  event.preventDefault()
  let dinosaurName = document.getElementById('dinosaurName').value
  let dinosaurWeight = document.getElementById('dinosaurWeight').value
  if(dinosaurName !== ''){
    let newDinosaur = {
        name:dinosaurName,
        weight:dinosaurWeight
    }
    this.dinosaurs.push(newDinosaur)
    this.dinosaurName=''
    this.dinosaurWeight=''
  }
}
```


### Adding display filters

We can filter our lists and either display, hide or change the content.  

We do this by creating a `filters` block in our Vue instance and accessing the named filter as a | pipe after our display item on screen eg `<h4>{{dinosaur.name | capitalize}}</h4>`

For example we can ensure the first letter is capitalised

```javascript
filters:{
  capitalize(value){
    if(!value)return
    value=value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```
 
We can now apply the filter with 

```html
<li v-for="(dinosaur,index in dinosaurs">
    <button v-on:click="deleteItem(index)">X</button>
    <h4>{{dinosaur.name | capitalize}}</h4>
    <p>The {{dinosaur.name}} weighs {{dinosaur.weight}} kg</p>
    <a href="">https://en.wikidpedia.org/wiki/{{dinosaur.name}}</a>
</li>
```

Which will now capitalize the first letter of every heading


### Checking a value is not null

Just check for 

```javascript
if(!value){ 
    // value is blank
}
````

### filter | undercase

To create a filter for lower-case only we can do

```javascript
filter:{
    undercase(value){
        if(!value) return ''
        value = value.toString()
        return value.toLowerCase()
    }
}
```

so we can ensure the url is lower case

```html
<a href="">https://en.wikidpedia.org/wiki/{{dinosaur.name|undercase}}</a>
```



### piping filters

Filters can be combined, or piped, so the output of one is fed into the input of another

For example we can change the URL code to read, when we create a new filter

```javascript
filters:{
    url(value){
        if(!value) return ''
        value=value.toString()
        return "https://en.wikidpedia.org/wiki/" + value
    },
}
````

```html
<a href="">{{ dinosaur.name | undercase | url }}</a>
```

So now the title appears in Uppercase for first letter, and the URL appears in all lower case regardless of the input.

## Vue Slightly More Advanced Topics

[Computed Properties](#computed-properties)

[Watching](#watching)

[v-bind:class - Dynamically Updating CSS](#v-bindclass---dynamically-updating-css)

[Enabling/Disabling Screen Items](#enable-or-disable-an-item)

[Inline CSS](#setting-inline-css-styles)

[v-if/else](#v-if-and-v-else)

[v-show](#v-show)


## Computed Properties

These notes are taken from VueJS on Egghead Video 4 

We can compute properties from other properties

Let's create computed-properties-01

In our Vue instance create, alongside data and methods and filters, one called 'computed'

```javascript
data:{},
methods:{},
filters:{},
computed:{
    totalDinosaurs(){

    }
}
```

We can add in detail such as : 

```javascript
dinosaurs: [
    { name: "Raptor", weight: 20, quantity:1 },
    { name: "triceratops", weight: 200, quantity:2 }
],
```

So when we push a new dinosaur we can add the quantity

```javascript
if (dinosaurName !== "") {
  let newDinosaur = {
    name: dinosaurName,
    weight: dinosaurWeight,
    quantity:1,
  };
  this.dinosaurs.push(newDinosaur);
```

So we can add computed properties

```javascript
addQuantity(index){
this.dinosaurs[index].quantity++
},
removeQuantity(index){
this.dinosaurs[index].quantity--
},
```

And now build this into our HTML

```html
<ul>
<li v-for="(dinosaur,index in dinosaurs">
  <button v-on:click="deleteItem(index)">X</button>
  <h4>
      <button v-on:click="removeQuantity(index)">-</button>
      {{ dinosaur.quantity }}
      <button v-on:click="addQuantity(index)">+</button>
    {{ dinosaur.name | capitalize }}

  </h4>
  <p>The {{ dinosaur.name }} weighs {{ dinosaur.weight }} kg</p>
  <a href="">{{ dinosaur.name | undercase | url }}</a>
</li>
</ul>
```

See [computed-properties-01.html](computed-properties-01.html) for a working example


### Watching

We can add, alongside data: and methods: and other blocks, a new block called `watch`.

This can be aware of changing values on our page.

We must name our watched property to be the name of another data property or computed property etc which already exists.
    }
  }
},
computed:{
  totalDinosaurs(){
    return this.dinosaurs.length
  }
},
```

which can make our HTML appear or disappear

```html
<h3 id="populationWarning">Population Limit Exceeded!!!</h3>
```


### v-bind:class - Dynamically Updating CSS

With CSS we can apply or not apply CSS Styles using the following syntax

```vue
v-bind:class="{style:styleIsApplied}"
```

We can change multiple classes using this syntax

```html
<div v-bind:class="{ customStyle1:isStyle1Applied, customStyle2:isStyle2Applied}" 
```

or this syntax

```html
<button  class="styleMe" v-bind:class="[{large:isLarge},{rounded:isRounded}]" 
```

As an example, we can bind HTML form input data and use it to set CSS class styles where the custom styles are applied depending if the values are true or false.

Let's create a simple set of elements with styling data which can be input.

```html
<h1>{{title}}</h1>
<button class="styleMe" v-bind:class="{large:isLarge}">Style Me</button><br /><br />
<input v-model="fontColor" /><label> Font Color</label><br />
<input v-model="backgroundColor" /> Background Color<br />
<input type="checkbox" v-model="isLarge" /> Large <br />
<input type="checkbox" v-model="isRounded" /> Rounded <br />
<input type="checkbox" v-model="isDisabled" /> Disabled <br />
<input type="range" v-model="range" min="0" max="100" value="0"/><br />
```

We have used v-model to bind the values to items found in the data: object in our Vue instance

```javascript
data:{
    title:"Binding to HTML form data",
    fontColor:'#cccccc',
    backgroundColor:'#cccccc',
    isLarge:false,
    isDisabled:false,
    isRounded:false,
}
```

We have bound the class 'Large' to whether or not the 'isLarge' tick box is ticked or not

```css
<style>
.styleMe{
    width:10vw;
}
.large{
    width:20vw;
}
</style>
```

So the default width is 10% but when 'large' is ticked the width becomes 20% of the screen width.

See [html-form-01.html](html-form-01.html)

### Enable or disable an item

We can `v-bind:disabled` to an item

```html
<button 
    class="styleMe" 
    v-bind:disabled="isDisabled">Style Me
</button><br /><br />
<input type="checkbox" v-model="isDisabled" /> Disabled <br />
```


### Setting inline CSS Styles

To set inline styles we can use computed properties

```html
<button v-bind:style="computedStyle">
```

```javascript
computed:{
  computedStyle(){
    return{
      'margin-left':this.buttonMarginLeft + '%',
      background:this.backgroundColor,
      color:this.fontColor,
    }
  }
}
```

So for example this would work

```html
<button 
    class="styleMe" 
    v-bind:class="[{large:isLarge},{rounded:isRounded}]" 
    v-bind:style="styles"
    v-bind:disabled="isDisabled">Style Me
</button><br /><br />
<input v-model="fontColor" /><label> Font Color</label><br />
<input v-model="backgroundColor" /> Background Color<br />
<input type="checkbox" v-model="isLarge" /> Large <br />
<input type="checkbox" v-model="isRounded" /> Rounded <br />
<input type="checkbox" v-model="isDisabled" /> Disabled <br />
<input type="range" v-model="buttonMarginLeft" min="0" max="100" /><br />
```


```javascript
data:{
    title:"Binding to HTML form data",
    fontColor:'#cccccc',
    backgroundColor:'#cccccc',
    isLarge:false,
    isDisabled:false,
    isRounded:false,
    buttonMarginLeft:0,
},
computed:{
    styles(){
        return {
            'margin-left':this.buttonMarginLeft + '%',
             background:this.backgroundColor,
             color:this.fontColor,
        }
    }
},
```

Again see [html-form-01.html](html-form-01.html) for a working example of this

This finishes Egghead Vue video 6

### v-if and v-else

We can use if..else statements to render content

### v-if

We can for example conditionally display a list

```html
<ul v-if="dinosaurs.length>0">
```

### v-else

We can use v-else to instruct what to do if the previous v-if is false

```html
<h3 v-else>Please add a new dinosaur</h3>
```

See [v-if-else-01.html](v-if-else-01.html) for a working example


### v-show

V-show can display items on a page similar to `v-if` and `v-else`

```html
<div v-show="quantity<5">
```

We could show/hide buttons for example

```html
<ul v-if="dinosaurs.length>0">
    <h2>List of {{dinosaurs.length}} dinosaurs</h2>
    <li v-for="(dinosaur,index) in dinosaurs">
        <button v-show="dinosaur.quantity<=5" v-on:click="increaseQuantity(index)">+</button>
            {{dinosaur.quantity}}  
        <button v-show="dinosaur.quantity>1" v-on:click="decreaseQuantity(index)">-</button>
            {{dinosaur.name}}
        <button v-on:click="removeDinosaur(index)">X</button>
    </li>
</ul>
```

See [v-show-01.html](v-show-01.html) for a working example


## Working With Forms

[v-on:submit](#v-onsubmit)

[Vue With Checkboxes](#vue-with-checkboxes)

[Vue With Radio Buttons](#vue-with-radio-buttons)

[Vue With Drop-Down Boxes (HTML Select )](#vue-with-drop-down-boxes-html-select)

### v-on:submit

We can call a method on submitting a form

```html
<form v-on:submit="validateFields">
```

We can call event.PreventDefault() method using the following syntax

```html
<form v-on:submit.prevent="validateFields">
```


### Vue With Checkboxes

v-model:checked

We can create a binding for an input checkbox

```html
<div id="app">
    <input type="checkbox" id="checkbox" v-model="isChecked" />This checkbox is {{ isChecked ? 'checked' : 'unchecked' }}
    <div v-show="isChecked">Checked</div>
</div>
<script>
var app = new Vue({
    el:'#app',
    data:{
        isChecked:false,
    }
})    
</script>
```

see [checked-01.html](checked-01.html)

### Vue With Radio Buttons

We can bind the value of a radio button (which gets submitted in the form) with

```html
<input type="radio" v-bind:value="dinosaur.name" />
```

and also if we want to know which radio button has been clicked we can use v-model="selectedItem"

See full example at [radio-buttons-01.html](radio-buttons-01.html)

```html
<h3>Basic v-for list of dinosaurs</h3>
<ul>
    <li v-for="dinosaur in dinosaurs">{{dinosaur.name}}</li>
</ul>
<h3>Now creating the same list as radio buttons</h3>
<ul>
    <li v-for="dinosaur in dinosaurs">
        <input type="radio" v-bind:value="dinosaur.name" v-model="selectedDinosaur"/>{{dinosaur.name}}
    </li>
</ul>
<h5>Your selected dinosaur is {{selectedDinosaur}}</h5>
</div>
<script>
var app = new Vue({
el:'#app',
data:{
    title:"Working With Checkboxes In Vue",
    dinosaurs:[{name:'Velociraptor'},{name:'tyrannosaurus'}],
    selectedDinosaur:'',
}
})   
```



### Vue With Drop-Down Boxes (HTML Select)

We can also use multi-select checkboxes which are used on many standard forms

The HTML element is called `select` and each item is an `option`

Let's create a basic drop-down box

```html
<select>
    <option v-for="dinosaur in dinosaurs" v-bind:value="dinosaur.name">{{dinosaur.name}}</option>
</select>
```

In order to output which item has been selected we can use `v-model`

```html
<div id="app">
    <select v-model="selectedDinosaur">
        <option v-for="dinosaur in dinosaurs" v-bind:value="dinosaur.name">{{dinosaur.name}}</option>
    </select>
    <h4>Your selected dinosaur is {{selectedDinosaur}}</h4>
</div>
<script>
    var app = new Vue({
        el:'#app',
        data:{
            dinosaurs:[{name:"velociraptor"},{name:"stegasaursus"},{name:"triceratops"}],
            selectedDinosaur:'',
        }
    })
</script>
```

We can add multi-select by creating an array of `selectedDinosaurs`

```html
<div id="app">
    <h2>Selecting Multiple Dinosaurs</h2>
    <select v-model="selectedDinosaurs" multiple>
        <option v-for="dinosaur in dinosaurs" v-bind:value="dinosaur.name">{{dinosaur.name}}</option>
    </select>
    <h4>Your selected dinosaurs are {{selectedDinosaurs.toString()}}</h4>
</div>
<script>
    var app = new Vue({
        el:'#app',
        data:{
            dinosaurs:[{name:"velociraptor"},{name:"stegasaursus"},{name:"triceratops"}],
            selectedDinosaur:'',
            selectedDinosaurs:[],
        }
    })
</script>
```


See [select-box-01.html](select-box-01.html) for a working example





## Vue Components

Components are used to break bigger apps up. Can separate into .vue files if needed

[Creating A Component](#create-a-component)

[Using A Component](#using-a-component)

[Reusing Components](#reusing-components)

[Component Local And Global Data](#component-global-and-local-data)

[Using Components With The x-template syntax](#using-components-in-vue--using-the-x-template-syntax)

### Create a component

Vue.component(
  'my-component',
  {template:'This is my component text'}
)

We can also declare it as a literal object

```javascript
var component01 = {
    template:'<p>{{field01}}</p>',
    data:function(){
        return {
            field01:'some data'
        }
    }
}
```

### Using a component

We can now declare a parent Vue element and use this component

```vue
<div id="app">
  <my-component></my-component>
</div>
<script>
var app = new Vue({
  el:'#app'
})
</script>
```

See [component-01.html](component-01.html) as a worked example

And [component-02.html](component-02.html) also

### Reusing components

Components can be used multiple times

```html
<div id="app">
    {{globalData}}
    <my-component-01></my-component-01>
    <my-component-01></my-component-01>
</div>
```

### Component Global And Local Data

We can have data common across all components

```html
<div id="app">
  {{globalData}}
  <component01 />
  <component01 />
</div>
```

```javascript
new Vue({
  el:'#app',
  data(){
    return {
      globalData:"some global data"
    }
  }
})
Vue.component(
  'componenet01',
  template:'<p>{{localData}}</p>',
  data(){
    return {
      localData:'some local data'
    }
  }
)
```


### Using Components In Vue : Using the x-template syntax

We can also create components using the following

```html
<script type="text/x-template" id="component01">
    <div>
        <button v-on:click="quantity++">{{quantity}}</button>{{name}}
    </div>
</script>
```

and use them by creating a 'components' section inside our Vue instance

```vue
components:{
    'component01':{
        template:"#component01",
        props:["name","quantity"],
    }
},
```

`props` are the data items which will be fed into the component

Note that we can also add `methods` and even `data` although the `data` has to be returned as a function.

See [component-05.html](component-05.html) for a worked example of this.

### Talking to the parent from the child component

We can trigger an event in the child component and use it to call a method in the parent component.









<pre>













</pre>

## Vue Notes On The Vue Handbook by Flavio Copes

[The Vue Handbook By Flavio Copes](https://flaviocopes.com/tags/vue/)

These notes are on topics up until introducing the Vue client

### Introduction

Vue is small, fast and simple. 

The size of Vue is only 24kb.

It's an `indie` project not driven by an corporation

Vue is a `progressive framework` which means that it can happily coexist with other frameworks and can be added in via a simple script tag

React uses JSX

Vue uses a `templating` system

Vue can use any valid HTML file rather than the more complex JSX which React uses.

Vuex is the state management library which takes after Redux

vue-router handles routing

vuex handles state





<pre>







</pre>

## Vue Client

The Vue client is used to quickly scaffold different types of Vue projects from scratch.  The latest iteration is Vue Client version 3.

## Vue CLI 3

`vue-cli` startup preferences can be saved for future use, to easily build custom projects from a set template over and over again.  The file that is used here is in ~ /.vuerc

Vue CLI 3 also includes Webpack dev server with hot reloading!!!

## Creating a project

Create a new project with

```vue
vue create project-name
```
or

```vue
vue ui
```

### Running a project

Go into the folder created and run `npm run serve`

### Running a project with pnpm

You can also try installing and running a project with `pnpm`.

```vue
pnpm install cache-loader webpack vue-loader  url-loader  vue-style-loader postcss-loader css-loader 
pnpm run serve
```



### Vue Serve with Hot Reloading

Once vue serve has been installed, to run a single vue file just type

```vue
vue serve myfile.vue
```

You will find that once you go to http://localhost:8080 the file will show.  Also saving any changes to the file will instantly appear on the screen.

### Adding plugins

Plugins can be added to an existing project

```vue
vue add router
vue add vuex
vue add @vue/cli-plugin-eslint
vue add apollo
```

### Building for modern browsers

We can build for modern browsers using

```vue
vue-cli-service build --modern
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



## Vue Tutorial Walkthroughs

### [Vue Tutorial 1: Traversy Media : Vue in 60 minutes](#vue-tutorial-1-traversy-media--vue-in-60-minutes-1)

### [Vue Tutorial 2 : Connecting VUE to Firebase Database in 54 minutes](#vue-tutorial-2--connecting-vue-to-firebase-database-in-54-minutes-1)

## Vue Tutorial 1: Traversy Media : Vue in 60 minutes

[https://www.youtube.com/watch?v=z6hQqgvGI4Y](https://www.youtube.com/watch?v=z6hQqgvGI4Y) Installing VUE CDN NPM Vue-Cli Bower

## Building the Vue Lab

2.  Npm install -g vue-cli
3.  Vue init webpack vue-01
4.  Cd vue-01
5.  Npm install
6.  Npm run dev
7.  Note that to get our route '/' the default route we need to go to src/router/index.js file
8.  Later on at the end : npm install vue-resource --save (this enables database read)
9.  Data is read from [https://jsonplaceholder.typicode.com - this also has 'fetch' instructions](https://jsonplaceholder.typicode.com)
10.  Exact url is https://jsonplaceholder.typicode.com/users
11.  Adding in element for styling : npm install element-ui --save

## Vue Tutorial 2 : Connecting VUE to Firebase Database in 54 minutes

[https://www.youtube.com/watch?v=we4zuQIXmnw](https://www.youtube.com/watch?v=we4zuQIXmnw) [https://medium.com/codingthesmartway-com-blog/vue-js-2-firebase-e4b2479e35a8"](https://medium.com/codingthesmartway-com-blog/vue-js-2-firebase-e4b2479e35a8)

## Vue with Firebase

2.  Firebase.Google.com
3.  Databases : Real Time

5.  Npm install -g vue-cli
6.  Vue init webpack vue-01
7.  Cd vue-01
8.  Npm install
9.  Npm run dev






## Vue Tutorial 1: Traversy Media : Vue in 60 minutes

https://www.youtube.com/watch?v=z6hQqgvGI4Y



## Installing VUE
  

  CDN
  
  NPM
  
  Vue-Cli
  
  Bower

Building the Vue Lab

Npm install -g vue-cli

Vue init webpack vue-01

Cd vue-01

Npm install

Npm run dev

Note that to get our route '/' the default route we need to go to src/router/index.js file

Later on at the end : npm install vue-resource --save (this enables database read)

Data is read from https://jsonplaceholder.typicode.com - this also has 'fetch' instructions

Exact url is https://jsonplaceholder.typicode.com/users

Adding in element for styling : npm install element-ui --save


</pre>

## Hello World


npm i npm && vue init webpack hello-world && cd hello-world && npm install && npm run dev

npm i npm && vue init webpack hello-world-03 && cd hello-world-03 && npm install && npm run dev


```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://unpkg.com/vue@2.5.16/dist/vue.js"></script>
</head>
<body>
    <div id="app">
        hello
    </div>
</body>
<script>
    new Vue({
        el: "#app"
    })
</script>
</html>
```

### Hello World manually

```html
<script src="../assets/js/vue.js"></script>
<script src="https://unpkg.com/vue@2.5.16/dist/vue.js"></script>
```

## Methods

We can now also run a method

```html
<div id="app">
    <p>{{sayHello()}}
</div>
```

```js
new Vue({
    el: '#app',
    data:{
        data01: 'some text'
    },
    methods:{
        sayHello:function(){
            // returns a string
            return 'saying hello'.  
        }
    }
});
```

### Access other fields with `this`

We can access, say for example `data01` by the following code

```js
data:{
    data01: 'some text'
},
methods:{
    sayHello:function(){
        return this.data01
    }    
}
````

## {{ only work when we expect text to be present, not HTML attributes }}

## v-bind 

`v-bind` can be used to bind data to an html element attributes


## href

We can go to the href of a link by using the following

```html
<a v-bind:href="link">Click here</a>
```

```js
data:{
    link:'http://mysite.com'
}
````

## Directives : passing in attribute values

Directives are instructions placed in our code

`v-bind` is a directive

`v-bind:attriute="value"`


## Setting data values 

If we are in a method and wish to change the value of a data field we can do the following

```html
<p>{{DoThis()}}</p>
```

```js
data:{
    title:'some title'
},
methods:{
    DoThis:function(){
        this.title='and here is a new title'
        return this.title
    }
}
````









## Components

```html
<html>
    <head>
        <script src="https://unpkg.com/vue@2.5.16/dist/vue.js"></script>
    </head>
    <body>
        <div id="app">
            {{field}}
            <my-component></my-component>
            <my-component></my-component>
            
        </div>
    </body>
    <script>
    Vue.component('my-component',{
        template:'<p>hello from component</p>'
    })
    new Vue({
        el:'#app',
        data:function(){
            return{
                field:'hello world'
            }
        }
    })
    </script>
</html>

```


```html
<html>
    <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.js"></script>
    </head>
    <body>
        <div id="app">
            {{field01}}
            <component-01></component-01>
        </div>
    </body>
    <script>
    Vue.component('component-01',{
        template:'<p>from component</p>'
    })
    new Vue({
        el:'#app',
        data:function(){
            return{
                field01:'some data here from data function'
            }
        }
    })
    </script>
</html>

```


```html
<html>
    <head>
        <script src="https://unpkg.com/vue@2.5.16/dist/vue.js"></script>
    </head>
    <body>
        <div id="app">
            {{globalData}}
            <my-component-01></my-component-01>
            <my-component-01></my-component-01>
        </div>
        <div id="app2">
            <my-component-01></my-component-01>
        </div>
    </body>
    <script>
    Vue.component('my-component-01',{
        template:'<p><br />hello<br />{{field01}}<br />{{field02}}<button @click="changeMe">ChangeMe</button></p>',
        data:function(){
            return {
                field02: 'some more data here',
                field01: 'some data here'
            }
        },
        methods:{
            changeMe:function(){
                this.field01='Data has now been changed'
            }
        }
    })
    new Vue({
        el:'#app',
        data:function(){
            return {
                globalData:'this is common to all instances'
            }
        }
    })

    new Vue({
        el:'#app2'
    })
    </script>
</html>
```



```html
<html>
    <head>
        <script src="https://unpkg.com/vue@2.5.16/dist/vue.js"></script>
    </head>
    <body>
        <div id="app">
            <hr />
            App
            <component01></component01>
        </div>
        <div id="app2">
            <hr />
            App2
            <component01></component01>
        </div>
    </body>
    <script>
    // create component as variable
    var component01 = {
        template:'<p>{{field01}}</p>',
        data:function(){
            return {
                field01:'some data'
            }
        }
    }

    new Vue({
        el:'#app',
        components:{component01}
    })

    new Vue({
        el:'#app2',
        components:{
            'component01': component01
        }
    })
    </script>
</html>
```

## Analysing a Vue app

index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>component-05-sub</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="/dist/build.js"></script>
  </body>
</html>
```

main.js

```js
import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

Vue.component('component-home',Home)

new Vue({
  el: '#app',
  render: h => h(App),
})

```

App.vue page linking to a Home component


```html
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <component-home></component-home>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
```



Home.vue

```html
<template>
    <div>
        Home Component
        <p>{{field01}}</p>
    </div>
</template>
<script>
export default {
    data: function(){
        return{
            field01:'test data'
        }
    }
}
</script>
```




## Routing

To introduce routing check out Router-01

main.js

```js
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
Vue.use(VueRouter)
Vue.use(BootstrapVue)



Vue.component('header-component',Header)
Vue.component('footer-component',Footer)
Vue.component('page1-component',Page1)
Vue.component('page2-component',Page2)

const router = new VueRouter({
  routes,
  mode : 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
```

and routes.js

```js
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'

export const routes = [

    {
        path:'',
        component:null
    },
    {
        path:'/page1',
        component:Page1
    },
    {
        path:'/page2',
        component:Page2
    }
]
```




with main component App.vue

```html
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <header-component></header-component>
       <h1> <router-view /> </h1>
    <footer-component></footer-component>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
```


from which we can add 4 pages

Header.vue

```html
<template>
    <div>
        <h2>Header</h2>
        <a href="">Home</a> | <a href="/page1">Page1</a> | <a href="/page2">Page2</a>
    </div>
</template>

```

Footer.vue

```html
<template>
    <div>
        Footer
    </div>
</template>

```

Page1.vue

```html
<template>
    <div>
        Page1
    </div>
</template>

```

Page2.vue

```html
<template>
    <div>
        Page2
    </div>
</template>

```






## Vue basic code snippets

These are code snippets from my built code

vue-01\src\main.js

There are 2 vue files - App.vue and Phil.vue and these are both being imported here as well as the router


```vue
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Phil from './Phil'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, Phil },
  template: '<App/>'
})
```

vue-01\src\router\index.js



```vue
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: test
    }, {
    path: '/helloworld',
    name:'helloworld',
    component: HelloWorld
    }
  ]
})
```

which refers to 2 components


















## Vue Client

Version 1 and 2 were installed with 

```vue
npm install -g vue-cli
```

Version 3 is installed with

```vue
npm install -g @vue/cli
```

Type `vue` to check you have this installed

```vue
vue --version
```

The version should show version 3 or above


## Vue Serve

We can build single Vue files using `vue serve` and `vue build` commands

```bash
npm install -g @vue/cli-service-global
```

We then create a single `App.vue` file

```vue
<template>
<h1>Hello</h1>
</template>
```

and run it with

```bash
vue serve
```

which will run the following files : `main.js`, `index.js`, `App.vue`,`app.vue`

or specify a name

```bash
vue serve myFile.vue
```

you can also build the component and not run it 

```bash
vue build myFile.vue
```


This can run instant files

## Building projects

```bash
vue create hello-world
```

Yarn can be used instead of npm to install packages

## Saved preferences

Saved preferences will be saved in the ~/.vuerc file


## vue ui

Projects can be creates with a GUI














## Vue Tutorial : Connecting VUE to Firebase Database in 54 minutes


https://www.youtube.com/watch?v=we4zuQIXmnw

https://medium.com/codingthesmartway-com-blog/vue-js-2-firebase-e4b2479e35a8"

Vue with Firebase
    
Firebase.Google.com

Databases : Real Time

    

    
Npm install -g vue-cli

    
Vue init webpack vue-01

    
Cd vue-01

    
Npm install

    
Npm run dev


Applying CSS Classes to VUE

<div v-bind:class="{active:isActive}"></div>
<div v-bind:style="{color:activeColor}"></div>
Vue file
data{
	isActive:true,
	activeColor:'red'
}
Vue Components

Components are used to break bigger apps up. 
Can separate into .vue files if needed

    
Create a component
    
Vue.component('my-component',{template:'This is my component text'})


	

    

    
<div id="app"><my-component></my-component></div>
	




## Vue Backends

https://medium.com/js-dojo/7-vue-js-backends-compared-74812da014f4









</pre>

# Laravel

<pre>
    
Laravel Tutorial 1: Traversy Media : Laravel 5.5 API From Scratch - 45 minutes

    https://www.youtube.com/watch?v=4pc6cgisbKE
    
Note : the following lab has been worked through on a MAC so the Windows process should be similar but not exactly the same so please be aware

    
Composer is a PHP dependency engine

    
GetComposer.org/download and copy PHP and install it

    
On Getting Started page, mkdir -p /usr/local/bin

    
Then mv composer.phar /usr/local/bin/composer

    
If this has worked then in terminal can just run the command 'composer' to activate the composer window

    
Now come back to Laravel website : Laravel.com

    
Download laravel installer : composer global require "laravel/installer" : when this runs it will install developer command line tools from the store

    
Install XAMPP

    
Generate a root XAMPP folder and test

    
Navigate to your root web folder

    
Create a new project with composer create-project --prefer-dist laravel/laravel larticles

    
Navigate to the larticles folder 

    
Run sudo chmod -R 777 storage to grant permissions on the storage folder

    
Go to localhost/larticles/public on your web browser and you should see Laravel web site running

    
Use these instructions 

    
https://jonathannicol.com/blog/2012/03/11/configuring-virtualhosts-in-xampp-on-mac/

    
Create a virtual directory in xamppfiles\apache2\conf\httpd.conf

    
Only keep 2 lines

    
Edit hosts file by using sudo nano /etc/hosts

    
Create new database in PHPMyAdmin larticles

    
From our larticles folder run  php artisan make:migraion create_articles_table --create=articles which will appear in database/migrations folder

    
From terminal type php artisan make:seeder ArticlesTableSeeder

    
Find the file and edit the run function

    
Also edit the DatabaseSeeder.php file

    
Generate a factory with php artisan make:factory ArticleFactory

    
Edit the Factory\ArticleFactory file

    
Create model with php artisan make:model Article  (permissions worked with user root and no password)

    
Add seed data with php artisan db:seed

    
Check database now which should be filled with data

    
Create controller and routes now

    
php artisan make:controller ArticleController --resource  and check created OK in app\http\controllers folder

    
Next configure routes in routes\api.php

    
Now create resources php artisan make:resource Article which creates, inside http folder a Resources folder then an Article.php file which returns an array

    
Go to Controllers\ArticleController.php and find the index() function

    
Can now test http://larticles.test/api/articles which should return data

    
Can now customise the fields which are returned by editing the Article.php file and editing the return statement

    
Next look at ArticleController.php show() method which will return only one record based on id

    
If this works then request to article/3 will return one record

    
Note that jsonapi.org we can see standards for JSON api responses

    
On Medium we can create own Laravel 5.5 api

    
Next move on with Api and in the ArticleController edit the store() method for updating

    
And finally the delete also

    
Now test out the API

    
Delete with article/3

    
Post to add a new article : Headers add Content-Type  as application/json  and body add raw json { "title":"test title","body":"test body"} and send to create a new record




</pre>

## Laravel Tutorial 2 : Traversy Media : Full Stack Vue.js & Laravel - 42 minutes

https://www.youtube.com/watch?v=DJ6PD_jBtU0&t=1899s

    
Picking up from Video 1 which completed the API : we are now building VUE front end for this website

    
Firstly check package.json Vue.js dependency

    
Installing Node on a MAC

    
Firstly need XCode

    
While XCODE was downloading which will take several hours I just downloaded Node and installed it directly

    
Checking Make sure that /usr/local/bin is in your $PATH - how do I do that?  echo $PATH will show this

    
node -v and npm -v will now check node and npm are installed ok

    
go to the larticles root and run npm install to install packages for your Vue app

    
now run npm run watch to watch for any changes to our files

    
Now go resources/assets/js to find app.js VUE application

    
Change the landing page at views/welcomeblade.php and when done, refreshing larticles.test will show just Articles

    
Now change the code to stop the CSRF error

    
GetBootstrap.com and get CSS and Javascript

    
Create a NAVBAR component

    
Put the NAVBAR in the BLADE

    
Register the NAVBAR as a COMPONENT in APP.JS

    
Edit the number of articles returned to 5 in http.controllers.articlecontroller

    
Change the order to orderBy('created_at','desc')

    



### Vue Random

https://vueschool.io/

## Vue Glossary

### pnpm

Saves only one copy of a needed library

Install it via npm 

```bash
npm install -g pnpm
```

Once installed, update via pnpm

```bash
pnpm install -g pnpm
```

Now use pnpm in place of npm

There is also a pnpx client which we call a 'package runner' 

For example

```bash
pnpx create-react-app my-cool-new-app
``` 