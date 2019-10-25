<template>
    <div>
        <h3>This is component 01</h3>
        <p>{{ title }}
    </div>
</template>
<script>
export default {
    name:'Component01',
    props:{
        title:String
    }
}
</script>