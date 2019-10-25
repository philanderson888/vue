<template>
  <div class="component01">
      <hr />
    <p>This is <strong>component01</strong> with prop {{ componentprop }} &nbsp;<span><button @click="increment">Increment</button></span></p>

    <p>
      State of global counter is
      <strong>{{ count }}</strong>
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import "es6-promise/auto";
import Vuex from "vuex";

export default Vue.extend({
  name: "Component01",
  props: {
    componentprop: String
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