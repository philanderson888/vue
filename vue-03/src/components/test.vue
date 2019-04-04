<template>
  <div class="test">
   <h1>{{title}}</h1>
   <a href="/#/test">First Test Page</a>&nbsp;|&nbsp;
   <a href="">Users</a>&nbsp;|&nbsp;
   <a href="/#/usersFromInternet">Users From Internet</a>&nbsp;|&nbsp;
   <a href="/#/usersFromMLab">Users From MLab</a>&nbsp;|&nbsp;
   <h1>{{user.firstName}}</h1>
   <h1 v-text="user.lastName"></h1>
   {{htmlfield}}
   <h1 v-html="htmlfield"></h1>
   <h1 v-if="showName">Is name showing? Yes - {{user.firstName}}</h1>
   <h1 v-else>Otherwise show last name - {{user.lastName}}</h1>
   <ul style="font-size:45px">
    <li v-for="item in myList" :key="item.name">{{item.name}}</li>
   </ul>
   <ul style="font-size:45px;">
    <li v-for="item in myList2" :key="item">{{item}}</li>
   </ul>
   <input type="text" v-model="inputField01" style="font-size:45px;"><br />
   <h1>{{inputField01}}</h1>
   <button v-on:click="doThis">Click here to do something</button>
   <button v-on:click="doThis2('pass some text')">Click here to do something else</button><br />
   <input type="text" v-on:keyup="keyUp" style="font-size:45px" placeholder="Type to register every key press"><br />
   <input type="text" v-on:keyup="keyUp2" style="font-size:45px" placeholder="type to register every key stroke"><br />
   <input type="text" v-on:keyup="keyUp2" style="font-size:45px" placeholder="contents of field logged every keystroke"><br />
   <input type="text" v-on:keyup.enter="keyUp3" style="font-size:45px" placeholder="logs when hit enter key"><br />
   <div class="bigText">
     <div>
       <label>First Name :</label>
       <input type="text" v-model="user.firstName" class="bigText">
     </div>
     <div>
       <label>Last Name :</label>
       <input type="text" v-model="user.lastName" class="bigText">
     </div>
     <div>
       <p v-html="fullName"></p>
     </div>
     <div style="background-color:pink">
       <h2>Component Properties</h2>
       <p>Now looking at Component Properties (cannot change from default)</p>
       <p>{{msg}}</p>
     </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'test',
  props: {
    msg: {
      type: String,
      default: 'Foobar'
    }
  },
  data () {
    return {
      title: 'Hello World from Phil',
      user: {
        firstName: 'Phil',
        lastName: 'Anderson'
      },
      htmlfield: '<h1>Some HTML Here</h1>',
      showName: false,
      myList: [{name: 'Phil'}, {name: 'George'}, {name: 'Paul'}],
      myList2: [1, 2, 3],
      inputField01: ''
    }
  },
  methods: {
    doThis: function () {
      alert('You clicked')
    },
    doThis2: function (someText) {
      alert(someText)
    },
    keyUp: function () {
      console.log('key pressed')
    },
    keyUp2: function (e) {
      console.log(e.target.value) // gets value of input field!
    },
    keyUp3: function () {
      console.log('you hit enter')
    }
  },
  computed: {
    fullName: function () {
      return '<div>Computed Function returning this.user.firstName etc</div>' + this.user.firstName + ' ' + this.user.lastName
    }
  }
}
</script>
<style scoped>
.bigText{
  font-size:45px;
}
</style>
