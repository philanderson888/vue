<template>
    <div style="border:2px solid black;margin:50px;backgroundColor:rgb(247, 249, 242);">
        <h1>Lab 05 : Local Component</h1>
        <p>This is lab 05 local component being displayed here.</p>
        <p>{{field02}}</p>
        <button @click="changeField02">Change Local Data</button>
    </div>
</template>
<script>
export default {
  data:function(){
      return {
          field02:'some data from local component here',  
      }
  },
  methods:{
      changeField02: function(){
          this.field02 += '   data has been modified ';
      }
  }
}
</script>
