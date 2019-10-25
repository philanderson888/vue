<template>
  <div>
    <h4>Here is component 2 with a message {{msg}}</h4>
  </div>
</template>
<script lang="ts">
import {Component,Prop,Vue} from 'vue-property-decorator';
@Component 
export default class Component2WithMessage extends Vue {
    @Prop() private msg!: string;
}
</script>