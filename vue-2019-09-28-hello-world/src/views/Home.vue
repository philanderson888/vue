<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <p>Test</p>
    <Page01 msg="test message" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Page01 from "@/components/Page01.vue";

@Component({
  components: {
    HelloWorld,
    Page01
  }
})
export default class Home extends Vue {}
</script>
