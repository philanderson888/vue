<template>
  <div class="messages">
    <MessageList msg="VueJS Authentication with Okta and OAuth2.0"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MessageList from '@/components/MessageList.vue'

export default {
  name: 'Messages',
  components: {
    MessageList
  }
}
</script>
