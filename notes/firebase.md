# firebase

## contents

- [firebase](#firebase)
  - [contents](#contents)
  - [introduction](#introduction)
  - [firebase config](#firebase-config)
  - [vue + firebase + typescript](#vue--firebase--typescript)
    - [reference](#reference)
    - [create a firebase project](#create-a-firebase-project)
    - [create a firestore database](#create-a-firestore-database)
    - [install firebase tools locally](#install-firebase-tools-locally)
    - [log in to firebase](#log-in-to-firebase)
    - [initialise project](#initialise-project)
    - [run firebase functions server](#run-firebase-functions-server)
    - [view the project](#view-the-project)
    - [add hot reloading of cloud functions](#add-hot-reloading-of-cloud-functions)

## introduction

these notes help the user to understand how to connect vue to firebase

## firebase config

When we create a Firebase database we can detect if it's reachable 
 
You must specify your Realtime Database URL when initializing your JavaScript SDK. 
You can find your Realtime Database URL in the Database tab in the Firebase console. It will be in the form of https://<databaseName>.firebaseio.com. 

```js
// Set the configuration for your app 
// TODO: Replace with your project's config object 
var config = { 
  apiKey: "apiKey", 
  authDomain: "projectId.firebaseapp.com", 
  databaseURL: "https://databaseName.firebaseio.com", 
  storageBucket: "bucket.appspot.com" 
}; 
firebase.initializeApp(config); 
// Get a reference to the database service 
var database = firebase.database(); 
``` 
 
## vue + firebase + typescript

when building a typescript app we have some extra dependencies to consider when importing firebase, as the types need to be declared also.  This guide will help the user set up typescript for firebase imports into a `vue` project

### reference

this references this document

this references this medium article https://medium.com/firebase-developers/setup-a-project-with-firebase-and-vuejs-using-typescript-and-hot-reloading-everywhere-e5f08e46cdf4

which has a local copy here also

https://www.notion.so/philanderson888/Vue-Firebase-Typscript-40a88e9c8c6c406f941efffb28155c0d

### create a firebase project

log in online and create a new firebase project
### create a firestore database

navigate to https://console.firebase.google.com/project/your-firebase-project/firestore and click to create a new `firestore` database

### install firebase tools locally

```js
mkdir my-project
cd my-project
// admin prompt for this line
npm install -g firebase-tools
// i also did this - next time may try this one alone ... watch this space!
yarn add global firebase-tools
// now this command works
firebase
/*
Usage: firebase [options] [command]
Options:
  -V, --version       output the version number
  ...
*/
firebase -V
/*
10.1.0
*/
```

### log in to firebase

```js
firebase login
/*
Visit this URL on this device to log in:
Waiting for authentication...
Success! Logged in as emailaddress@somedomain.com
*/
```

### initialise project

```js
firebase init
// choose your existing project'
// select options firestore, functions, database, storage, hosting (but not github actions)
// choose typescript over javascript
```

### run firebase functions server

```js
cd functions
npm install; npm run build; firebase serve
/*
functions
  Watching "C:\github\vue\projects\firebase-02\functions" for Cloud Functions...
hosting
  Serving hosting files from: public
  Local server: http://localhost:5000
functions[us-central1-helloWorld]: 
  http function initialized 
    http://localhost:5000/firebase-test-project-2/us-central1/helloWorld
*/
```

### view the project

navigate to these urls to view the project

- http://localhost:5000
- http://localhost:5001/firebase-test-project-2/us-central1/helloWorld 

```
Hello from Firebase!
```

### add hot reloading of cloud functions

```js
// navigate to root folder
cd ..
// follow defaults
npm init
// add libraries
yarn add typescript concurrently
```

add script to `package.json`

```json
{
  "name": "firebase-02",
  "version": "1.0.0",
  "description": "- [vue-firebase-02](#vue-firebase-02)\r   - [contents](#contents)\r   - [introduction](#introduction)\r   - [reference](#reference)",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "serve": "cd ./functions && yarn serve"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "concurrently": "^7.0.0",
    "typescript": "^4.5.4"
  }
}
```

now run everything, from the root folder this time

```js
yarn serve
```
navigate to 
- http://localhost:4000
- http://localhost:4400
- http://localhost:5000
- http://localhost:5001/firebase-test-project-2/us-central1/helloWorld 



