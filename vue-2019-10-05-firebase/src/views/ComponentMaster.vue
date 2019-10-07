<template>
  <div id="master">
    <hr />
    <h1>Master Component</h1>
    <HelloWorld msg="This is a HelloWorld component" />
    <Component01 componentprop="Component01Prop" />
    <Component02 />
    This is a global computed property {{ count }}
    <button @click="increment">Increment</button>
    <hr />
    <Axios />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "es6-promise/auto";
import Vuex from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";
import Component01 from "@/components/Component01.vue";
import Component02 from "@/components/Component02.vue";
import Axios from "@/components/Axios.vue";

export default Vue.extend({
  name: "ComponentMaster",
  props: {
    IncomingData: String
  },
  components: {
    HelloWorld,
    Component01,
    Component02,
    Axios
  },
  methods: {
    increment() {
      console.log("about to increment");
      this.$store.commit("increment");
      console.log(this.$store.state.count);
      localStorage.setItem("vuex-counter", this.$store.state.count.toString());
    }
  },
  computed: Vuex.mapState(["count"])
});
</script>