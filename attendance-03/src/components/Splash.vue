<template>
    <div class="container">
        Splash
    </div>
</template>
<script>
export default {
    created(){
        setTimeout(()=>{
            this.$router.push('attendance')   
        },3000)
    }
}
</script>
<style scoped>
div.container{
    background-image:url('../assets/RCCG-720x388.png');
    background-size:100%;
    height:150vh;
}
</style>
