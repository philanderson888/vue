<template>
    <div>
        <h1>Child 01 Component</h1>
        <p>{{child01field01}}</p>
        <button @click="changeName">Change Name</button>
    </div>
</template>
<script>
export default {
  props:['child01field01'],
  methods:{
      changeName:function(){
          this.child01field01='bob';
          this.$emit('changingNameToBob',this.child01field01);
      }
  }
}
</script>
<style scoped>
div{
    background-color:darkgoldenrod;
    border:2px solid black;
}
</style>
