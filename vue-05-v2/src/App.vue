<template>
  <div>
      <fieldset>
        <h1>Vue Labs</h1>
      </fieldset>
      <fieldset>
        <h1>Lab 00 : test</h1>
        <p>{{ test }}</p>
      </fieldset>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      test:'test message'
    }
  }
}
</script>

<style>
fieldset{
  margin:50px;
  background-color:rgb(247, 249, 242);
}
</style>
