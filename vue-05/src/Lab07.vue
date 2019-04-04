<template>
    <div style="border:2px solid black;margin:50px;">
        <h1>Lab 07 - Event Bus</h1>
        <h3>Sending data around our app using the event bus</h3>
        <lab-07-component-parent></lab-07-component-parent>
    </div>
</template>
<script>
import Lab07ComponentParent from './Lab07ComponentParent.vue';
import { eventBus } from './main.js'
export default {
  components:{
      'lab-07-component-parent':Lab07ComponentParent
  },
  data:function(){
      return {

      }
  }
}
</script>
