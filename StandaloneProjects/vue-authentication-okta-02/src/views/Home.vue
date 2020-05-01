<template>
  <div class="home">
 <img class="splash-screen" alt="Vue logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" />
    <img alt="Okta Logo" class="splash-screen" src="https://www.okta.com/sites/all/themes/Okta/images/logos/developer/Dev_Logo-01_Large.png" />
    <img alt="oauth logo" class="splash-screen" src="https://st.fbk.eu/sites/st.fbk.eu/files/styles/adaptive/public/oauth2-logo_0.jpg?itok=XqBscURN" />
    <HelloWorld msg="VueJS Authentication with Okta and OAuth2.0"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

console.log('process.env.VUE_APP_TEST')
console.log(process.env.VUE_APP_TEST)

console.log('process.env.VUE_APP_OKTA_CLIENT_ID')
console.log(process.env.VUE_APP_OKTA_CLIENT_ID)


export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      test:process.env.test,
      title:process.env.VUE_APP_TITLE
    }
  }
}
</script>
