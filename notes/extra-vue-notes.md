## VUE 

*Note - these are older notes and should be deleted/decremented over time in favour of more recent and up-to-date notes*

## Contents

- [install vue-cli](#install-vue-cli)
- [create a new project using the "webpack" template](#create-a-new-project-using-the-webpack-template)
- [install dependencies and go!](#install-dependencies-and-go)
- [in the page URL](#in-the-page-url)


 
First vue app 
 
<template><div id="App"></div></template> 
export default{} 
 
Main.js 
import Vue from 'vue' 
import App from './App.vue' 
new Vue({ el:'#App', render: h=h(App) }) 
 
Whatever is in <div id="app" now gets overwritten 
 
 
 
 
 
 
Critical building blocks of a VUE app 
 
index.html 
package.json 
 
 
src 
 
App.vue 
 
 
main.js 
 
assets 
logo.png 
components 
component01.vue 
router 
index.js 
 
 
 
 
 
 
 
Adding Bootstrap To Vue 
 
Note : VSCode has this extension for Bootstrap intellisense 
 
https://marketplace.visualstudio.com/items?itemName=octref.vetur 
 
 
 
 
Vue With Bootstrap - using vue-cli 
 
npm install bootstrap-vue 
 
vue init bootstrap-vue/webpack-simple my-project 
 
 
 
 
Vue and Bootstrap - using direct links  
 
<!-- Add this to <head> --> 
<link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap/dist/css/bootstrap.min.css"/> 
<link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css"/> 
 
<!-- Add this after vue.js --> 
<script src="//unpkg.com/babel-polyfill@latest/dist/polyfill.min.js"></script> 
<script src="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.js"></script> 
 
 
 
 
 
 
 
 
Global variables 
 
var globalVariable = 0; 
Vue.component(.....  return { value:globalVariable } ) 
 
 
Can also have local components 
export default {}  : use when this is the only export 
thisNameHere = this-name-here 
item1:item1 can be replaced with just item1   ! 
<style> 
<style scoped> is local style 
Props = properties can be set outside a component but brought in 
export default { props: [ 'name' ]   }  then can access {{name}} in child component 
Events this.$emit('customEventName','customEventMessage'); in child component.  Listen in parent for <component-name @customEventName="myProperty=$event">	$event holds data passed.  See lab_06 working VUE CRUD APP 
Sending data round your app 
$emit  
Callback 
Event Bus 
VueX 
 
 
 
EventBus = Service  : declare before Vue instance with 
EventBus : export const eventBus = new Vue(); 
EventBus : emitter : import {eventBus} from './main.js' 
EventBus : emitter : eventBus.$emit(...) 
EventBus : listener : created(){ eventBus.on('thisEvent', (eventData)=>{}   } 
 
EventBus : put methods in main declaration 
EventBus : export const eventBus = new Vue({   
methods:{ 
Dothis(data){ this.$emit('name', data } 
} 
}); 
EventBus : call eventBus.doThis(data); and listen for $on('name') 
 
vue-resource   this.$http.get('https://vue-06-38517.firebaseio.com/data.json') 
vue-resource   .then(response => { return response.json()  } 
 
 
Arrays : parsing : for (let key in data) { // use key and data[key]  } 
 
Post appends 
Put overwrites 
 
Lodash : npm install vue-lodash 
Lodash : import VueLodash from vue-lodash 
Lodash : Vue.use(VueLodash) 
 
babel 'transpiles' es6 to es5 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Vue/Angular/React 
 
VueJS  
AngularJS 
ReactJS 
 
VueJS core is 16kb 
 
Runtime : fast : can beat Angular and React 
 
 
 
IDE 
JSFiddle 
VS Code 
Sublime 
 
 
Web Keyboard Shortcuts 
Script TAB will add the <script></script> so very nice … 
div#app will create a div id = app as well 
 
 
 
 
CDN 
<script src="https://unpkg.com/vue@2.5.16/dist/vue.js"></script> 
Or remove the version to always get the latest 
<script src="https://unpkg.com/vue/dist/vue.js"></script> 
 
 
 
 
 
 
 
 
 
Vue Instance 
 
 
New VUE instance created with 
 
new Vue({ 
  el: ''#app"        	// this id will be the ocntainer and everything in it will fall under Vue's control 
  data :  { 
title: 'some text' 
  } 
}); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Adding input 
 
 
 
this keyword gives us access to all global data properties and global methods 
 
 
changeTitle:function(event){}   // notice the event object is the default event object created in regular Javascript and here is passed by default into this method 
 
event.target will be the input field where the event happens 
 
event.target.value is the value of the input field where the event happens, in this case the input event 
 
 
{{ }} is called 'string interpolation' 
 
Vue will take the instructions given and then render its own version of html as the output which is why we don't see any vue code in the rendered html 
 
anything in the 'data' object can be accessed with the raw name from our html eg 
 
data: {  title: 'x' }  can be reached in html as <p>{{title}}</p> 
 
Also raw methods can be accessed from raw html like this 
 
methods: {  doThis: function(){ return 'hi'; }  }  called by <p>{{ doThis() }}</p> 
 
 
We can't use {{ }} inside any HTML attribute eg <a href="{{ link }}">Go here</a>  does not work 
Instead use v-bind ie <a v-bind:href="link">Go Here</a> to go to a dynamic link 
 
Directive is an instruction to vuejs  
 
v-bind:href="link" 
v-once  sets value only once  <p v-once>{{ title }}</p> 
 
 
Rendering HTML 
By default Vue only renders plain text 
If it is desired to render HTML then we must do this 
 
	<p v-html="someLink"></p> 
 
 
 Multiple VUE instances 
 
 	It is possible to have multiple vue instances 
 
 	<div id="1"> 
 	<div id="2"> 
 
 	new Vue({el:"1"}); 
 	new Vue({el:"2"}); 
 
 
 
 Here is all the source code to this point (Vue_02) 
 
 <!DOCTYPE html> 
<html> 
<head> 
<title>VUE 02 : Input</title> 
</head> 
<body> 
<div id="app"> 
<input type="text" name="input01" v-on:input="changeTitle"> 
<p v-once>{{ title }}</p> 
<p>{{ sayHello() }}</p> 
<p>Link is <a v-bind:href="link">BBC</a></p> 
<p>This other link is {{ htmlLink }}</p> 
<p v-html="htmlLink"></p> 
</div> 
<div id="exercise"> 
<p>VUEjs is pretty cool - {{ name }} is age {{ age }}</p> 
<p>Age x 3 is {{ ageTimesThree() }}</p> 
<p>Random number between 1 and 100 is {{ generateRandom() }}</p> 
<img v-bind:src="imageLink"> 
</div> 
 
<script src="https://unpkg.com/vue/dist/vue.js"></script> 
<script> 
new Vue({ 
el:'#app', 
data: { 
title: 'hello world', 
link: 'http://www.bbc.co.uk', 
htmlLink: "<a href='http://www.bbc.co.uk'>BBC</a>", 
}, 
methods:{ 
changeTitle: function(){ 
this.title = event.target.value; 
}, 
sayHello: function(){ 
return this.title + ' ... Hello World'; 
} 
} 
}); 
new Vue({ 
el:'#exercise', 
data: { 
name: 'phil', 
age: 22, 
imageLink: "https://source.unsplash.com/random/400x400" 
}, 
methods:{ 
ageTimesThree: function(){ 
return (this.age * 3) 
}, 
generateRandom: function(){ 
return Math.floor(100*Math.random()); 
} 
} 
}); 
</script> 
</body> 
</html> 
 
 
 
 
 
 
 
 
 
 
 
 
Events 
v-on:click="doThis" 
v-on:mousemove="doThat" 
 
event coordinates held in event.clientX/Y  so this.x = event.clientX; for example 
 
 
 
Methods can be called with an argument 
v-bind:click="doThis(22)" 
 
If we use parameters and also want to use the event object we must call $event in the calling parameter but only use event in the receiving method declaration 
 
v-bind:click="doThis(22,$event)"    
doThis:function(factor,event){ .. use factor and event in code } 
 
 
event.stopPropogation - can use to stop an event being notified eg  
<span v-on:click="doNothing"> 
doNothing:function(){ event.stopPropagation(); } 
 
 
event modifiers can be used to modify the behaviour of an event 
 
<span v-on:mousemove.stop="">   	stops propogation of any event upwards 
 
<span v-on:mousemove.prevent="">   stops propogation of default event upwards 
 
 
key modifiers 
 
<input type="text" v-on:keyup.enter/tab/esc/space="alertMe">  (can chain with .enter.space) 
alertMe: function(){ 
alert ('you hit the enter or space key') 
} 
 
 
Events without using a function ie using inline code 
 
Can code events using inline code only 
 
<input type="text" v-on:keyup="value=$event.target.value"> 
 
 
So we can implement trivial javascript inline for anything we want eg 
 
<button v-on:click="counter++">Click to increment</button>  where counter is a data item 
 
Use of {{ }} string interpolation 
 
This region can also be used to contain trivial javascript code eg  
 
{{ counter * 2 }}  
 
 
v-model : sets up 2-way data binding 
 
<input v-model="myfield"> 
 
 
 
 
 
 
 
 
Watch 
 
data : holds static items 
methods : always re-calculated regardless if it's needed or not.  Does not cache results and always recalculates every 
time the DOM gets updated 
computed : used like a property and not like a method.  Code only gets run if it's needed ie if there is a property 
  in there which directly is affected.  Caches results and only recalculates if necessary. 
watch : can specify one of the data properties which we want to react to when its value changes 
 
watch:{ 
dataitem1:function(){ 
  // do this when dataitem1 changes 
} 
 
} 
 
 
Note : because watch is dealing with asynchronous items we must store the value of this 
 
watch:{ 
watchThisValue: function(value){ 
var vm = this; 
setTimeout(function(){ 
vm.watchThisValue = 0; 
},4000); 
} 
}, 
 
 
 
 
 
methods vs computed vs watch 
 
computed uses caching so best practice to always use computed properties given the choice 
 
but ! computed properties run synchronously. 
 
So for asynchronous tasks use watch!!! 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Dynamic CSS 
 
:class allows us to dynamically bind using VueJS 
 
use true/false to toggle a class being active or not 
 
:class="{redBlock:true}"  or can even make true a variable ie 
:class="{redBlock:goRed}"  so can toggle goRed as true/false etc 
 
 
 
Example 
 
<div id="dynamicCSS"> 
<fieldset> 
<h1>Dynamic CSS Styling</h1> 
<div class="divBlock" @click="goRed=!goRed" :class="{redBlock:goRed}"></div> 
<div class="divBlock" @click="goBlue=!goBlue" :class="{blueBlock:goBlue}"></div> 
<div class="divBlock" @click="goGreen=!goGreen" :class="{greenBlock:goGreen}"></div> 
<div class="divBlock"></div> 
</fieldset> 
</div> 
<style> 
.divBlock{ 
width:100px;height:100px;border:1px solid black;margin:10px;float:left;display:inline-block; 
} 
.redBlock{ 
background-color: red; 
} 
.greenBlock{ 
background-color: green; 
} 
.blueBlock{ 
background-color: blue; 
} 
</style> 
<script> 
new Vue({ 
el:'#dynamicCSS', 
data:{ 
goRed:false, 
goBlue:false, 
goGreen:false 
}, 
methods:{}, 
computed:{}, 
watch:{} 
}); 
</script> 
 
 
 
 
Computed CSS 
 
We can also compute CSS properties 
 
.computed{ 
divClasses:function(){ 
Return { 
redBlock: this.goRed, 
blueBlock: this.goBlue 
} 
} 
} 
 
 
Example 
 
<div id="dynamicCSS"> 
<fieldset> 
<h1>Dynamic CSS Styling</h1> 
<div class="divBlock" @click="goRed=!goRed" :class="{redBlock:goRed}"></div> 
<div class="divBlock" @click="goBlue=!goBlue" :class="{blueBlock:goBlue}"></div> 
<div class="divBlock" @click="goGreen=!goGreen" :class="{greenBlock:goGreen}"></div> 
<div class="divBlock" @click="goRed=!goRed" :class="toggleRedBlue"></div> 
</fieldset> 
</div> 
<style> 
.divBlock{ 
width:100px;height:100px;border:1px solid black;margin:10px;float:left;display:inline-block; 
} 
.redBlock{ 
background-color: red; 
} 
.greenBlock{ 
background-color: green; 
} 
.blueBlock{ 
background-color: blue; 
} 
</style> 
<script> 
new Vue({ 
el:'#dynamicCSS', 
data:{ 
goRed:false, 
goBlue:false, 
goGreen:false 
}, 
methods:{}, 
computed:{ 
toggleRedBlue:function(){ 
return { 
redBlock: this.goRed, 
blueBlock: !this.goRed 
} 
} 
}, 
watch:{} 
}); 
</script> 
</body> 
</html> 
 
 
 
 
Dynamic CSS using names 
 
Can dynamically set which class should be added or removed 
 
<input v-model:"cssColour"> 
<div :class="cssColor" 
Data: cssColour:'' 
 
Example 
 
<input type="text" size="50" v-model="cssColour" placeholder="Type blueBlock, greenBlock or redBlock"> 
<div class="divBlock" :class="cssColour"></div> 
 
Data: { 
cssColour:'greenBlock' 
} 
 
 
Array of CSS Classes 
We can also set an array of classes 
<div class="divBlock" :class="[cssColour,{redBlock:goRed}]"></div> 
  Note : with the array the first item has priority and so on so the second item will only be set if it does not conflict with the first item, or the first item has not been set in which case the second item can set the class if it has been set 
 
 
Setting CSS inline 
 
 
Inline CSS is possible with 
 
:style="{backgroundColor:color}" 
 
Where color is a data property 
 
    <fieldset> 
        <h1>Setting CSS with Inline CSS : raw colour typed into input box</h1> 
        <input type="text" v-model="rawColor" placeholder="Type raw colour in this box"> 
        <div class="divBlock" :style="{backgroundColor:rawColor}">This colour is set by inline 
                     	VUE CSS styling</div>     
    </fieldset> 
 
 
Setting CSS With a Computed Inline Style Object (multiple CSS items set at once) 
 
    <fieldset> 
        <h1>Setting CSS with a computed function eg colour and width</h1> 
        <input type="text" v-model="divColor" placeholder="Type raw color in this box"> 
        <input type="number" v-model="divWidth"> 
        <p>Box has colour {{divColor}} and width {{divWidth}}</p> 
        <div class="divBlock" :style="userStyle">This style set by user</div> 
    </fieldset> 
 
        data:{ 
            rawColor:'blue', 
            divColor:'green', 
            divWidth: '300' 
        }, 
 
        computed:{ 
            userStyle:function(){ 
                return { 
                    backgroundColor:this.divColor, 
                    width:this.divWidth + 'px' 
                } 
            } 
 
 
 
 
 
Show/Hide 
 
<div id="showhide"> 
    <fieldset> 
        <h1>Showing and hiding elements</h1> 
        <button @click="toggleVisible">Click to show and hide the element</button> 
        <div :style="divStyle" v-if="show"></div> 
    </fieldset> 
</div> 
<script> 
    new Vue({ 
        el:'#showhide', 
        data: { 
            show:false, 
        }, 
        methods:{ 
            toggleVisible:function(){ 
                console.log('toggling element'); 
                this.show = !this.show; 
            } 
        }, 
        watch:{}, 
        computed:{ 
            divStyle:function(){ 
                return { 
                    width:'200px', 
                    height:'200px', 
                    backgroundColor:'green' 
                } 
            } 
        } 
    }); 
</script> 
 
 
V-if really removes items from the DOM - they are genuinely not there 
 
 
V-else can do the opposite of the v-if 
 
 
<template>  can be used as an invisible container to which we can attach v-if show/hide DOM elements 
 
V-show and v-hide 
 
This keeps the element in the DOM but just it's invisible with display:none 
 
 
Unordered List 
 
<div id="dynamicLists"> 
    <fieldset> 
        <h1>v-for allows us to loop through an array</h1> 
        <ul> 
            <li v-for="item in items">{{item}}</li> 
        </ul> 
    </fieldset> 
</div> 
<script> 
    new Vue({ 
        el:'#dynamicLists', 
        data:{ 
            items:['first','second','third'] 
        } 
    }); 
</script> 
 
 
 
Getting the index in an unordered list 
 
<div id="dynamicLists"> 
    <fieldset> 
        <h1>v-for allows us to loop through an array</h1> 
        <ul> 
            <li v-for="(item,index) in items">{{index}} - {{item}}</li> 
        </ul> 
    </fieldset> 
</div> 
<script> 
    new Vue({ 
        el:'#dynamicLists', 
        data:{ 
            items:['first','second','third'] 
        } 
    }); 
</script> 
 
 
 
(note : can use <template> item to render item with index) 
 
 
 
v-for loop 
 
v-for="item in array" 
within the loop, use item.value to extract data  
v-for="(item,key) in array"  can also extract the index 
 
<div id="dynamicObjects"> 
    <fieldset> 
        <h1>Looping through an object</h1> 
        <ul> 
            <li v-for="person in persons">{{ person.name }} is age {{ person.age }} 
                <div v-for="(value,key) in person">{{ key }} : {{ value }} </div> 
            </li> 
        </ul> 
    </fieldset> 
</div> 
 
<script> 
    new Vue({ 
        el:'#dynamicObjects', 
        data:{ 
            persons:[ 
                { name: 'phil', age: 21 }, 
                { name: 'bob', age: 33  } 
            ] 
        } 
    }); 
</script> 
 
 
 
 
 
v-for fixed loop counting eg 1 to 10 
 
V-for can be used to trivially count up to a number eg 
 
<div v-for="n in 10">{{n}}</div> 
 
 
 
 
 
 
 
Updating An Array : Pushing New Items To Array 
 
<div id="addToArray"> 
    <fieldset> 
        <h1>push : Add To Array Of Objects and re-display</h1> 
        <div v-for="(person,index1) in people">Person {{ index1 }} :  
            <div v-for="(value,key,index2) in person">{{index2}} - {{key}}:{{value}}</div> 
        </div> 
        <button @click="pushToArray">Add Object To Array</button> 
        <div>Name:<input v-model="personName"></div> 
        <div>Age:<input v-model="personAge" type="number"></div> 
    </fieldset> 
</div> 
<script> 
    new Vue({ 
        el:'#addToArray', 
        data:{ 
            people:[ 
                {name:'phil',age:22}, 
                {name:'bob',age:37} 
            ], 
            personName:'Tommy', 
            personAge:55 
        }, 
        methods:{ 
            pushToArray:function(){ 
                this.people.push({name:this.personName,age:this.personAge}); 
            } 
        } 
    }); 
</script> 
 
 
 
 
Forcing An Array To Store Each Item As An Individual Object 
 
Use :key="person"   (same as v-bind:key="person") to uniquely index the array and also bind each item individually within the array so we can track changes 
 
 
        <div v-for="(person,index1) in people" :key="index1">Person {{ index1 }} :  
            <div v-for="(value,key2,index2) in person" >{{index2}} - {{key2}}:{{value}}</div> 
        </div> 
 
 
 
 
 
 
 
 
 
 
Multiple Vue instances 
 
It's possible to have multiple Vue instances.   
 
We can store vue instances in a variable 
 
Var vm1 = new Vue(); 
Var vm2 = new Vue();   
 
We can access vm instance data externally eg vm1.title = "hi' 
 
This also works with methods eg vm1.doThis(); 
 
Note : we can add fields to vm1 eg vm1.newField='hi' but it won't be part of the vm1 instance that is being watched, so will only be accessible as a static property 
 
Note that items in data can also be accessed with vm1.$data.field01 
 
 
 
 
 
 
 
Global Objects : Pass data to vue instances  
 
It is possible to create a global object OUTSIDE OF VUE but then pass it into the Vue Data object  
 
Eg 
 
Var globalData = { item1:'test' } 
 
And inside Vue instance 
 
Data : globalData 
 
 
$el holds element object 
$data holds  
 
 
  
$refs 
 
<button ref="myButton"> 
 
Can call eg from a method 
Console.log(this.$refs)  will output the button object 
 
So we can use it a bit like a javascript id 
 
So we can now update HTML elements from our methods like 
 
This.$refs.myButton.innerText = "Show This"  then the button text will change to "Show This" 
 
These are also globally available, for example 
 
From raw javascript code (outside vue code) can write 
 
$vm1  (this is our vue instance) 
 
$vm1.$refs.myButton.innerText == >we can change the element directly in the DOM, but we are not changing the underlying template in VueJS 
 
So : warning : $refs can change items in the DOM but not in our VueJS instance. 
 
 
 
$mount 
 
$mount('#app') can be used instead of 
 
New Vue({ 
El:'#app', 
}); 
 
 
 
 
 
 
 
 
Template 
 
Var vm3 = new Vue({ 
 
Template: '<h1>hi</h1>'; 
 
}); 
 
We can now mount this template inside any div 
 
<div id="app3"></div> 
 
Vm3.mount('#app3');  and the template code html will now appear inside our Div in the DOM 
 
 
<div id="template01"> 
</div> 
<script> 
    var vmTemplate = new Vue({ 
        template:'<fieldset><h1>This is generated from a template</h1></fieldset>' 
    }); 
    vmTemplate.$mount('#template01'); 
</script> 
 
 
 
 
 
 
 
 
 
 
Components (Module 90) 
 
Components are reusable templates which may be inserted in multiple vue instances 
 
Vue.component(); will create such a reusable component which can then be inserted into multiple vue instances 
 
Vue.component('component01',{ 
Template:'<h1>Hello</h1>' 
}); 
 
Now can enter this into HTML thus: 
 
<div id="x"> 
<component01></component01 
</div> 
 
Will now render 'hello'  
 
 
Also can do 
 
Vue.component('name',{ 
data:function(){ 
return{ 
field01: 'value' 
} 
}, 
template: '<p>Hello {{field01}} </p>' 
} 
 
 
Summary : templates vs 'el' 
 
el: … is the normal way to create templates as we can write full html code 
 
template : is another way of doing this but has limitations in that it's only a string so can't really do multiline very well with templates. 
 
 
 
 
 
 
 
Component Instances With Unique Data Per Component Instances 
 
see component-03-data example 
 
Create each component but inside each component reference a data object 
 
vue.component('...',{ 
data:function(){ 
this.field01:'some data' 
} 
}) 
 
now this.field01 will be unique to each component instance 
 
if you want data the same across all components, it can also be stored in the new Vue({}) instance 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Versions of Vue 
 
Standard version with built in compiler 
 
Other version has the compiler removed; we have to compile stuff ourselves with a manual build 
 
 
 
Virtual DOM 
 
Updating the REAL DOM is VERY SLOW 
Updating Javascript and the Virtual DOM (created and managed in Javascript) is VERY FAST! 
 
VueJS updates Virtual DOM (fast) which then updates Real DOM 
 
 
VueJS Instance Lifecycle 
 
new Vue() constructor 
 
beforeCreate() : initialises data and events 
Create instance 
Created() method 
Compile template 
beforeMount()   before mounted to real DOM 
mount to DOM 
 
re-rendering lifecycle 
 
data changes 
beforeUpdate() 
re-render DOM 
mounted to DOM  and cycle back to any data changes 
updated()	after update 
 
destroying an instance 
 
beforeDestroyed() 
Destroy 
destroyed()   after destroyed 
 
new Vue({ 
el:'', 
data:{}, 
beforeCreate: function(){}, 
created: function(){}, 
beforeMount:function(){}, 
mounted:function(){}, 
beforeUpdate:function(){}, 
updated:function(){}, 
beforeDestroyed:function(){}, 
destroyed:function(){} 
}) 
 
 
 
 
Destroying an instance 
 
new Vue({ 
el:"", 
data:{}, 
methods:{ 
destroy: function(){ 
this.$destroy();  	will destroy the current vue instance 
} 
} 
 
}); 
 
 
 
 
Updating the DOM 
 
the beforeUpdated() and updated() methods do not get called if there is no real change to the real DOM ie if we try and change something but it's already been changed. 
 
 
 
VUE Cli 
 
Development Workflow 
 
Code ==>  
 
Single File Templates 
Case Insensitive Component Selectors 
PreProcessor eg Babel or SASS 
 
==> Production Server ==> User 
 
Build : ES6 compiles to ES5 
 
Development Server 
 
So can test out via http:// 
 
If we use the development workflow we can compile the code, so get rid of the compiler when we ship the code to the production server.  This also can bundle together the code, to make it much smaller when bundling to production server 
 
 
Workflow can be set up via Webpack if we wanted. 
 
Vue CLI sets things up for us and allows us to fetch templates 
 
npm install -g vue-cli 
 
We can choose from templates 
Simple/webpack-simple/webpack/browserify/browserify-simple 
 
 
(have to install Node and NPM first) 
 
$ npm install -g vue-cli 
$ vue init webpack-simple my-project 
 
init = initialise a new project 
 
$ cd my-project 
$ npm install 
$ npm run dev and view at http://localhost:8080 
 
 
 
 
 
 
Vue-cli folder structure 
 
 
src = source code 
App.vue - this is our main vue file 
 
index.html is actually the file which is served up!!! 
script src = dist/build.js  ==> this is the vue application which has been built by webpack 
package.json 
dependencies : production 
devDependencies : build environment 
webpack config : builds everything 
 
 
Vue Files 
 
 
.vue 
 
main.js is the first file to be executed when the built bundle gets run 
 
 
App.vue 
 
can strip it back to bare bones!!! 
 
<template> 
<h1>Vue Labs</h1> 
</template> 
<script> 
export default { 
} 
</script> 
<style> 
</style> 
 
 
in Main.js we then 'render' 
 
import Vue from 'vue' 
import App from './App.vue' 
new Vue({ 
el: '#app', 
render: h => h(App) 
}) 
 
 
When rendering we overwrite what is in #app div and replace it with the output of App.vue file 
 
 
 
 
export default { 
 
in here we can put 
 
data:{}, 
methods:{}  etc 
 
} 
 
 
 
Lecture 86 
 
npm run dev : builds for dev testing : not minified 
 
npm run build : builds for production as a minified application 
 
 
 
 
 
 
 
 
 
 
 
Components (Lecture 91) 
 
Extend the vue instance 
 
data object must be used as a function 
 
 
 
<div id="component02"> 
    <component02content></component02content> 
</div> 
<script> 
    Vue.component('component02content',{ 
        data: function(){ 
            return { 
                data01: ' Test data for component 02' 
            } 
        }, 
        template: '<fieldset><h1>Component02</h1><p>{{data01}}</p></fieldset>' 
    }); 
    new Vue({ 
        el:'#component02' 
    }); 
 
 
 
 
 
Using global Javascript variables in our Vue code 
 
we can easily add in our global Javascript variables into our Vue code (not asking if this is good practice at the moment!) 
 
<div id="component02"> 
    <component02content></component02content> 
</div> 
<div id="component03"> 
    <component02content></component02content> 
</div> 
<div id="component04"> 
        <component02content></component02content> 
</div> 
<script> 
 
    var globalCount = 0; // global 
 
    Vue.component('component02content',{ 
        data: function(){ 
            globalCount++; 
            return { 
                data01: ' Test data for reusable component', 
                count: globalCount 
            } 
        }, 
        template: '<fieldset><h1>Components : Reusable code </h1><p>Component Re-use {{count}}</p><p>{{data01}}</p></fieldset>' 
    }); 
    new Vue({ 
        el:'#component02' 
    }); 
    new Vue({ 
        el:'#component03' 
    }); 
    new Vue({ 
        el:'#component04' 
    }); 
     
</script> 
 
 
 
Changing data globally in a component, for all instances 
 
If we have a global object we can change it from any component 
 
(this may be incorrect best practice but just illustrating it anyway) 
 
<div id="component05"> 
    <component05content></component05content> 
</div> 
<script> 
    var globalDataObject = { 
        field01: 'fred', 
        field02: 'george' 
    } 
    var globalCounter02=0; 
    Vue.component('component05content',{ 
        data: function(){ 
            return globalDataObject; 
        }, 
        methods:{ 
            updateData:function(){ 
                globalCounter02++; 
                this.field01+= '_' + globalCounter02; 
            } 
        }, 
        watch:{}, 
        computed:{}, 
        template:'<fieldset><h1>Components : Global Data</h1><p><button @click="updateData">Update Data</button></p><p>{{field01}}</p><p>{{field02}}</p></fieldset>' 
    }); 
    new Vue({ 
        el:'#component05' 
    }); 
</script> 
 
 
 
Note : if we need unique instances of data we change code to suit 
 
data: function(){ 
            return { 
field01:'fred'  	// this will now be component instance data 
} 
        }, 
 
 
Global and Local Components (Lecture 93) 
 
Global components 
 
Vue.component ('mycomponent',{})  registers component globally 
 
 
 
Local components 
 
 
var myComponent = {   } 
 
new Vue({ 
components:{ 'myComponent': myComponent } 
}) 
 
registers a component locally within that one Vue instance only 
 
see component-04-as-variable/index.htm 
 
 
 
 
What we have seen so far is global registering of components 
 
Vue.component('component_name',{   data:{}, methods:{}, template: 'string'}); 
 
 
Components can also have methods etc 
 
var component01 = { 
data:{}, 
methods:{}, 
template:'some string' 
}; 
 
and use it  
 
<div id="app"> 
<component01></component01> 
</div> 
 
 
 
 
<div id="local-component-01"> 
    <local-component-content></local-component-content> 
</div> 
<script> 
    var localComponent = { 
        data:function(){ 
            return { 
                field01:'component data' 
            } 
        }, 
        template:'<fieldset><h1>Components : Local</h1><p>Here is some some <strong>{{field01}}</strong> data</p></fieldset>' 
    }; 
    new Vue({ 
        el:'#local-component-01', 
        components:{ 
            'local-component-content':localComponent 
        } 
    }); 
</script> 
 
 
 
 
 
Render 
 
Templates are quite restrictive because they have to be a string 
 
new Vue({ 
el:'#app", 
template:'<p>test</p>' 
}) 
 
A better way is by using render 
 
new Vue({ 
el:'#App', 
render: h => h(App) 
}) 
 
where we now import App thus: 
import App from './App.vue'   
 
 
see render-01 
 
 
Root Components (Lecture 94) 
 
starting with render-01 we have the default App.vue as the root component 
 
 
Creating Sub Components (Lecture 95) 
 
vue init webpack-simple... 
npm install 
npm run dev 
 
Create Home.vue 
 
see component-05-sub project 
 
Register Home.vue in main.js with 
 
import 'Home' from './Home.vue' 
Vue.component('home-component',Home) 
 
We can now use the component from our root App.vue file 
 
<home-component></home-component> 
 
 
 
 
 
 
Importing And Exporting Items 
 
When exporting items if we export default {} object then when we import it we can call it whatever we want 
 
export default {} in ThisFile.vue 
 
in main.js 
 
import whatever-name from 'ThisFile.vue' 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Templates 
 
 Bear in mind templates can only have one root element 
 
<template> 
<div> 
<p> 
<p>.. etc 
 
 
 
 
Templates In Compiled Code 
 
export default {}     	use default when it's the only export in this file.  Also means that can choose any name when importing it into main.js 
 
 
 
 
 
 
 
 
Methods can be written  
 
method01:function(){} 
 
also 
 
method02(){} 
 
 
 
 
 
 
Components : Importing 
 
We can import components into our code locally also 
 
Components Folder 
 
Move components to \src\components folder 
 
 
 
 
 
Use of camelCase and dash-cash naming  (lecture 99) 
 
Note that Vue can automatically make available both types of naming eg 
 
thisNameHere is also available as this-name-here 
 
also note : when creating an object in es6 it is valid to only have the key if the value is going to be the same eg replace item1:item1 with just item1 
 
 
 
 
CSS Styling 
 
<style> by default has global scope 
 
<style scoped> will only style this component only 
 
 
 
 
Communicating Between Components 
 
Props = properties (this is from react) - can be used to set properties from outside of a component, and bring them into this component 
 
The way we do this is in the child component, export  
 
export default{ 
props: [ 'name' ] 
} 
 
In our child component we can then use {{name}} to access this field 
 
In the parent component, we can get/set this data field by  
 
<child-component :fieldName="dataItem"></child-component> 
 
where in the parent component we code 
 
export default{ 
 
data : function(){ 
 
return { 
dataItem: 'some data stored here' 
} 
 
} 
 
} 
 
When we do this, then we can set data from the parent into the child 
 
 
Note : case sensitive Prop names are only valid for small template applications 
 
props field names can be accessed in other methods etc simply by using the this prefix, as with other data items. 
 
 
Validating Props 
 
Props can be validated to define them as a particular object type 
 
props { 
myName[String,Array]  these are the 2 valid types  
or with a single type 
myName:String 
} 
 
we can even add in more detail by passing as an object 
 
props{ 
myName{ 
type:String, 
required:true, 
default:xxx 
} 
} 
 
 
 
Sending data from the child to the parent component 
 
 
We will have to emit a custom event 
 
In the child we emit a new event 
 
this.$emit('customEventName','custom event data');   (vueJS method) 
 
In the parent we can listen 
 
<component-name @customEventName="myProperty=$event"> 
 
where $event will hold the custom event data passed from the emitter 
 
 
Working VUE CRUD App which I built myself (stores to local data storage!) 
 
see Lab06.vue!!! 
 
 
 
 
 
Communication 
 
Parent to child and child to parent, but not child to child 
 
(We can even pass callback as a prop - Lecture 111) 
 
Lecture 112 talks about 3 methods to communicate 
 
$emit event to send messages between components 
Callback : pass a pointer 
Event Bus 
Not dealt with here but advanced : can have VUEX to deal with STATE OF PROPERTIES ACROSS AN APPLICATION - easily! 
 
 
 
 
 
 
 
 
 
 
 
Event Bus = Services 
 
We use a central 'service'  
 
In main.js we declare a new Vue instance (before our existing vue instance) 
 
export const eventBus = new Vue();  
 
In our emitter we now code 
 
eventBus.$emit('someEvent','someData'); 
 
 
In our listener we now code 
 
import {eventBus} from './../main.js'      
 
created(){ 
eventBus.$on('someEvent', (eventData) => { 
// do something with eventData 
}); 
} 
 
 
Parent 
 
 
<template> 
<div> 
<h1>This is the parent component</h1> 
<div>Data from Child : {{dataFromChild}}</div> 
<lab-07-component-child @childEmitterEvent="dataFromChild=$event"></lab-07-component-child> 
</div> 
</template> 
<script> 
import Lab07ComponentChild from './Lab07ComponentChild.vue'; 
import { eventBus } from './main.js' 
export default { 
components:{ 
'lab-07-component-child':Lab07ComponentChild 
}, 
data:function(){ 
return { 
dataFromChild:'none received yet' 
} 
}, 
created(){ 
eventBus.$on('childEmitterEvent',(data)=>{ 
this.dataFromChild += data; 
}); 
} 
} 
</script> 
<style scoped> 
div{ 
border:2px solid black; 
background-color:rgb(179, 209, 209); 
margin:50px; 
} 
</style> 
 
 
 
 
Child 
 
 
<template> 
<div> 
<h1>This is the child component</h1> 
<button @click="emitEvent" type="button">Emit Event</button> 
</div> 
</template> 
<script> 
import {eventBus} from './main.js' 
export default { 
methods:{ 
emitEvent(){ 
eventBus.$emit('childEmitterEvent','Data emitted from child'); 
} 
} 
} 
</script> 
<style scoped> 
div{ 
border:2px solid black;  
margin:30px;  
background-color: rgb(207, 231, 231); 
} 
</style> 
 
 
 
We can now emit and listen for events 
 
 
 
Practical example of eventBus in attendance-01 app (note that I am not sure this is the best way to implement this, but it works) 
 
main.js 
 
export const eventBus = new Vue() 
 
//initial status 
vm1.onLine = navigator.onLine 
 
// emit initial status to component 
eventBus.$emit('onlineStatus', vm1.onLine) 
 
 
function updateConnectionStatus(){ 
vm1.onLine = navigator.onLine 
eventBus.$emit('onlineStatus', vm1.onLine) 
if(vm1.onLine == false) { 
console.log('connection has gone offline') 
} 
if(vm1.onLine == true) { 
console.log('connection has gone online') 
} 
} 
 
 
window.addEventListener('online',updateConnectionStatus) 
window.addEventListener('offline',updateConnectionStatus) 
 
 
 
component 
 
eventBus.$on('onlineStatus',function(data){ 
console.log('online status is ' + data) 
this.onLine = data 
})  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Created 
 
along with data, methods etc we can use the one-off item 'created'  
 
 
 
export default { 
 
created(){ 
 
} 
} 
 
 
 
ES6 syntax 
 
instead of  
 
created:function(){} we can use 
created(){}  - much simpler! 
 
 
 
Adding Methods to eventBus Vue instance 
 
We can put our emit events actually inside the vue instance 
 
export const eventBus = new Vue({ 
 
methods:{ 
doThis(data){ 
this.$emit('newEvent',data); 
} 
} 
 
}); 
 
We can now call this anywhere with  
 
eventBus.doThis(data) 
 
 
and listen as before with the $on(newEvent...)    
 
 
 
 
 
 
 
 
 
 
 
Connecting Vue to http using Firebase 
 
New project 
 
Working from lecture 209 in Section 15 
 
Installing a new project at  
 
Using this page 
 
https://vuejs.org/v2/guide/installation.html 
 
# install vue-cli 
$ npm install --global vue-cli 
# create a new project using the "webpack" template 
$ vue init webpack my-project 
# install dependencies and go! 
$ cd my-project 
$ npm run dev 
 
 
npm install --save vue-resource 
 
also in main.js 
 
import VueResource from 'vue-resource' 
Vue.use(VueResource) 
 
 
 
 
 
Using a for loop to extract data from a JSON object into an array 
 
{} into [] 
 
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
 
 
 
 
 
Post vs Put 
 
Post appends 
Put overwrites existing record 
 
 
 
 
 
 
 
 
 
 
Firebase Databases 
 
When we create a Firebase database we can detect if it's reachable 
 
You must specify your Realtime Database URL when initializing your JavaScript SDK. 
You can find your Realtime Database URL in the Database tab in the Firebase console. It will be in the form of https://<databaseName>.firebaseio.com. 
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
You're ready to start using the Firebase Realtime Database! 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
List Filtering With LoDash 
 
These notes are from 
 
https://nickescobedo.com/1018/introduction-to-vue-js-filtering-with-lodash 
 
Set up your page with 
 
Each Vue app requires a HTML element to bind with. Generally the HTML element is a div with a unique id attribute. In this example the Vue instance is bound to simple-filter. 
<div id="simple-filter"> 
	<ul> 
    	<li v-for="animal in animals">{{ animal }}</li> 
	</ul> 
</div> 
 
 
 
var app = new Vue({ 
	el: "#simple-filter", 
	data: { 
    	animals: ['Zebra', 'Lion', 'Shark', 'Dog', 'Bear', 'Monkey'] 
	} 
}); 
 
 
 
 
Lodash can be used with array functions like dynamic filtering 
 
Using this page for a guide we can do the following 
 
 
https://www.npmjs.com/package/vue-lodash 
 
 
 
For vue-lodash 2.x 
npm install --save vue-lodash 
And in your entry file: 
 
import Vue from 'vue' 
import VueLodash from 'vue-lodash' 
 
const options = { name: 'lodash' } // customize the way you want to call it 
 
Vue.use(VueLodash, options) // options is optional 
 
 
Usage: 
This wrapper bind lodash to Vue or this if you're using single file component. 
 
You can use lodash like this: 
 
// with name option 
Vue.myCustomName.random(20) 
this.myCustomName.random(20) 
 
// default (it works even with custom name) 
Vue._.random(20) 
this._.random(20) 
 
 
 
 
 
 
Dates with moment.js 
 
npm install vue-moment 
 
Vue.use(require('vue-moment')) 
 
 
 
 
 
Routing 
 
Can dynamically switch components which represent pages! 
 
npm install --save vue-router 
 
Add it to your application in main.js 
 
import VueRouter from 'vue-router' 
 
and 
 
Vue.use(VueRouter) 
 
 
Next create routes.js file 
 
import User from './components/User.vue' 
import Home from './components/Home.vue' 
 
export const routes = [ 
 
{ 
path: '', 
component: Home 
} 
 
{ 
path: '/user', 
component: User 
 
} 
 
] 
 
 
Now go back to main.js and import the routes file 
 
import { routes } from './routes' 
 
also 
 
Vue.use(VueRouter) 
const router = new VueRouter({ 
routes 
}) 
 
also inside new Vue() add in 
 
new Vue({ 
el:'#app', 
router 
}) 
 
 
 
import Vue from 'vue' 
import App from './App' 
import VueRouter from 'vue-router' 
import { routes } from './routes' 
Vue.config.productionTip = false 
Vue.use(VueRouter) 
const router = new VueRouter({ 
routes 
}); 
/* eslint-disable no-new */ 
new Vue({ 
el: '#app', 
router, 
components: { App }, 
template: '<App/>' 
}) 
 
 
 
Now create routes.js file 
 
import Home from './components/Home.vue'; 
import HelloWorld from './components/HelloWorld.vue'; 
import Component01 from './components/Component01.vue'; 
import Component02 from './components/Component02.vue'; 
export const routes = [ 
{ path: '/',component: Home}, 
{path:'/helloworld',component: HelloWorld}, 
{ path: '/component01', component: Component01 }, 
{ path: '/component02', component: Component02 } 
]; 
 
Now in App.vue we add the component 
 
<Component01/>  fixed component 
<router-view></router-view>  component on view depending on the route 
 
 
# in the page URL 
#/myPage  : this requests local data without going through to the server 
http://localhost:8080/#/page2 for example 
 
 
no # : each request gets sent to server 
 
we can set this in the router modes 
 
if we set in main.js 
 
const router = new VueRouter({ 
routes, 
mode : 'history' 
}); 
 
then this can remove the # from the page loads 
 
 
see vue-07-routing-01 for a working example of routing with vue scaffolding 
see vue-08-routing-02 for a working example of routing with Max and manual scaffolding 
see router-01 also for an example up to this point 
 
 
 
 
 
 
 
Router-Link 
 
Replaces <a href="...">  
 
<router-link to="/">Home</router-link> |  
<router-link to="helloworld">Hello World</router-link> 
 
 
 
 
 
Router Params Including ID 
 
We can set and use router params including the ID and use them when passing from page to page 
 
We can also watch for changes to the route and update code accordingly. 
 
See video 231 
 
 
 
 
 
 
 
 
 
 
 
Putting In Dynamic List Filtering With Lodash 
 
npm install --save lodash 
 
 
 
 
 
 
 
 
 
 
 
Deploying a VueJS Single Page Application To Amazon AWS 
 
Following lectures 300 onwards here 
 
We can use npm run build to convert our application to be ready to hit the web. 
 
This creates two files which are required 
 
index.html 
dist\build.js 
 
 
Log in to AWS  
Select S3 
 
Create a Bucket 
Set up Static Hosting to enabled with both files set to index.html (index and error) 
 
Set the permissions right 
 
 
Use the right endpoint for example 
 
 
https://vue-10-deploy-me.s3-eu-west-2.amazonaws.com/index.html 
 
https:// << bucket >> <<region>> .amazonaws.com  / index.html 
 
Note: when using webpack-simple one must use the index.html file from the root and the files in the \dist folder. 
 
Note: when using webpack (not -simple) one must use the index.html file which is found INSIDE the dist folder (not the index.html file on the root) and also all files within the \static\ folder and then the application will work !!! 
 
 
 
Links 
 
vue-03 
 
https://vue-03.s3-eu-west-2.amazonaws.com/index.html#/ 
 
 
vue-05 
 
https://vue-05.s3-eu-west-2.amazonaws.com/index.html 
 
Vue 05 has several labs including lab 08 which is the Church Registration Application 
 
 
 
https://vue-10-deploy-me.s3-eu-west-2.amazonaws.com/index.html 
 
 
 
 
 
Axios Module 
 
Looking at lecutes 331 onwards on Vue course 
 
Makes HTTPS requests;  can be used in any Javascript application 
 
It's an alternative to vue-resource 
 
Download, unpack and build the zip file for the project which has a prebuilt vue application 
 
Firebase => Create Project => Database =>  
 
 
 
 
 
 
 
 
 
Authentication Module (Lecture 343 onwards in Vue course) 
 
How to get a token 
How to store a token 
How to manage a token 
Firebase is demo back end for this lab 
Vuex is being used  
Axios is being used 
 
 
 
345 
 
 
Authentication uses a  
 
Session if we have stateful management of our application 
 
Token if we have a RESTful API which does not care about state 
 
Token can be stored on client eg in localStorgage 
 
Token is now sent with requests 
 
Token lifetime is max 1 hour for example on Firebase 
 
 
 
346 Practical 
 
Creating the back end to accept authentication 
 
 
Firebase, Authentication, Sign in => Email/Password 
 
Database, Rules,	"read" : "auth != null"  (user is authenticated) 
 
Now should find any read request to the database is denied although write still works 
 
Google 'firebase auth rest api' 
 
Find https://firebase.google.com/docs/reference/rest/auth/#section-create-email-password 
 
Endpoint 
 
https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY] 
 
API KEY 
 
Firebase, Authentication, Web Setup  
 
Add Firebase to your web app 
Copy and paste the snippet below at the bottom of your HTML, before other script tags. 
 
 
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script> 
 
<script> 
  // Initialize Firebase 
  var config = { 
    apiKey: "AIzaSyDjHtC9j_0snQkAwvEwGpN0XRDShFUF-DI", 
    authDomain: "philanderson888-churchregister.firebaseapp.com", 
    databaseURL: "https://philanderson888-churchregister.firebaseio.com", 
    projectId: "philanderson888-churchregister", 
    storageBucket: "philanderson888-churchregister.appspot.com", 
    messagingSenderId: "211517024181" 
  }; 
  firebase.initializeApp(config); 
</script> 
 
 
 
 
 
Signing up a user 
 
 
Request Body Payload 
Property Name 
Type 
Description 
email 
string 
The email for the user to create. 
password 
string 
The password for the user to create. 
returnSecureToken 
boolean 
Whether or not to return an ID and refresh token. Should always be true. 
 
Sample request 
 
 
curl 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]' \ 
-H 'Content-Type: application/json' \ 
--data-binary '{"email":"[user@example.com]","password":"[PASSWORD]","returnSecureToken":true}' 
 
 
So for example this request 
 
 
 curl 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDjHtC9j_0snQkAwvEwGpN0XRDShFUF-DI' \ 
> -H 'Content-Type: application/json' \ 
> --data-binary '{"email":"mail@philanderson.co.uk","password":"Pa$$w0rd","returnSecureToken":true}' 
 
 
Gets this response 
 
{ 
 "kind": "identitytoolkit#SignupNewUserResponse", 
 "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjdhM2QxOTA0ZjE4ZTI1Nzk0ODgzMWVhYjgwM2UxMmI3OTcxZTEzYWIifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGhpbGFuZGVyc29uODg4LWNodXJjaHJlZ2lzdGVyIiwiYXVkIjoicGhpbGFuZGVyc29uODg4LWNodXJjaHJlZ2lzdGVyIiwiYXV0aF90aW1lIjoxNTI4NzQxMTY0LCJ1c2VyX2lkIjoic1hNS0tZeG9TWFBvcGM1eVJsTjYydzN0Rmh5MiIsInN1YiI6InNYTUtLWXhvU1hQb3BjNXlSbE42MnczdEZoeTIiLCJpYXQiOjE1Mjg3NDExNjQsImV4cCI6MTUyODc0NDc2NCwiZW1haWwiOiJtYWlsQHBoaWxhbmRlcnNvbi5jby51ayIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtYWlsQHBoaWxhbmRlcnNvbi5jby51ayJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AJnppvV4tlMyoRSuGTVZcvm0S62-AGlJsa1PJuzJ8GgiadDDC0vStBYMgG_t78PH5Bg79WwCvzLqvWGWxpuaogMT3aruzJ6zmCM9drym7ybXaGlJIE6Nx7R1AvMpcN9Zbly_V8UV0kCnYto1Ls3uQ9eRgg_GRDWHpTgLwGPgDyn7pW-kKwo2HrBUDzeoSlW0s9Y53G5lZT2i3gK6oDCn02pGfL5xBgOlv9WnCHH0q9FORFDwH7OMF1rLG_OH_THsSn4uqMzxEt2j49_AeL26iY65WomoDHxzZ-kr5j8NXQZgKxlty6JhMaRWJ4_5VxFaU8PHbky4DEaeKP8OB6emfg", 
 "email": "mail@philanderson.co.uk", 
 "refreshToken": "AK2wQ-xoWVD6hUMUv54dn7n63tGs76XBMOizTcnlC9t44BazAFqmwc9dbmOuHzDoODtht6YAsFxKH7pTskKIAxi5EGVbDEaptNFp6nZLPalx-fEtaGtig1GLlu8gQjfV7fx5jNMqy5Hur-DQRbla_R4kFlVZ5a-NH8wNhTs7RceNxyglqup2-uGErRSwen00lesPnn3qxavIFBSfe5Vl7SQ2aOlai7V7ZutmDVQAZjK9IgQj5DkngdIBvV_r2zZqMgK54FIR8VJ0", 
 "expiresIn": "3600", 
 "localId": "sXMKKYxoSXPopc5yRlN62w3tFhy2" 
} 
 
 
 
 
Signing In A User 
 
Sign in with email / password 
You can sign in a user with an email and password by issuing an HTTP POST request to the Auth verifyPasswordendpoint. 
Method: POST 
Content-Type: application/json 
Endpoint 
 
https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY] 
 
Request Body Payload 
Property Name 
Type 
Description 
email 
string 
The email the user is signing in with. 
password 
string 
The password for the account. 
returnSecureToken 
boolean 
Whether or not to return an ID and refresh token. Should always be true. 
 
 
So example 
 
 
 
 
 
347 : Practical : Adding Sign in 
 
 
 
Placing an $http GET request using a Firebase Token for authentication 
 
Using this page as a guide 
 
https://firebase.google.com/docs/database/rest/auth 
To send authenticated requests to the Realtime Database REST API, pass the ID token generated above as the auth=<ID_TOKEN> query string parameter. Here is an example curl request to read Ada's name: 
curl "https://<DATABASE_NAME>.firebaseio.com/users/ada/name.json?auth=<ID_TOKEN>" 
 
 
 
Sign in now works  
 
Deploying application to AWS 
There is a problem with moment.js so I am rebuilding the application as application-02 without vue-moment and manually adding in moment.js from a CDN link 
vue init bootstrap-vue/webpack-simple attendance-02 
npm install --save  vue-router lodash vue-resource 
vue-router  
lodash  arrays 
vue-resource   http  
main.js 
import VueRouter from 'vue-router' 
import Lodash from 'lodash' 
import VueResource from 'vue-resource' 
 
Vue.use(BootstrapVue) 
Vue.use(VueRouter) 
Vue.use(Lodash) 
Vue.use(VueResource) 
 
It finally does publish at http://attendance-02.s3-website.eu-west-2.amazonaws.com/attendance 
 
http://attendance-02.s3-website.eu-west-2.amazonaws.com 
 
http://attendance-03.s3-website.eu-west-2.amazonaws.com 
 
 
Upgrading the application for database synchronisation between local and web databases 
 
Primary database will be the local user database containing FirstName, LastName, UserID and the key is (FirstName+LastName) 
When we connect to the web we can pull down the web database : First, Last, ID 
Do a foreach loop over the web database 
Foreach item in the web database : search through the local database for a match on (First+Last) 
for (let key in data){ 
resultArray.push(data[key]); 
this.users=resultArray; 
} 
 
 
If exists 
If ID blank => Add ID 
If not exist 
Add First+Last+ID 
 
 
 
 
 
 
 
 
When we add a new user 
Firstly add it to the local database 
Return command to the user 
Secondly add it to the web database and when we pull it down allocate the ID to the existing local user 
 
 
Third and final build of our application 
 
vue init bootstrap-vue/webpack-simple attendance-03 
 
 
 
 
 
 
Vue Testing with Mocha And Chai 
 
 
From https://scotch.io/tutorials/how-to-write-a-unit-test-for-vuejs 
 
In test/unit/specs/myfile.spec.js 
 
Chai provides 
Expect 
Should 
Assert 
 
To run the tests we can run 
 
Npm run unit 
 
Note that to simulate HTML we can use the $el keyword 
 
We can also use querySelector in order to actually find the element 
 
 
 
Vue Testing With Jest 
 
Vue Testing With vue-test-utils 
 
 
 
 
 
 
Vue Testing With TestCafe 
 
 
Using this page here 
 
https://alligator.io/vuejs/e2e-testing-testcafe  
 
Npm install --save-dev testcafe 
 
Testcafe  
 
All = run tests in all browsers 
 
 
*.test.js run any file ending test.js as a test 
 
To test it must install globally 
Sudo npm install -g testcafe 
 
Then we run 
 
Testcafe chrome <<mytestfile.js>> 
 
 
 
 
 
 
Testing With Selenium 
 
Selenium can automate tasks in the browser!!! 
 
http://seleniumhq.org 
 
Selenium WebDriver is browser based testing 
Selenium IDE is application script testing 
 
Npm install selenium-webdriver 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Vue Glossary 
 
babel 
 
babel is a 'transpiler' which transpiles ES6 code (which we write) down to ES5 so that can run in any browser 
 
 
redirect 
 
use this.$router.push("named_route")  to redirect to another page 
 
created(){ 
setTimeout(() => { 
this.$router.push("attendance") 
}, 3000); 
} 
 
routing 
 
https://router.vuejs.org/guide/essentials/named-routes.html 
