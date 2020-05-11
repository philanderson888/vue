<template>
    <div>
        <div v-if="loggedIn">
            <button @click="signOut">Log out</button>
        </div>       
        <div v-else>
            <button @click="signIn">Log in</button>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'
export default {
    created(){
        firebase.auth().onAuthStateChanged(user => {
            this.loggedIn = !!user // returns false if no user, true if a user exists
        })
    },
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
            
        }, 
        signIn(){
            return {
                
            }
        }
    }
}
</script>