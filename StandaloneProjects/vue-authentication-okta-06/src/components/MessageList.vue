<template>
  <div class="hello">
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
      posts:[ ]
    }
  },
  async created(){
    const accessToken = await this.$auth.getAccessToken()
    console.log('accessToken')
    console.log(accessToken)
    axios.defaults.headers.common['Authorization']=`Bearer ${accessToken}`
    console.log('axios')
    console.log(axios)
    console.log('axios.defaults')
    console.log(axios.defaults)
    console.log('axios.defaults.headers')
    console.log(axios.defaults.headers)
    console.log("axios.defaults.headers.common['Authorization']")
    console.log(axios.defaults.headers.common['Authorization'])
    try{
      const response = await axios.get(`http://localhost:3000/api/messages`)
      console.log(response.data)
      console.log(response.data.messages)
      console.log('this.posts')     
      console.log(this.posts)
      this.posts = response.data.messages; 
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
