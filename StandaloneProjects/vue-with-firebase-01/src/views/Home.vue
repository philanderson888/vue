<template>
  <div class="home">
    <h1>Home Page</h1>
    <HelloWorld msg="Hello World Component"/>
        <HelloWorld msg="Hello World Component"/>
            <HelloWorld msg="Hello World Component"/>
                <HelloWorld msg="Hello World Component"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import About from '@/views/About.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
