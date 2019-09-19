<template>
    <div>
        <h1>This is the child component</h1>
        <button @click="emitEvent" type="button">Emit Event</button>
    </div>
</template>
<script>
import {eventBus} from './main.js'
export default {
    methods:{
        emitEvent(){
            eventBus.$emit('childEmitterEvent','Data emitted from child');
        }
    }
}
</script>

<style scoped>
div{
    border:2px solid black; 
    margin:30px; 
    background-color: rgb(207, 231, 231);
}
</style>
