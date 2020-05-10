<template>
    <div>
        Logged in 
        <span v-if="loggedIn">Yes</span>
        <span v-else>No</span>
        <div>
            <button @click="signOut">Sign out</button>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'
export default {
    data(){
        return{
            loggedIn:false
        }

    },
    methods:{
        async signOut(){
            try{
                const data = await firebase.auth().signOut()
                console.group("Logging out data")
                console.log(data)
                console.groupEnd()
                this.$router.replace({name:'login'})

            }
            catch(err){
                console.log(err)
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>