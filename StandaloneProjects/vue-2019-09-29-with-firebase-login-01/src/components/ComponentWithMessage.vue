<template>
  <div>
    <h3>My message goes here {{ msg }}</h3>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class ComponentWithMessage extends Vue {
  @Prop() private msg!: string;
}
</script>
