<template>
  <div>
      <h1>This is the parent component</h1>
      <div>Data from Child : {{dataFromChild}}</div>
      <lab-07-component-child @childEmitterEvent="dataFromChild=$event"></lab-07-component-child>

  </div>
</template>
<script>
import Lab07ComponentChild from './Lab07ComponentChild.vue';
import { eventBus } from './main.js'
export default {
  components:{
      'lab-07-component-child':Lab07ComponentChild
  },
  data:function(){
      return {
          dataFromChild:'none received yet'
      }
  },
  created(){
      eventBus.$on('childEmitterEvent',(data)=>{
          this.dataFromChild += data;
      });
  }
}
</script>

<style scoped>
    div{
        border:2px solid black;
        background-color:rgb(179, 209, 209);
        margin:50px;
    }
</style>
