# firebase

## contents

- [firebase](#firebase)
  - [contents](#contents)
  - [introduction](#introduction)
  - [firebase config](#firebase-config)

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
 