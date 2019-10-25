<template>
  <div>
    <h5>This is a component with two messages</h5>
    <ol>
      <li>First Message : {{message1}}</li>
      <li>Second Message : {{message2}}</li>
      <li>First Number : {{number1}}</li>
    </ol>
    <ul>
      <li v-for="item in array1" v-bind:key="item">An item {{item}}</li>
    </ul>
    <ul>
      <li>{{array2}}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class ComponentWith2Messages extends Vue {
  @Prop() private message1!: string;
  @Prop() private message2!: string;
  @Prop() private number1!: number;
  @Prop() private array1!: Array<String>;
  @Prop() private array2!: Array<String>;
}
</script>