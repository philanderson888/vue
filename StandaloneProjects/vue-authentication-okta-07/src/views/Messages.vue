<template>
  <div class="home">
    <ComponentMessages msg="API Messages"/>
  </div>
</template>

<script>
// @ is an alias to /src
console.clear()
import ComponentMessages from '@/components/ComponentMessages.vue'

export default {
  name: 'Messages',
  components: {
    ComponentMessages
  }
}
</script>
