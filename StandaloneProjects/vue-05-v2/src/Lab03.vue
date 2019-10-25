<template>
  <fieldset>
      <h1>Lab 03 : Templates Continued</h1>
      <p>{{ field01 }}</p>
      <button @click="changeData01">Change Data 01</button>
      <button @click="changeData02">Change Data 02</button>
  </fieldset>
</template>

<script>
export default {
    data:function(){
        return{
            field01:'some data here'
        }
    },
    methods:{
        changeData01:function(){
            this.field01='Data has been changed to this';
        },
        changeData02(){
            this.field01='Data has now been changed also';
        }
    }
}
</script>
