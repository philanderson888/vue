# getting started

## contents

- [getting started](#getting-started)
  - [contents](#contents)
  - [introduction](#introduction)
  - [install node](#install-node)
  - [installing vue](#installing-vue)
  - [create project](#create-project)


## introduction

this helps the user understand how to get started with vuejs

## install node

install the latest `stable LTS long-term-support` version from https://nodejs.org/en 

## installing vue

```js
// administrator prompt
npm install -g yarn -y
yarn global add @vue/cli 
// version
vue -V
/*
@vue/cli 4.5.15
*/
```

## create project

```js
vue create hello-world
# YES to typescript, vuex, router, lint with prettier
cd hello-world
yarn serve 
```
