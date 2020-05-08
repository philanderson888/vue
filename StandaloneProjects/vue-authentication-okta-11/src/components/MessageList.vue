<template>
  <div class="posts">
    <h1>{{ msg }}</h1>
    <ul class="ul-posts" v-if="posts && posts.length">
      <li class="posts" v-for="post in posts" :key='post.title'>
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
        <p>{{post.date}}</p>
        <p>{{post.text}}</p>
      </li>
  </ul>
  </div>
</template>
<script lang="ts">
import axios from 'axios'
// export default class MessageList extends Vue {
export default {
  props:{
   msg: {
     type: String,
     default:''
   }
  },
  data(){    
    return{
      posts:[],
      $auth:{}
    }
  },
  async created(){

    console.group('this object is the Vue Component')
      console.log(this)
    console.groupEnd()
    console.log()
    console.log()

    console.group('$auth object')
      console.log(this.$auth)
    console.groupEnd()
    console.log()
    console.log()
    
    const accessToken = await this.$auth.getAccessToken()
    console.group('accessToken obtained with $auth.getAccessToken()')
      console.log(accessToken)
    console.groupEnd()
    console.log()
    console.log()
    axios.defaults.headers.common['Authorization']=`Bearer ${accessToken}`
    console.group('axios gets the API data')
    console.log(axios)
    console.log('axios.defaults')
    console.log(axios.defaults)
    console.log('axios.defaults.headers')
    console.log(axios.defaults.headers)
    console.log("axios.defaults.headers.common['Authorization']")
    console.log(axios.defaults.headers.common['Authorization'])
    console.groupEnd()
    console.log()
    console.log()
    try{
      const response = await axios.get(`http://localhost:3000/api/messages`)
      console.group('response.data')
      console.log(response.data)
      console.groupEnd();
      console.log()
      console.log()
      console.group('response.data.messages')
      console.log(response.data.messages)
      console.groupEnd()
      console.log()
      console.log()
      this.posts = response.data.messages; 
      console.group('this.posts')     
      console.log(this.posts)
      console.groupEnd()
      console.log()
      console.log()
    }
    catch(e){
      console.error(`Errors! ${e}`)
    }
  }
}
</script> <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"
        scoped="">

h3 {
margin: 40px 0 0;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}
</style>
