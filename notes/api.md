# api

## contents

- [api](#api)
  - [contents](#contents)
  - [introduction](#introduction)
  - [http get](#http-get)


## introduction

this aims to help the user understand how to create and use api commands with vue

## http get

Using a for loop to extract data from a JSON object into an array 

```js
fetchData(){ 
  console.log('Getting Data'); 
  this.$http.get('https://vue-06-38517.firebaseio.com/data.json') 
  .then( response => { 
  console.log(response); 
  console.log(response.body); 
  console.log(this.users); 
  return response.json(); 
  }) 
  .then( data=>{ 
  console.log(data); 
  const resultArray = []; 
  for (let key in data){ 
  resultArray.push(data[key]); 
  this.users=resultArray; 
  } 
}); 
```