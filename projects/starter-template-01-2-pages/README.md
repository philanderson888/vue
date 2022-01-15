# caniplaythisgame

## contents

- [caniplaythisgame](#caniplaythisgame)
  - [contents](#contents)
  - [introduction](#introduction)
  - [installing vue](#installing-vue)
  - [create project](#create-project)
  - [create firebase project](#create-firebase-project)
    - [link vue app to firebase](#link-vue-app-to-firebase)

## introduction

this repo will hopefully document all the steps required to install a vuejs app with reading data from an api

## installing vue

install the latest `stable LTS long-term-support` version from https://nodejs.org/en 

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
vue create caniplaythisgame
# YES to typescript, vuex, router, lint with prettier
cd caniplaythisgame
yarn serve 
```

## create firebase project 

create a firebase project and add a web app

### link vue app to firebase

```js
npm install firebase
```