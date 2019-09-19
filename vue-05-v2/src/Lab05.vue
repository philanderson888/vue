<template>
    <div style="border:1px solid black;margin:50px;">
      <lab-05-global-component></lab-05-global-component>
      <lab-05-global-component></lab-05-global-component>
      <lab-05-local-component v-for="n in 3" v-bind:key="n"></lab-05-local-component>
      <fieldset>{{field01}}</fieldset>
  </div>
</template>
<script>
    import Lab05LocalComponent from './Lab05LocalComponent.vue';
    export default {
        components: {
            'lab-05-local-component': Lab05LocalComponent
        },
        data:function(){
            return {
                field01:'test data being displayed from main Lab05 vue file',
            }
        }
    }
</script>
