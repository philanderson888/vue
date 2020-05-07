<template>
  <div class="messages">
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
export default {
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      posts: [
        {
          title: "title1",
          body: "body1",
          date: "date",
          text: "text2"
        },
        {
          title: "title2",
          body: "body1",
          date: "date",
          text: "text2"
        },
        {
          title: "title3",
          body: "body3",
          date: "date",
          text: "text3"
        }
      ]
    }
  }
}
</script>