<template>
    <div style="border:2px solid black; margin:50px;">
        <h1>Lab 06 : Sending Data From Parent To Child Component</h1>
        <lab06-component-parent></lab06-component-parent>
    </div>
</template>
<script>
    import Lab06ComponentParent from './Lab06ComponentParent';
    export default{
        components:{
            'lab06-component-parent': Lab06ComponentParent
        }
    }
</script>
<style scoped>
 h1{
     margin:50px;
 }
</style>

