<template>
  <div class="home">
    <img class="image-logo" src="https://www.fullstackpython.com/img/logos/vuejs-wide.png" />
    <img class="image-logo" src="https://firebase.google.com/images/brand-guidelines/logo-standard.png" />
    <HelloWorld msg="Vue App With Firebase Authentication"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
