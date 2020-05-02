<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul class="ul-posts" v-if="posts && posts.length">
      <li class="posts" v-for="post in posts" :key='post.title'>
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
      </li>
  </ul>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios'
@Component
export default class MessageList extends Vue {
  @Prop() private msg!: string;
  data(){
    return{
      posts:[
        {
          title:"title",
          body:"post body"
        },
        {
                    title:"title",
          body:"post body"
        }
      ]
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
