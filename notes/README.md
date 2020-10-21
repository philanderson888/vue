# vuejs-learning-topics

## Introduction

This repo is a list of various vuejs topics built for the student to learn various parts of vue

## Contents

- [vuejs-learning-topics](#vuejs-learning-topics)
  - [Introduction](#introduction)
  - [Contents](#contents)
  - [Vue lifecycle hooks](#vue-lifecycle-hooks)
    - [beforeCreate](#beforecreate)
  - [Vue.prototye - adding to global scope variables](#vueprototye---adding-to-global-scope-variables)
  - [await fetch](#await-fetch)


## Vue lifecycle hooks

### beforeCreate

```js
# add variable
Vue.prototype.$appName = 'My App'
# log
new Vue({
    beforeCreate: function(){
        console.log(this.$appName)
    }
})

```

## Vue.prototye - adding to global scope variables

It is possible to add to `Vue.prototype` in order to make a variable available globally within our vue app.

```js
# add 
Vue.prototype.$appName = 'My App'
# log
new Vue({
    beforeCreate: function(){
        console.log(this.$appName)
    }
})
```

## await fetch

[fetch.md](fetch.md)

