<template>
    <fieldset>
        <h1>Lab 02 : Template01 : Using Templates</h1>
        <p>Note that the data object is a function</p>
        <p>{{field01}}</p>
    </fieldset>
</template>
<script>
    export default {
        data: function(){
            return {
                field01:'test output data'
            }
        }
    }
</script>