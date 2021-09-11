# A place for learning VueJS

Here is a learning repository for learning VueJS.

## Contents

- [A place for learning VueJS](#a-place-for-learning-vuejs)
  - [Contents](#contents)
  - [Standalone VueJS files](#standalone-vuejs-files)
  - [VueJS Projects](#vuejs-projects)
  - [VueJS Lifecycle Hooks](#vuejs-lifecycle-hooks)
  - [fetch](#fetch)
- [VueJS](#vuejs)
  - [Vue Summary](#vue-summary)
  - [Update 25 October 2019](#update-25-october-2019)
  - [Resources](#resources)
    - [The Vue Handbook by Flavio Copes](#the-vue-handbook-by-flavio-copes)
    - [Community](#community)
  - [Introduction To VueJS](#introduction-to-vuejs)
    - [Who to follow](#who-to-follow)
    - [Resources](#resources-1)
  - [Angular vs React vs Vue](#angular-vs-react-vs-vue)
    - [Angular](#angular)
    - [React](#react)
    - [Vue](#vue)
  - [Vue Versions](#vue-versions)
  - [Vue Library](#vue-library)
  - [Vue Hello World](#vue-hello-world)
- [Hello World With @vue/cli](#hello-world-with-vuecli)
  - [Creating Single-File Vue App From Scratch](#creating-single-file-vue-app-from-scratch)
- [Vue Commands](#vue-commands)
- [Vue Dev Tools](#vue-dev-tools)
- [Summary Of Basic Commands And Syntax](#summary-of-basic-commands-and-syntax)
- [Components](#components)
- [Directive](#directive)
- [Events](#events)
- [Data](#data)
- [Watcher](#watcher)
- [Computed](#computed)
- [Methods](#methods)
- [Props](#props)
- [Types](#types)
- [Component](#component)
- [Filter](#filter)
- [BeforeCreate](#beforecreate)
- [$ indicates a global variable](#-indicates-a-global-variable)
- [Components](#components-1)
- [Dynamic Attributes](#dynamic-attributes)
  - [rendering data with expression syntax {{ ... }}](#rendering-data-with-expression-syntax---)
  - [v-if, v-else-if, v-else](#v-if-v-else-if-v-else)
  - [v-bind](#v-bind)
  - [v-show](#v-show)
  - [v-for](#v-for)
  - [events](#events-1)
  - [dynamic css](#dynamic-css)
  - [enabling and disabling features eg buttons](#enabling-and-disabling-features-eg-buttons)
- [older notes below ....](#older-notes-below-)
- [Props](#props-1)
- [Refs](#refs)
- [Vuetify](#vuetify)
  - [Basic Vue Syntax](#basic-vue-syntax)
    - [v-html](#v-html)
    - [Accessing vue elements](#accessing-vue-elements)
    - [List items](#list-items)
    - [v-on:click](#v-onclick)
    - [v-on:keyup](#v-onkeyup)
    - [Dynamically adding items to a list](#dynamically-adding-items-to-a-list)
    - [v-for with index](#v-for-with-index)
    - [Adding a delete button](#adding-a-delete-button)
    - [v-model : binding data fields](#v-model--binding-data-fields)
    - [Adding display filters](#adding-display-filters)
    - [Checking a value is not null](#checking-a-value-is-not-null)
    - [filter | undercase](#filter--undercase)
    - [piping filters](#piping-filters)
  - [Vue Slightly More Advanced Topics](#vue-slightly-more-advanced-topics)
    - [Computed Properties](#computed-properties)
    - [Watching](#watching)
    - [v-bind:class - Dynamically Updating CSS](#v-bindclass---dynamically-updating-css)
    - [Enable or disable an item](#enable-or-disable-an-item)
    - [Setting inline CSS Styles](#setting-inline-css-styles)
    - [v-if and v-else](#v-if-and-v-else)
    - [v-if](#v-if)
    - [v-else](#v-else)
    - [v-show](#v-show-1)
  - [Working With Forms](#working-with-forms)
    - [v-on:submit](#v-onsubmit)
    - [Vue With Checkboxes](#vue-with-checkboxes)
    - [Vue With Radio Buttons](#vue-with-radio-buttons)
    - [Vue With Drop-Down Boxes (HTML Select)](#vue-with-drop-down-boxes-html-select)
  - [Vue Components](#vue-components)
    - [Create a component](#create-a-component)
    - [Using a component](#using-a-component)
    - [Reusing components](#reusing-components)
    - [Component Global And Local Data](#component-global-and-local-data)
    - [Using Components In Vue : Using the x-template syntax](#using-components-in-vue--using-the-x-template-syntax)
    - [Talking to the parent from the child component](#talking-to-the-parent-from-the-child-component)
    - [Adding multiple components with the x-template syntax](#adding-multiple-components-with-the-x-template-syntax)
  - [Toggling Between Templates](#toggling-between-templates)
  - [Vue Client - 3](#vue-client---3)
  - [Vue CLI 3](#vue-cli-3)
  - [Creating a project](#creating-a-project)
    - [Running a project](#running-a-project)
    - [Running a project with pnpm](#running-a-project-with-pnpm)
    - [Vue Serve with Hot Reloading](#vue-serve-with-hot-reloading)
    - [Adding plugins](#adding-plugins)
    - [Building for modern browsers](#building-for-modern-browsers)
    - [API keys](#api-keys)
- [Vue Tutorial Walkthroughs](#vue-tutorial-walkthroughs)
  - [Vue Tutorial 1: Traversy Media : Vue in 60 minutes](#vue-tutorial-1-traversy-media--vue-in-60-minutes)
  - [Installing VUE](#installing-vue)
  - [Hello World](#hello-world)
    - [Hello World manually](#hello-world-manually)
  - [Methods](#methods-1)
    - [Access other fields with `this`](#access-other-fields-with-this)
  - [{{ only work when we expect text to be present, not HTML attributes }}](#-only-work-when-we-expect-text-to-be-present-not-html-attributes-)
  - [v-bind](#v-bind-1)
  - [href](#href)
  - [Directives : passing in attribute values](#directives--passing-in-attribute-values)
  - [Setting data values](#setting-data-values)
  - [Components](#components-2)
  - [Analysing a Vue app](#analysing-a-vue-app)
  - [Routing](#routing)
  - [Vue basic code snippets](#vue-basic-code-snippets)
  - [Vue Client 3](#vue-client-3)
  - [Vue Serve](#vue-serve)
  - [Building projects](#building-projects)
  - [Saved preferences](#saved-preferences)
  - [vue ui](#vue-ui)
  - [Applying CSS Classes to VUE](#applying-css-classes-to-vue)
  - [Vue Tutorial 2 : Connecting VUE to Firebase Database in 54 minutes](#vue-tutorial-2--connecting-vue-to-firebase-database-in-54-minutes)
  - [Vue Backends](#vue-backends)
  - [Vue Tutorial 2 : Connecting VUE to Firebase Database in 54 minutes](#vue-tutorial-2--connecting-vue-to-firebase-database-in-54-minutes-1)
- [Vue with Firebase](#vue-with-firebase)
    - [Create Login view](#create-login-view)
    - [Routes with src/router.js](#routes-with-srcrouterjs)
- [Rework From Scratch Of Vue Firebase App](#rework-from-scratch-of-vue-firebase-app)
- [Add Views To Provide Navigation](#add-views-to-provide-navigation)
- [Add Bootstrap](#add-bootstrap)
- [Vue Components And Props](#vue-components-and-props)
- [Components With Props](#components-with-props)
  - [Axios](#axios)
- [Axios Getting API Data](#axios-getting-api-data)
- [Vue With Firebase: 2019-09](#vue-with-firebase-2019-09)
- [Vue With Firebase 2](#vue-with-firebase-2)
- [](#)
- [To Do Vue App](#to-do-vue-app)
- [Vuex Global Storage](#vuex-global-storage)
- [Vue With PHP : Laravel](#vue-with-php--laravel)
  - [Vue With PHP : Laravel : Tutorial 1:](#vue-with-php--laravel--tutorial-1)
    - [Traversy Media : Laravel 5.5 API From Scratch - 45 minutes](#traversy-media--laravel-55-api-from-scratch---45-minutes)
  - [Laravel Tutorial 2 : Traversy Media : Full Stack Vue.js & Laravel - 42 minutes](#laravel-tutorial-2--traversy-media--full-stack-vuejs--laravel---42-minutes)
  - [Vue Glossary](#vue-glossary)
    - [GridSome - Vue and CSS Grid out of the box](#gridsome---vue-and-css-grid-out-of-the-box)
    - [pnpm](#pnpm)
- [Vue With Authentication](#vue-with-authentication)
    - [# vue-authentication-okta-02](#-vue-authentication-okta-02)
    - [Add Okta code](#add-okta-code)
  - [Events](#events-2)
    - [Form @submit.prevent](#form-submitprevent)
  - [MEVN Stack Development](#mevn-stack-development)
  - [VUE Mastery Course - Introduction To Vue 3](#vue-mastery-course---introduction-to-vue-3)

## [Standalone VueJS files](single-files)

These standalone VueJS files are good for learning individual components of Vue because the file stands alone and there are no complex dependencies to inject into the project.  Good for learning.

## [VueJS Projects](projects)

These are built using the @vue/cli command line interface, and each one is a fully-fledged Vue project

## VueJS Lifecycle Hooks

[lifecycle hooks](notes/README.md)

## fetch

[fetch](notes/fetch.md)

# VueJS

## Vue Summary

```jsx
v-on:click="doThis"    event
v-bind:href="myUrl"   attribute
v-model="dataItem01" 2-way binding

Methods : executed every time DOM is repainted
Computed Properties : values cached and only updated when have to
Watch : asynchronous tasks : execute on return

Shortcuts
	@ = v-on:
	:href = v-bind:href
  :style = v-bind:style
```

## Update 25 October 2019

Plan is to have all Standalone Projects in separate folder.

Also to have one main ‘Vue’ app which can be deployed online.

Thirdly we can have a PUBLIC folder in which to place all of the static HTML files and to reference them directly.

To do : Build the vue-cli-3 app and have it running online with netlify; then build on this!

## Resources

[Extra notes (decrement these)](notes/extra-vue-notes.md)

### The Vue Handbook by Flavio Copes

[The Vue Handbook By Flavio Copes](https://flaviocopes.com/tags/vue/)

### Community

[Vue Forum](https://forum.vuejs.org/)

## Introduction To VueJS

Vue creates components with HTML/CSS/Javascript.

Vue works with NativeScript - see https://www.npmjs.com/package/nativescript-vue-template

Vue is small, fast and simple.

The size of Vue is only 24kb.

It’s an `indie` project not driven by an corporation

Vue is a `progressive framework` which means that it can happily coexist with other frameworks and can be added in via a simple script tag

React uses JSX

Vue uses a `templating` system

Vue can use any valid HTML file rather than the more complex JSX which React uses.

Vuex is the state management library which takes after Redux

vue-router handles routing

vuex handles state

### Who to follow

Follow Gregg Pollack from vuemastery.com

Follow Evan You who was the creator of Vue.js

[Anthony Gore](https://twitter.com/@anthonygore) is a teacher of VueJS whose goal is to help you become an expert in VueJS.

### Resources

[Basic Documentation at VueJS.org](https://vuejs.org/v2/guide)

[Advanced Documentation at vuemastery.com](https://www.vuemastery.com/)

[Vue CLI 3 at https://cli.vuejs.org/guide/](https://cli.vuejs.org/guide/)

[Vue School](https://vueschool.io/)

## Angular vs React vs Vue

### Angular

Angular was created by Google and released in 2010

Angular original is called AngularJS

Angular2 was released in 2016

Angular 2+ is called Angular.

Angular 7 is the latest version as of October 2018.

### React

React is developed by Facebook and was released in 2013.

Facebook extensively uses React in Facebook, Instagram and WhatsApp. It’s used by Uber for example.

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

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.common.dev.js"></script>
<script src="assets/js/vue.js"></script>
```


## Vue Hello World

[vue hello world](notes/vue-mastery-introduction-to-vue-3.md)



# Hello World With @vue/cli

```bash
# install
yarn global add @vue/cli
# update
yarn global upgrade --latest @vue/cli
# create
vue create test-deploy-to-netlify-01
# navigate
cd test-deploy-to-netlify-01
# run
yarn serve
# deploy - push to GitHub
# deploy - connect Netlify to GitHub repo
# deploy - Netlify build command is `yarn run build` 
# deploy - Netlify publish directory is `dist`
```

## Creating Single-File Vue App From Scratch

Egghead-01

Firstly let’s create a standard div

```
<div id="card"><header>{{ title }}</header><div>{{ content }}</content></div>
```

Let’s declare a Vue instance

```
var card = new Vue({el:'card',data:{title:'Dinosaurs',content:'<strong>Dinosaurs</strong> appeared during the Triassic period'}})
```

# Vue Commands

```bash
# Access Babel Config
vue inspect

Vue prototype
```

# Vue Dev Tools

vue dev tools are available as a Chrome extension and be sure, in the settings, to also allow access to file URLs

# Summary Of Basic Commands And Syntax

# Components
Single File

```
new Vue() if part of other application in another framework

Vue.component() if part of another application in another framework
```

# Directive

v-text
v-once
v-html
v-bind:attribute="value" HTML attributes
:attribute="value"
v-model	2-way binding
v-for="item in items" {{item}}
v-on:click="doThis"
@click="doThis"
v-in:click="DoThis('data')"
v-show="isVisible">Show This
v-on:submit	Form tag
v-on:submit.prevent

# Events

@click="doThis($event)" .. function(event)...
@click="doThis('field',$event" .. function(data,$event)

# Data

export default{ data(){ field:'value'} } accessed via this.field

# Watcher

data(){field:'value'},watch:{field:function(){//do this on change}}
data(){field:'value'},watch:{field:function(new,old){ }}

# Computed

Used to display complex calculations to the user as a {{field}}
Computed properties are rendered once cached and not re-calculated

# Methods

Re-calculated on re-render

Method vs Watch vs Computed
Methods react to EVENTS eg CLICK
Computed creates a data source
Watch a data value change

# Props

Pass state parent to child
export default{props:['first','second']}
export default{props:{first:String,second:{type:String,required:true,default:'abc'}}

# Types

String,Number, Boolean,Array,Object,Date,Function,Symbol

# Component

ComponentName field='value'
ComponentName :field=dataItem (dataItem held in data{})

# Filter

{{name|filter01}}
filters:{filter01:function(name){return name?name:'there'}} will return 'there' if 'name' is null

# BeforeCreate

Can action something before your app is created

```jsx
new Vue({
  beforeCreate:function(){
    console.log('about to make this Vue app');
  },
  router,
  data() {
    return {
      IncomingData: 'some data right here'
    }
  },
  render: h => h(App)
}).$mount("#app");
```

# $ indicates a global variable

# Components

```jsx
Components : re-usable blocks of code
	
	<component-content></component-content>
	
	Vue.component('component-content',{
		data: function(){  return { data01:'x' }  },
		template: '<div>{{x}}</div>
	});
```

# Dynamic Attributes

We can see that the `src` attribute reads from the `data` structure using `:src=product.src`

```jsx
<template>
  <div>
    <h1>Phil's Shop</h1>
    <div v-if="!paidFor">
      <p>Item for sale</p>
      <p>Price is £ {{product.price}}</p>
      <p>{{product.description}}</p>
      <img width="200" :src="product.src" />
    </div>
    <div ref="paypal"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      loaded: false,
      paidFor: false,
      product: {
        price: 200,
        description: "a product",
        src: "https://picsum.photos/400/300?random=1"
      }
    };
  }
};
</script>

```

## rendering data with expression syntax {{ ... }}

[rendering data with `expression syntax` {{ ... }}](notes/vue-mastery-introduction-to-vue-3.md#rendering-data-with-expression-syntax---)

## v-if, v-else-if, v-else

[conditional rendering with `v-if`, `v-else-if` and `v-else`](notes/vue-mastery-introduction-to-vue-3.md#conditional-rendering-with-v-if-v-else-if-and-v-else)

## v-bind

[binding data with `v-bind`](notes/vue-mastery-introduction-to-vue-3.md#binding-data-with-v-bind)

Notice that the app is rendering live and we can prove this by opening up the Chrome Dev Tools and choose the Console and change `app.message` to an alternative value

## v-show

[hiding elements with `v-show`](notes/vue-mastery-introduction-to-vue-3.md#hiding-elements-with-v-show)

## v-for

[displaying lists with `v-for`](notes/vue-mastery-introduction-to-vue-3.md#displaying-lists-with-v-for)


## events 

[events with `@mouseover`](notes/vue-mastery-introduction-to-vue-3.md#events-with-mouseover)
[other events](notes/vue-mastery-introduction-to-vue-3.md#other-events)

## dynamic css

[css dynamic inline styling](notes/vue-mastery-introduction-to-vue-3.md#css-dynamic-inline-styling)

## enabling and disabling features eg buttons

[enabling and disabling features with `:disabled`](notes/vue-mastery-introduction-to-vue-3.md#enabling-and-disabling-features-with-disabled)













# older notes below ....

# Props

Props cannot have `numbers` in the name ie ThisProp is good but ThisProp01 is not valid

# Refs

Refs allow us to `name` a component so that we can reference it

```jsx
<input ref="myRef" />

this.$refs["myRef"].focus();
this.$refs.myRef 
this.$refs.myRef.value
this.$refs.myRef.baseURI

In an array, for example
<ul v-for="item in collection" :key="index" ref="listofitems">
  <li>{{item}}</li>
</ul>

console.log(this.$refs)  produces an array with index 0,1,2 etc

```



# Vuetify

Vuetify adds Google Material Design to the Vue website

```jsx
vue create myapp
cd myapp
vue add vuetify

<template>
  <v-app>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title class="pb-0">
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field 
            label="Username" 
            prepend-icon="mdi-account-circle"
          />
          <v-text-field 
            :type="showPassword ? 'text' : 'password'" 
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success">Register</v-btn>
        <v-btn color="info">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      showPassword: false
    }
  }
}
</script>
```

## Basic Vue Syntax

[v-html](about:blank#v-html)

[v-on:click](about:blank#v-on-click)

[v-model : Binding data fields](about:blank#v-model-binding-data-fields)

[v-if and v-else](about:blank#v-if-and-v-else)

[v-on:keyup](about:blank#v-onkeyup)

[Adding items to an array](about:blank#dynamically-adding-items-to-a-list)

[v-for loop using an index](about:blank#v-for-with-index)

[Remoing items from an array](about:blank#adding-a-delete-button)

[v-model : binding data on screen to fields in data](about:blank#v-model--binding-data-fields)

[Checking for values to be not null](about:blank#checking-a-value-is-not-null)

### v-html

To make the `html` display properly we can change the syntax to

```
<h2 v-html="content"</h2>
```

### Accessing vue elements

`app` element now contains the items

```
app.titleapp.content
```

### List items

Add an array to `data`

```
dinosaurs:[{name:"raptor"},{name:"triceratops"}]
```

```
<ul><li v-for="dinosaur in dinosaurs">{{dinosaur.name}}</li></ul>
```

See [v-for-01.html](v-for-01.html) for a working example

### v-on:click

We can bind a button click to a method

```
<button v-on:click="doThis">Click Here</button>
```

### v-on:keyup

v-on:keyup.enter=“methodName”

We can call a method with the enter key as well as clicking on a button

```
<form v-on:keyup.enter="methodName">
```

### Dynamically adding items to a list

```
<button v-on:click="addItemToList">Add Item To List</button>
```

```
<form v-on:keypress.enter="addItem"><input id="itemForm" /><button v-on:click="addItem">Add Dinosaur</button></form>
```

```
addItem(){event.preventDefault()var input = document.getElementById('itemForm')if(input.value!==''){let dataItem = {value:input.value}this.dinosaurs.push({name:dataItem.value})//input.value=''}}
```

### v-for with index

We can have two ways to call v-for

1. v-for=“item in items”
2. v-for=“(item,index) in items”

we can now pass the index through to use it

### Adding a delete button

Let’s add a delete button by adding the index to the v-for

```
<li v-for="(dinosaur,index in dinosaurs"><button v-on:click="deleteItem(index)">X</button>{{dinosaur.name}}</li>
```

```
deleteItem(index){this.dinosaurs.splice(index,1)}
```

### v-model : binding data fields

We can bind data fields using v-model

For example in our input form we can use

```
<form v-on:keypress.enter="addItem">Name:<input v-model="dinosaurName" id="dinosaurName" />Weight:<input v-model="dinosaurWeight" type="number" id="dinosaurWeight"/> kg<button v-on:click="addItem">Add Dinosaur</button></form>
```

with each dinosaur displaying as a list item

```
<ul><li v-for="(dinosaur,index in dinosaurs"><button v-on:click="deleteItem(index)">X</button><h4>{{dinosaur.name}}</h4><p>The {{dinosaur.name}} weighs {{dinosaur.weight}} kg</p><a href="">https://en.wikidpedia.org/wiki/{{dinosaur.name}}</a></li></ul>
```

where our Vue data item can now hold

```
dinosaurs:[{name:"raptor",weight:20},{name:"triceratops",weight:200}],dinosaurName:'',dinosaurWeight:'',
```

so we can now add an item using

```
addItem(){event.preventDefault()let dinosaurName = document.getElementById('dinosaurName').valuelet dinosaurWeight = document.getElementById('dinosaurWeight').valueif(dinosaurName !== ''){let newDinosaur = {name:dinosaurName,weight:dinosaurWeight}this.dinosaurs.push(newDinosaur)this.dinosaurName=''this.dinosaurWeight=''}}
```

### Adding display filters

We can filter our lists and either display, hide or change the content.

We do this by creating a `filters` block in our Vue instance and accessing the named filter as a | pipe after our display item on screen eg `<h4>{{dinosaur.name | capitalize}}</h4>`

For example we can ensure the first letter is capitalised

```
filters:{capitalize(value){if(!value)returnvalue=value.toString()return value.charAt(0).toUpperCase() + value.slice(1)}}
```

We can now apply the filter with

```
<li v-for="(dinosaur,index in dinosaurs"><button v-on:click="deleteItem(index)">X</button><h4>{{dinosaur.name | capitalize}}</h4><p>The {{dinosaur.name}} weighs {{dinosaur.weight}} kg</p><a href="">https://en.wikidpedia.org/wiki/{{dinosaur.name}}</a></li>
```

Which will now capitalize the first letter of every heading

### Checking a value is not null

Just check for

```
if(!value){// value is blank}
```

### filter | undercase

To create a filter for lower-case only we can do

```
filter:{undercase(value){if(!value) return ''value = value.toString()return value.toLowerCase()}}
```

so we can ensure the url is lower case

```
<a href="">https://en.wikidpedia.org/wiki/{{dinosaur.name|undercase}}</a>
```

### piping filters

Filters can be combined, or piped, so the output of one is fed into the input of another

For example we can change the URL code to read, when we create a new filter

```
filters:{url(value){if(!value) return ''value=value.toString()return "https://en.wikidpedia.org/wiki/" + value},}
```

```
<a href="">{{ dinosaur.name | undercase | url }}</a>
```

So now the title appears in Uppercase for first letter, and the URL appears in all lower case regardless of the input.

## Vue Slightly More Advanced Topics

[Computed Properties](about:blank#computed-properties)

[Watching](about:blank#watching)

[v-bind:class - Dynamically Updating CSS](about:blank#v-bindclass---dynamically-updating-css)

[Enabling/Disabling Screen Items](about:blank#enable-or-disable-an-item)

[Inline CSS](about:blank#setting-inline-css-styles)

[v-if/else](about:blank#v-if-and-v-else)

[v-show](about:blank#v-show)

### Computed Properties

These notes are taken from VueJS on Egghead Video 4

We can compute properties from other properties

Let’s create computed-properties-01

In our Vue instance create, alongside data and methods and filters, one called ‘computed’

```
data:{},methods:{},filters:{},computed:{totalDinosaurs(){}}
```

We can add in detail such as :

```
dinosaurs: [{ name: "Raptor", weight: 20, quantity:1 },{ name: "triceratops", weight: 200, quantity:2 }],
```

So when we push a new dinosaur we can add the quantity

```
if (dinosaurName !== "") {let newDinosaur = {name: dinosaurName,weight: dinosaurWeight,quantity:1,};this.dinosaurs.push(newDinosaur);
```

So we can add computed properties

```
addQuantity(index){this.dinosaurs[index].quantity++},removeQuantity(index){this.dinosaurs[index].quantity--},
```

And now build this into our HTML

```
<ul><li v-for="(dinosaur,index in dinosaurs"><button v-on:click="deleteItem(index)">X</button><h4><button v-on:click="removeQuantity(index)">-</button>{{ dinosaur.quantity }}<button v-on:click="addQuantity(index)">+</button>{{ dinosaur.name | capitalize }}</h4><p>The {{ dinosaur.name }} weighs {{ dinosaur.weight }} kg</p><a href="">{{ dinosaur.name | undercase | url }}</a></li></ul>
```

See [computed-properties-01.html](computed-properties-01.html) for a working example

### Watching

We can add, alongside data: and methods: and other blocks, a new block called `watch`.

This can be aware of changing values on our page.

We must name our watched property to be the name of another data property or computed property etc which already exists. } } }, computed:{ totalDinosaurs(){ return this.dinosaurs.length } }, ```

which can make our HTML appear or disappear

```
<h3 id="populationWarning">Population Limit Exceeded!!!</h3>
```

### v-bind:class - Dynamically Updating CSS

With CSS we can apply or not apply CSS Styles using the following syntax

```
v-bind:class="{style:styleIsApplied}"
```

We can change multiple classes using this syntax

```
<div v-bind:class="{ customStyle1:isStyle1Applied, customStyle2:isStyle2Applied}"
```

or this syntax

```
<button  class="styleMe" v-bind:class="[{large:isLarge},{rounded:isRounded}]"
```

As an example, we can bind HTML form input data and use it to set CSS class styles where the custom styles are applied depending if the values are true or false.

Let’s create a simple set of elements with styling data which can be input.

```
<h1>{{title}}</h1><button class="styleMe" v-bind:class="{large:isLarge}">Style Me</button><br /><br /><input v-model="fontColor" /><label> Font Color</label><br /><input v-model="backgroundColor" /> Background Color<br /><input type="checkbox" v-model="isLarge" /> Large <br /><input type="checkbox" v-model="isRounded" /> Rounded <br /><input type="checkbox" v-model="isDisabled" /> Disabled <br /><input type="range" v-model="range" min="0" max="100" value="0"/><br />
```

We have used v-model to bind the values to items found in the data: object in our Vue instance

```
data:{title:"Binding to HTML form data",fontColor:'#cccccc',backgroundColor:'#cccccc',isLarge:false,isDisabled:false,isRounded:false,}
```

We have bound the class ‘Large’ to whether or not the ‘isLarge’ tick box is ticked or not

```
<style>.styleMe{width:10vw;}.large{width:20vw;}</style>
```

So the default width is 10% but when ‘large’ is ticked the width becomes 20% of the screen width.

See [html-form-01.html](html-form-01.html)

### Enable or disable an item

We can `v-bind:disabled` to an item

```
<buttonclass="styleMe"v-bind:disabled="isDisabled">Style Me</button><br /><br /><input type="checkbox" v-model="isDisabled" /> Disabled <br />
```

### Setting inline CSS Styles

To set inline styles we can use computed properties

```
<button v-bind:style="computedStyle">
```

```
computed:{computedStyle(){return{'margin-left':this.buttonMarginLeft + '%',background:this.backgroundColor,color:this.fontColor,}}}
```

So for example this would work

```
<buttonclass="styleMe"v-bind:class="[{large:isLarge},{rounded:isRounded}]"v-bind:style="styles"v-bind:disabled="isDisabled">Style Me</button><br /><br /><input v-model="fontColor" /><label> Font Color</label><br /><input v-model="backgroundColor" /> Background Color<br /><input type="checkbox" v-model="isLarge" /> Large <br /><input type="checkbox" v-model="isRounded" /> Rounded <br /><input type="checkbox" v-model="isDisabled" /> Disabled <br /><input type="range" v-model="buttonMarginLeft" min="0" max="100" /><br />
```

```
data:{title:"Binding to HTML form data",fontColor:'#cccccc',backgroundColor:'#cccccc',isLarge:false,isDisabled:false,isRounded:false,buttonMarginLeft:0,},computed:{styles(){return {'margin-left':this.buttonMarginLeft + '%',background:this.backgroundColor,color:this.fontColor,}}},
```

Again see [html-form-01.html](html-form-01.html) for a working example of this

This finishes Egghead Vue video 6

### v-if and v-else

We can use if..else statements to render content

### v-if

We can for example conditionally display a list

```
<ul v-if="dinosaurs.length>0">
```

### v-else

We can use v-else to instruct what to do if the previous v-if is false

```
<h3 v-else>Please add a new dinosaur</h3>
```

See [v-if-else-01.html](v-if-else-01.html) for a working example

### v-show

V-show can display items on a page similar to `v-if` and `v-else`

```
<div v-show="quantity<5">
```

We could show/hide buttons for example

```
<ul v-if="dinosaurs.length>0"><h2>List of {{dinosaurs.length}} dinosaurs</h2><li v-for="(dinosaur,index) in dinosaurs"><button v-show="dinosaur.quantity<=5" v-on:click="increaseQuantity(index)">+</button>{{dinosaur.quantity}}<button v-show="dinosaur.quantity>1" v-on:click="decreaseQuantity(index)">-</button>{{dinosaur.name}}<button v-on:click="removeDinosaur(index)">X</button></li></ul>
```

See [v-show-01.html](v-show-01.html) for a working example

## Working With Forms

[v-on:submit](about:blank#v-onsubmit)

[Vue With Checkboxes](about:blank#vue-with-checkboxes)

[Vue With Radio Buttons](about:blank#vue-with-radio-buttons)

[Vue With Drop-Down Boxes (HTML Select )](about:blank#vue-with-drop-down-boxes-html-select)

### v-on:submit

We can call a method on submitting a form

```
<form v-on:submit="validateFields">
```

We can call event.PreventDefault() method using the following syntax

```
<form v-on:submit.prevent="validateFields">
```

### Vue With Checkboxes

v-model:checked

We can create a binding for an input checkbox

```
<div id="app"><input type="checkbox" id="checkbox" v-model="isChecked" />This checkbox is {{ isChecked ? 'checked' : 'unchecked' }}<div v-show="isChecked">Checked</div></div><script>var app = new Vue({el:'#app',data:{isChecked:false,}})</script>
```

see [checked-01.html](checked-01.html)

### Vue With Radio Buttons

We can bind the value of a radio button (which gets submitted in the form) with

```
<input type="radio" v-bind:value="dinosaur.name" />
```

and also if we want to know which radio button has been clicked we can use v-model=“selectedItem”

See full example at [radio-buttons-01.html](radio-buttons-01.html)

```
<h3>Basic v-for list of dinosaurs</h3><ul><li v-for="dinosaur in dinosaurs">{{dinosaur.name}}</li></ul><h3>Now creating the same list as radio buttons</h3><ul><li v-for="dinosaur in dinosaurs"><input type="radio" v-bind:value="dinosaur.name" v-model="selectedDinosaur"/>{{dinosaur.name}}</li></ul><h5>Your selected dinosaur is {{selectedDinosaur}}</h5></div><script>var app = new Vue({el:'#app',data:{title:"Working With Checkboxes In Vue",dinosaurs:[{name:'Velociraptor'},{name:'tyrannosaurus'}],selectedDinosaur:'',}})
```

### Vue With Drop-Down Boxes (HTML Select)

We can also use multi-select checkboxes which are used on many standard forms

The HTML element is called `select` and each item is an `option`

Let’s create a basic drop-down box

```
<select><option v-for="dinosaur in dinosaurs" v-bind:value="dinosaur.name">{{dinosaur.name}}</option></select>
```

In order to output which item has been selected we can use `v-model`

```
<div id="app"><select v-model="selectedDinosaur"><option v-for="dinosaur in dinosaurs" v-bind:value="dinosaur.name">{{dinosaur.name}}</option></select><h4>Your selected dinosaur is {{selectedDinosaur}}</h4></div><script>var app = new Vue({el:'#app',data:{dinosaurs:[{name:"velociraptor"},{name:"stegasaursus"},{name:"triceratops"}],selectedDinosaur:'',}})</script>
```

We can add multi-select by creating an array of `selectedDinosaurs`

```
<div id="app"><h2>Selecting Multiple Dinosaurs</h2><select v-model="selectedDinosaurs" multiple><option v-for="dinosaur in dinosaurs" v-bind:value="dinosaur.name">{{dinosaur.name}}</option></select><h4>Your selected dinosaurs are {{selectedDinosaurs.toString()}}</h4></div><script>var app = new Vue({el:'#app',data:{dinosaurs:[{name:"velociraptor"},{name:"stegasaursus"},{name:"triceratops"}],selectedDinosaur:'',selectedDinosaurs:[],}})</script>
```

See [select-box-01.html](select-box-01.html) for a working example

## Vue Components

Components are used to break bigger apps up. Can separate into .vue files if needed

[Creating A Component](about:blank#create-a-component)

[Using A Component](about:blank#using-a-component)

[Reusing Components](about:blank#reusing-components)

[Component Local And Global Data](about:blank#component-global-and-local-data)

[Using Components With The x-template syntax](about:blank#using-components-in-vue--using-the-x-template-syntax)

### Create a component

Vue.component( ‘my-component’, {template:‘This is my component text’} )

We can also declare it as a literal object

```
var component01 = {template:'<p>{{field01}}</p>',data:function(){return {field01:'some data'}}}
```

### Using a component

We can now declare a parent Vue element and use this component

```
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

```
<div id="app">{{globalData}}<my-component-01></my-component-01><my-component-01></my-component-01></div>
```

### Component Global And Local Data

We can have data common across all components

```
<div id="app">{{globalData}}<component01 /><component01 /></div>
```

```
new Vue({el:'#app',data(){return {globalData:"some global data"}}})Vue.component('componenet01',template:'<p>{{localData}}</p>',data(){return {localData:'some local data'}})
```

### Using Components In Vue : Using the x-template syntax

We can also create components using the following

```
<script type="text/x-template" id="component01"><div><button v-on:click="quantity++">{{quantity}}</button>{{name}}</div></script>
```

and use them by creating a ‘components’ section inside our Vue instance

```
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

We can use the following syntax to `emit` an event in the child component and listen for it in the parent component

```
new Vue({el:"#app",data:{},methods:{},components:{'component-01':{template:"component-01",props:[],data(){},methods:{increment(){this.quantity+=1this.emit('increment',1)}}}},})
```

so we can use this to emit an event in the child component and update the parent component.

See [component-06-pass-data.html](component-06-pass-data.html) for a worked example of this

### Adding multiple components with the x-template syntax

Let’s now add a second template

```
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><script src="https://unpkg.com/vue@2.5.16/dist/vue.js"></script><script src="assets/js/vue.js"></script><title>Vue Components</title></head><body><div id="app"><h1>{{title}}</h1><ul><hr /><li v-for="dinosaur in dinosaurs"><component01v-bind:name="dinosaur.name"v-bind:quantity="dinosaur.quantity"></component01><component02v-bind:name="dinosaur.name"v-bind:diet="dinosaur.diet"></component02><hr /></li></ul></div><script type="text/x-template" id="component01"><div>Component01--<button v-on:click="increment">{{quantity}}</button> {{name}}</div></script><script type="text/x-template" id="component02"><div>Component02--{{name}} eats {{diet}}</div></script><script>new Vue({el:"#app",data:{title:"Using 2 components",dinosaurs:[{name:"Tyrannosaurus",quantity:2,diet:"dinosaurs"},{name:"Stegosaurus",quantity:3,diet:"meat"}],total:0,},created:{},components:{'component01':{template:"#component01",props:["name","quantity"],methods:{increment(){this.quantity++},},},'component02':{template:"#component02",props:["name","diet"],},},})</script></body></html>
```

## Toggling Between Templates

We can now toggle between our two templates

After creating our two templates we can set a property `currentView`

## Vue Client - 3

The Vue client is used to quickly scaffold different types of Vue projects from scratch. The latest iteration is Vue Client version 3.

## Vue CLI 3

`vue-cli` startup preferences can be saved for future use, to easily build custom projects from a set template over and over again. The file that is used here is in ~ /.vuerc

Vue CLI 3 also includes Webpack dev server with hot reloading!!!

## Creating a project

Create a new project with

```
vue create project-name
```

or

```
vue ui
```

### Running a project

Go into the folder created and run `npm run serve`

### Running a project with pnpm

You can also try installing and running a project with `pnpm`.

```
pnpm install cache-loader webpack vue-loader  url-loader  vue-style-loader postcss-loader css-loader 
pnpm run serve
```

### Vue Serve with Hot Reloading

Once vue serve has been installed, to run a single vue file just type

```
vue serve myfile.vue
```

You will find that once you go to http://localhost:8080 the file will show. Also saving any changes to the file will instantly appear on the screen.

### Adding plugins

Plugins can be added to an existing project

```
vue add router
vue add vuex
vue add @vue/cli-plugin-eslint
vue add apollo
```

### Building for modern browsers

We can build for modern browsers using

```
vue-cli-service build --modern
```

### API keys

API keys can be stored as environment variables

Create an .env file and add this to .gitignore so it’s not pushed to GitHub.

```
# development or productionNODE_ENV=developmentVUE_APP_TITLE=App TitleVUE_APP_API_Key_01=123456
```

When we build our Vue project the variable VUE_APP_API_Key_01 will return the appropriate value

in `main.js`

```
import Vue from 'vue'import App from './App.vue'Vue.config.productionTip = falseconsole.log(process)console.log(process.env)console.log(process.env.VUE_APP_API_Key_01)new Vue({render: function (h) { return h(App) },}).$mount('#app')/*ObjectBASE_URL: "/"NODE_ENV: "development"VUE_APP_API_Key_01: "123456"VUE_APP_TITLE: "App Title"123456*/
```

# Vue Tutorial Walkthroughs

## Vue Tutorial 1: Traversy Media : Vue in 60 minutes

[https://www.youtube.com/watch?v=z6hQqgvGI4Y](https://www.youtube.com/watch?v=z6hQqgvGI4Y)

1. Install VUE CDN NPM Vue-Cli Bower
2. Npm install -g vue-cli
3. Vue init webpack vue-01
4. Cd vue-01
5. Npm install
6. Npm run dev
7. Note that to get our route ‘/’ the default route we need to go to src/router/index.js file
8. Later on at the end : npm install vue-resource –save (this enables database read)
9. Data is read from [https://jsonplaceholder.typicode.com - this also has ‘fetch’ instructions](https://jsonplaceholder.typicode.com/)
10. Exact url is https://jsonplaceholder.typicode.com/users
11. Adding in element for styling : npm install element-ui –save

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

Note that to get our route ‘/’ the default route we need to go to src/router/index.js file

Later on at the end : npm install vue-resource –save (this enables database read)

Data is read from https://jsonplaceholder.typicode.com - this also has ‘fetch’ instructions

Exact url is https://jsonplaceholder.typicode.com/users

Adding in element for styling : npm install element-ui –save

## Hello World

npm i npm && vue init webpack hello-world && cd hello-world && npm install && npm run dev

npm i npm && vue init webpack hello-world-03 && cd hello-world-03 && npm install && npm run dev

```
<!DOCTYPE html><html><head><meta charset="utf-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>Page Title</title><meta name="viewport" content="width=device-width, initial-scale=1"><script src="https://unpkg.com/vue@2.5.16/dist/vue.js"></script></head><body><div id="app">hello</div></body><script>new Vue({el: "#app"})</script></html>
```

### Hello World manually

```
<script src="../assets/js/vue.js"></script><script src="https://unpkg.com/vue@2.5.16/dist/vue.js"></script>
```

## Methods

We can now also run a method

```
<div id="app"><p>{{sayHello()}}</div>
```

```
new Vue({el: '#app',data:{data01: 'some text'},methods:{sayHello:function(){// returns a stringreturn 'saying hello'.}}});
```

### Access other fields with `this`

We can access, say for example `data01` by the following code

```
data:{data01: 'some text'},methods:{sayHello:function(){return this.data01}}
```

## {{ only work when we expect text to be present, not HTML attributes }}

## v-bind

`v-bind` can be used to bind data to an html element attributes

## href

We can go to the href of a link by using the following

```
<a v-bind:href="link">Click here</a>
```

```
data:{link:'http://mysite.com'}
```

## Directives : passing in attribute values

Directives are instructions placed in our code

`v-bind` is a directive

`v-bind:attriute="value"`

## Setting data values

If we are in a method and wish to change the value of a data field we can do the following

```
<p>{{DoThis()}}</p>
```

```
data:{title:'some title'},methods:{DoThis:function(){this.title='and here is a new title'return this.title}}
```

## Components

```
<html><head><script src="https://unpkg.com/vue@2.5.16/dist/vue.js"></script></head><body><div id="app">{{field}}<my-component></my-component><my-component></my-component></div></body><script>Vue.component('my-component',{template:'<p>hello from component</p>'})new Vue({el:'#app',data:function(){return{field:'hello world'}}})</script></html>
```

```
<html><head><script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.js"></script></head><body><div id="app">{{field01}}<component-01></component-01></div></body><script>Vue.component('component-01',{template:'<p>from component</p>'})new Vue({el:'#app',data:function(){return{field01:'some data here from data function'}}})</script></html>
```

```
<html><head><script src="https://unpkg.com/vue@2.5.16/dist/vue.js"></script></head><body><div id="app">{{globalData}}<my-component-01></my-component-01><my-component-01></my-component-01></div><div id="app2"><my-component-01></my-component-01></div></body><script>Vue.component('my-component-01',{template:'<p><br />hello<br />{{field01}}<br />{{field02}}<button @click="changeMe">ChangeMe</button></p>',data:function(){return {field02: 'some more data here',field01: 'some data here'}},methods:{changeMe:function(){this.field01='Data has now been changed'}}})new Vue({el:'#app',data:function(){return {globalData:'this is common to all instances'}}})new Vue({el:'#app2'})</script></html>
```

```
<html><head><script src="https://unpkg.com/vue@2.5.16/dist/vue.js"></script></head><body><div id="app"><hr />App<component01></component01></div><div id="app2"><hr />App2<component01></component01></div></body><script>// create component as variablevar component01 = {template:'<p>{{field01}}</p>',data:function(){return {field01:'some data'}}}new Vue({el:'#app',components:{component01}})new Vue({el:'#app2',components:{'component01': component01}})</script></html>
```

## Analysing a Vue app

index.html

```
<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>component-05-sub</title></head><body><div id="app"></div><script src="/dist/build.js"></script></body></html>
```

main.js

```
import Vue from 'vue'import App from './App.vue'import Home from './Home.vue'Vue.component('component-home',Home)new Vue({el: '#app',render: h => h(App),})
```

App.vue page linking to a Home component

```
<template><div id="app"><img src="./assets/logo.png"><h1>{{ msg }}</h1><component-home></component-home></div></template><script>export default {name: 'app',data () {return {msg: 'Welcome to Your Vue.js App'}}}</script>
```

Home.vue

```
<template><div>Home Component<p>{{field01}}</p></div></template><script>export default {data: function(){return{field01:'test data'}}}</script>
```

## Routing

To introduce routing check out Router-01

main.js

```
import Vue from 'vue'import BootstrapVue from "bootstrap-vue"import App from './App.vue'import "bootstrap/dist/css/bootstrap.min.css"import "bootstrap-vue/dist/bootstrap-vue.css"import Header from './components/Header.vue'import Footer from './components/Footer.vue'import Page1 from './components/Page1.vue'import Page2 from './components/Page2.vue'import VueRouter from 'vue-router'import { routes } from './routes'Vue.use(VueRouter)Vue.use(BootstrapVue)Vue.component('header-component',Header)Vue.component('footer-component',Footer)Vue.component('page1-component',Page1)Vue.component('page2-component',Page2)const router = new VueRouter({routes,mode : 'history'})new Vue({el: '#app',router,render: h => h(App)})
```

and routes.js

```
import Header from './components/Header.vue'import Footer from './components/Footer.vue'import Page1 from './components/Page1.vue'import Page2 from './components/Page2.vue'export const routes = [{path:'',component:null},{path:'/page1',component:Page1},{path:'/page2',component:Page2}]
```

with main component App.vue

```
<template><div id="app"><img src="./assets/logo.png"><h1>{{ msg }}</h1><h2>Essential Links</h2><header-component></header-component><h1> <router-view /> </h1><footer-component></footer-component></div></template><script>export default {name: 'app',data () {return {msg: 'Welcome to Your Vue.js App'}}}</script>
```

from which we can add 4 pages

Header.vue

```
<template><div><h2>Header</h2><a href="">Home</a> | <a href="/page1">Page1</a> | <a href="/page2">Page2</a></div></template>
```

Footer.vue

```
<template><div>Footer</div></template>
```

Page1.vue

```
<template><div>Page1</div></template>
```

Page2.vue

```
<template><div>Page2</div></template>
```

## Vue basic code snippets

These are code snippets from my built code

vue-01.js

There are 2 vue files - App.vue and Phil.vue and these are both being imported here as well as the router

```
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

vue-01.js

```
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

## Vue Client 3

Version 1 and 2 were installed with

```
npm install -g vue-cli
```

Version 3 is installed with

```
npm install -g @vue/cli
```

Type `vue` to check you have this installed

```
vue --version
```

The version should show version 3 or above

## Vue Serve

We can build single Vue files using `vue serve` and `vue build` commands

```
npm install -g @vue/cli-service-global
```

We then create a single `App.vue` file

```
<template>
<h1>Hello</h1>
</template>
```

and run it with

```
vue serve
```

which will run the following files : `main.js`, `index.js`, `App.vue`,`app.vue`

or specify a name

```
vue serve myFile.vue
```

you can also build the component and not run it

```
vue build myFile.vue
```

This can run instant files

## Building projects

```
vue create hello-world
```

Yarn can be used instead of npm to install packages

## Saved preferences

Saved preferences will be saved in the `~/.vuerc` file

## vue ui

Projects can be creates with a GUI

## Applying CSS Classes to VUE

```
<div v-bind:class="{active:isActive}"></div><div v-bind:style="{color:activeColor}"></div>
```

Vue file

```
data{isActive:true,activeColor:'red'}
```

Vue Components

Components are used to break bigger apps up. Can separate into .vue files if needed

Create a component

```
Vue.component('my-component',{template:'This is my component text'})
```

```
<div id="app"><my-component></my-component></div>
```

## Vue Tutorial 2 : Connecting VUE to Firebase Database in 54 minutes

[https://www.youtube.com/watch?v=we4zuQIXmnw](https://www.youtube.com/watch?v=we4zuQIXmnw) [https://medium.com/codingthesmartway-com-blog/vue-js-2-firebase-e4b2479e35a8"](https://medium.com/codingthesmartway-com-blog/vue-js-2-firebase-e4b2479e35a8)

1. Firebase.Google.com
2. Databases : Real Time
3. Npm install -g vue-cli
4. Vue init webpack vue-01
5. Cd vue-01
6. Npm install
7. Npm run dev

## Vue Backends

https://medium.com/js-dojo/7-vue-js-backends-compared-74812da014f4

## Vue Tutorial 2 : Connecting VUE to Firebase Database in 54 minutes

[https://www.youtube.com/watch?v=we4zuQIXmnw](https://www.youtube.com/watch?v=we4zuQIXmnw) [https://medium.com/codingthesmartway-com-blog/vue-js-2-firebase-e4b2479e35a8"](https://medium.com/codingthesmartway-com-blog/vue-js-2-firebase-e4b2479e35a8)

1. Firebase.Google.com
2. Databases : Real Time
3. Npm install -g vue-cli
4. Vue init webpack vue-01
5. Cd vue-01
6. Npm install
7. Npm run dev

# Vue with Firebase

[Vue 2 + Firebase: How to build a Vue app with Firebase authentication system in 15 minutes](https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c)

```csharp
vue create vue-with-firebase-01
choose Manual and choose Babel, Router and Linter
cd vue-with-firebase-01
yarn serve

```

Goal will be to build three views

- Login
- Signup
- Home (requires a login)

### Create Login view

```csharp
<template>
    <div class="login">
        <h3>Sign In</h3>
        <input placehoder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Submit</button>
        <p>No account?  Please <a href="/">register here</a></p>
    </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return {};
    },
    methods:{}
}
</script>

<style scoped>

</style>
```

### Routes with src/router.js

Now look at vue-router to view the page 

[Introduction | Vue Router](https://router.vuejs.org/)

find src/router.js

```csharp
main.js

import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.js

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/login',name:'login',component:Login
    }
  ]
})

App.vue

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

components/Component01.vue

<template>
    <div>
        <h3>This is component 01</h3>
        <p>{{ title }}
    </div>
</template>
<script>
export default {
    name:'Component01',
    props:{
        title:String
    }
}
</script>

views/Home.vue

<template>
  <div class="home">
    <h1>Home Page</h1>
    <HelloWorld msg="Hello World Component"/>
        <HelloWorld msg="Hello World Component"/>
            <HelloWorld msg="Hello World Component"/>
                <HelloWorld msg="Hello World Component"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import About from '@components/About.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

views/Login.vue

<template>
<div>
    <input placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button type="submit">Submit</button>
    <p>No account?  Click to <router-link to="Register">register</router-link></p>
</div>
</template>

```

The login form looks very plain.

Let's add bootstrap

Using 

[BootstrapVue](https://bootstrap-vue.js.org/docs)

# Rework From Scratch Of Vue Firebase App

```jsx
npm install -g @vue/cli

vue create vue-firebase-app

cd vue-firebase-app

yarn serve 
```

# Add Views To Provide Navigation

```jsx
\router.js

import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import View1 from "./views/View1.vue";
import View2 from "./views/View2.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/view1",
      name: "view1",
      component: View1
    },
    {
      path: "/view2",
      name: "view2",
      component: View2
    }
  ]
});

// App.vue

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/view1">View1</router-link>|
      <router-link to="/view2">View2</router-link>
    </div>
    <router-view />
  </div>
</template>

\views\View1.vue and \views\View2.vue

<template>
    <div>
        <h1>View1</h1>
    </div>
</template>

```

# Add Bootstrap

```jsx
yarn add vue bootstrap-vue bootstrap

// main.js

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
```

# Vue Components And Props

Vue components allow us to build a reusable model, swapping components in and out of pages.

See `vue-2019-09-29-with-firebase` for a working example of this

Overall structure

```bash
src
	assets
	components
		Component1.vue
		Component2.vue
	views
		View1.vue
		View2.vue
	App.vue
	main.ts
  router.ts

# router.ts
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    { path: '/register', name: 'register', component: Register },
    { path: '/login', name: 'login', component: Login }
  ],
});

# main.ts
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

# App.vue
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/register">Register</router-link>|
      <router-link to="/login">Login</router-link>
    </div>
    <router-view />
  </div>
</template>

# Home.vue
<template>
  <div class="home">
    <h1>Home.vue</h1>
    <h2>
      <PhilComponent />
    </h2>
    <h3>
      <ComponentWithMessage msg="Displaying message sent through as props" />
    </h3>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <ul style="list-style-type:none;">
      <li>
        <Component2WithMessage msg="Message 01" />
      </li>
      <li>
        <Component2WithMessage msg="Message 02" />
      </li>
      <li>
        <Component2WithMessage msg="Message 03" />
      </li>
    </ul>
    <div>And here is a component with 2 messages in it</div>
    <component-with-2-messages
      message1="This is message 1"
      message2="This is message 2"
      :number1="someNumber"
      :array1="someArray"
      array2="hello hello hello, hello"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import PhilComponent from "@/components/PhilComponent.vue";
import ComponentWithMessage from "@/components/ComponentWithMessage.vue";
import Component2WithMessage from "@/components/Component2WithMessage.vue";
import ComponentWith2Messages from "@/components/ComponentWith2Messages.vue";

@Component({
  components: {
    HelloWorld,
    PhilComponent,
    ComponentWithMessage,
    Component2WithMessage,
    ComponentWith2Messages
  }
})
export default class Home extends Vue {
  data() {
    return {
      someNumber: 1000,
      someArray: ["one", "two", "three"]
    };
  }
}
</script>

This provides the lead in to components for example
# ComponentWith2Messages
<template>
  <div>
    <h5>This is a component with two messages</h5>
    <ol>
      <li>First Message : {{message1}}</li>
      <li>Second Message : {{message2}}</li>
      <li>First Number : {{number1}}</li>
    </ol>
    <ul>
      <li v-for="item in array1" v-bind:key="item">An item {{item}}</li>
    </ul>
    <ul>
      <li>{{array2}}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class ComponentWith2Messages extends Vue {
  @Prop() private message1!: string;
  @Prop() private message2!: string;
  @Prop() private number1!: number;
  @Prop() private array1!: Array<String>;
  @Prop() private array2!: Array<String>;
}
</script>
```

# Components With Props

Here we have 2 components with props being passed from the parent to the child component.  Lab is `vue-2019-10-05`

```jsx
# This is the View

<template>
  <div id="master">
    <hr />
    <h1>Master Component</h1>
    <HelloWorld msg="This is a HelloWorld component" />
    <Component01 componentprop="Component01Prop" />
    <Component02 />
    This is a global computed property {{ count }}
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "es6-promise/auto";
import Vuex from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";
import Component01 from "@/components/Component01.vue";
import Component02 from "@/components/Component02.vue";

export default Vue.extend({
  name: "ComponentMaster",
  props: {
    IncomingData: String
  },
  components: {
    HelloWorld,
    Component01,
    Component02
  },
  methods: {
    increment() {
      console.log("about to increment");
      this.$store.commit("increment");
      console.log(this.$store.state.count);
      localStorage.setItem("vuex-counter", this.$store.state.count.toString());
    }
  },
  computed: Vuex.mapState(["count"])
});
</script>

# This is the component
<template>
  <div class="component01">
      <hr />
    <p>This is <strong>component01</strong> with prop {{ componentprop }} &nbsp;<span><button @click="increment">Increment</button></span></p>

    <p>
      State of global counter is
      <strong>{{ count }}</strong>
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import "es6-promise/auto";
import Vuex from "vuex";

export default Vue.extend({
  name: "Component01",
  props: {
    componentprop: String
  },
  methods: {
    increment() {
      console.log("about to increment");
      this.$store.commit("increment");
      console.log(this.$store.state.count);
      localStorage.setItem("vuex-counter", this.$store.state.count.toString());
    }
  },
  computed: Vuex.mapState(["count"])
});
</script>
```

## Axios

```js
yarn add axios
import axios from 'axios'
```

# Axios Getting API Data

```jsx
# vue-2019-10-05-firebase

Author : Philip Anderson
Date : 5 October 2019

Goal : to build a simple Vue app with Firebase to 
    a) Login
    b) View A List Of Usernames

This project has a lot in it

1) Axios to get JSON data from an API
2) Typescript although I didn't implement classes
3) Components
4) Props and passing data to components
5) Local Storage
6) Global counters ie a button which works on different pages and stored also in localStorage
7) Iterating a list obtained as JSON from the API on the screen
```

# Vue With Firebase: 2019-09

```csharp
const firebaseConfig = {
  apiKey: "AIzaSyCfMwaRvBc6hd4ubtZo0obYC8YpG0sgVC0",
  authDomain: "vue-with-firebase-01.firebaseapp.com",
  databaseURL: "https://vue-with-firebase-01.firebaseio.com",
  projectId: "vue-with-firebase-01",
  storageBucket: "",
  messagingSenderId: "1026739802852",
  appId: "1:1026739802852:web:6c9291fcc7acaece"
};

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/6.3.5/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#reserved-urls -->

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>

npm install -g firebase-tools

firebase login

firebase init

firebase deploy
```

# Vue With Firebase 2

Following this tutorial

[https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c](https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c)

It's been updated to include Vue3.

```bash
# install Vue
npm install -g @vue/cli
vue create vue-2019-09-28-hello-world
cd ..

# run app
yarn serve

# run tests
yarn test:unit

# views\Login.vue

```

# 

# To Do Vue App

This one was obtained from the internet

```html
//   public\index.html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title>Vue To Do</title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but Vue To Do doesn't work properly without JavaScript enabled. 
					Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

// src\main.js
```js
import Vue from 'vue'
import ToDo from './ToDo.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(ToDo)
}).$mount('#app')

// src\ToDo.vue 

<template>
  <div id="app">
    <div class="ToDo">
      <img class="Logo" :src="logo" alt="Vue logo"/>
      <h1 class="ToDo-Header">Vue To Do</h1>
      <div class="ToDo-Container">
        <div class="ToDo-Content">
          <ToDoItem v-for="todo in list" 
                    :todo="todo" 
                    @delete="onDeleteItem"
                    :key="todo.id" />
        </div>
        <input type="text" v-model="todo" v-on:keyup.enter="createNewToDoItem"/>
        <div class="ToDo-Add" @click="createNewToDoItem()">+</div>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoItem from './components/ToDoItem.vue'
import Logo from './assets/logo.png';

export default {
  name: 'to-do',
  components: {
    ToDoItem
  },
  data() {
      return {
          list: [
              {
                id: 1,
                text: 'clean the house'
              },
              {
                id: 2,
                text: 'buy milk'
              }
          ],
          todo: '',
          logo: Logo
      }
  },

  methods: {
      createNewToDoItem() {
        //validate todo
        if (!this.todo){
          alert("Please enter a todo!");
          return
        }

        const newId = Math.max.apply(null, this.list.map(t => t.id)) + 1;
        this.list.push({ id: newId, text: this.todo});
        this.todo = '';
      },
      onDeleteItem(todo){
        this.list = this.list.filter(item => item !== todo);
      }

  },
}
</script>

// src\components\ToDoItem.vue

<template>
    <div class="ToDoItem">
        <p class="ToDoItem-Text">{{todo.text}}</p>
        <div class="ToDoItem-Delete"
             @click="deleteItem(todo)">-
        </div>
    </div>
</template>

<script>
    export default {
        name: "to-do-item",
        props: ['todo'],
        methods: {
            deleteItem(todo) {
                this.$emit('delete', todo)
            }
        }
    }
</script>

```

# Vuex Global Storage

[https://vuex.vuejs.org/guide/](https://vuex.vuejs.org/guide/) 

```jsx
# see vue-2019-10-05-firebase

# main.ts
import 'es6-promise/auto'
import Vuex from 'vuex';

Vue.use(Vuex)

if((localStorage.getItem("vuex-counter")===null)||(localStorage.getItem("vuex-counter")==='NaN')){
  localStorage.setItem("vuex-counter",'0');
}
const counterFromStorage = localStorage.getItem("vuex-counter")
console.log('counterFromStorage = ' + counterFromStorage)
let vuexcuounter = counterFromStorage !== null ? parseInt(counterFromStorage) : 0;

const store = new Vuex.Store({
  state: {
    count: vuexcuounter
  },
  mutations: {
    increment(state) {
      state.count++
      let item = state.count
      localStorage.setItem("vuex-counter",item.toString())
    }
  }
})
console.log(store.state.count)

new Vue({
  beforeCreate: function () {
    console.log('hello');
  },
  router,
  store,
  data() {
    return {
      IncomingData: 'some data right here'
    }
  },
  render: h => h(App)
}).$mount("#app");

# Now can use in a component

<template>
This is a global computed property {{ count }}
    <button @click="increment">Increment</button>
</template>

<script>
import "es6-promise/auto";
import Vuex from "vuex";
export default Vue.extend({
  name: "ComponentMaster",
  components: {
    HelloWorld,
    Component01,
    Component02
  },
  methods: {
    increment() {
      console.log("about to increment");
      this.$store.commit("increment");
      console.log(this.$store.state.count);
      localStorage.setItem("vuex-counter",this.$store.state.count.toString())
    }
  },
  computed: Vuex.mapState(["count"])
});
</script>
```

# Vue With PHP : Laravel

## Vue With PHP : Laravel : Tutorial 1:

### Traversy Media : Laravel 5.5 API From Scratch - 45 minutes

```
https://www.youtube.com/watch?v=4pc6cgisbKE
```

Note : the following lab has been worked through on a MAC so the Windows process should be similar but not exactly the same so please be aware

Composer is a PHP dependency engine

GetComposer.org/download and copy PHP and install it

On Getting Started page, mkdir -p /usr/local/bin

Then mv composer.phar /usr/local/bin/composer

If this has worked then in terminal can just run the command ‘composer’ to activate the composer window

Now come back to Laravel website : Laravel.com

Download laravel installer : composer global require “laravel/installer” : when this runs it will install developer command line tools from the store

Install XAMPP

Generate a root XAMPP folder and test

Navigate to your root web folder

Create a new project with composer create-project –prefer-dist laravel/laravel larticles

Navigate to the larticles folder

Run sudo chmod -R 777 storage to grant permissions on the storage folder

Go to localhost/larticles/public on your web browser and you should see Laravel web site running

Use these instructions

https://jonathannicol.com/blog/2012/03/11/configuring-virtualhosts-in-xampp-on-mac/

Create a virtual directory in xamppfiles2.conf

Only keep 2 lines

Edit hosts file by using sudo nano /etc/hosts

Create new database in PHPMyAdmin larticles

From our larticles folder run php artisan make:migraion create_articles_table –create=articles which will appear in database/migrations folder

From terminal type php artisan make:seeder ArticlesTableSeeder

Find the file and edit the run function

Also edit the DatabaseSeeder.php file

Generate a factory with php artisan make:factory ArticleFactory

Edit the Factoryfile

Create model with php artisan make:model Article (permissions worked with user root and no password)

Add seed data with php artisan db:seed

Check database now which should be filled with data

Create controller and routes now

php artisan make:controller ArticleController –resource and check created OK in appfolder

Next configure routes in routes.php

Now create resources php artisan make:resource Article which creates, inside http folder a Resources folder then an Article.php file which returns an array

Go to Controllers.php and find the index() function

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

Post to add a new article : Headers add Content-Type as application/json and body add raw json { “title”:“test title”,“body”:“test body”} and send to create a new record

## Laravel Tutorial 2 : Traversy Media : Full Stack Vue.js & Laravel - 42 minutes

https://www.youtube.com/watch?v=DJ6PD_jBtU0&t=1899s

Picking up from Video 1 which completed the API : we are now building VUE front end for this website

Firstly check package.json Vue.js dependency

Installing Node on a MAC

Firstly need XCode

While XCODE was downloading which will take several hours I just downloaded Node and installed it directly

Checking Make sure that /usr/local/bin is in your $PATH - how do I do that? echo $PATH will show this

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

Change the order to orderBy(‘created_at’,‘desc’)

## Vue Glossary

### GridSome - Vue and CSS Grid out of the box

https://gridsome.org/docs

```
# installyarn global add @gridsome/cli# generate new projectgridsome create test-projectcd test-project# run at localhost:8080gridsome develop
```

Now add `.vue` components in the /pages directory

### pnpm

Saves only one copy of a needed library

Install it via npm

```
npm install -g pnpm
```

Once installed, update via pnpm

```
pnpm install -g pnpm
```

Now use pnpm in place of npm

There is also a pnpx client which we call a ‘package runner’

For example

```
pnpx create-react-app my-cool-new-app
```

# Vue With Authentication

*This is a series of coding exercises, in order, to investigate OKTA Oauth2.0 Authentication And Authorization*

### # vue-authentication-okta-02

```

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

```js
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
```

although before this worked I had to add

yarn add @types/okta__okta-vue

and then the project compiled

### Add Okta code

Now adding Okta code

```js
import Auth from '@okta/okta-vue'

Vue.use(VueRouter)

Vue.use(Auth,{
  issuer:'https://dev-961456.okta.com/oauth2/default',
  clientId: process.env.VUE_APP_OKTA_CLIENT_ID,
  redirectUri: 'http://localhost:8080/implicit/callback',
  scopes:['openid','profile','email'],
  pkce:true
});
```

And this is compiling fine.

But is the data correct?

And we don't want secrets in our code?  I am not sure! Let's check

so create file .env in the project root

also .env is in the .gitignore repository

so the variable must start with VUE_APP_ to be read

```js
Vue.use(Auth,{
  issuer:'https://dev-961456.okta.com/oauth2/default',
  clientId: process.env.VUE_APP_OKTA_CLIENT_ID,
  redirectUri: 'http://localhost:8080/implicit/callback',
  scopes:['openid','profile','email'],
  pkce:true
});
```

this will correctly print out the id


## Events

### Form @submit.prevent

Prevents default submission of a form

```html
<form @submit.prevent="validate"></form>
<script>
export default {
    data(){
        return
    },
    methods:{
        validate(){
            return false
        }
    }
}
```

## MEVN Stack Development

[MEVN Stack Development](notes/mevn-stack.md)

## VUE Mastery Course - Introduction To Vue 3

[Vue Mastery - Introduction To Vue 3](notes/vue-mastery-introduction-to-vue-3.md)