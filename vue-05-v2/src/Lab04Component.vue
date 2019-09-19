<template>
  <div>
      <fieldset>
          <h1>Lab04 : Using A Component To Display Data</h1>
          <p>{{field01}}</p>
          <button @click="changeData">Change Data</button>
      </fieldset>
  </div>
</template>
<script>
var lab04counter = 0;
export default {
  data: function(){
      return{
          field01:'some data'
      }
  },
  methods:{
      changeData(){
          lab04counter++;
          this.field01+='_'+lab04counter;
      }
  }
}
</script>

