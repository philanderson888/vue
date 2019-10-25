<template>
    <div>
        <h1>Child 02 Component</h1>
        <p>{{name}}</p>
    </div>
</template>
<script>
export default {
  props:['name']
}
</script>
<style scoped>
div{
    background-color:cyan;
    border:2px solid chocolate;
}
</style>
