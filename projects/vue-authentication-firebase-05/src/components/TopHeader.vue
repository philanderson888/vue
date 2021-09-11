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
            this.$user = user
        })
    },
    updated(){
      console.group(this.loggedIn ? "User is logged in" : "User is not logged in");
      console.log(`user email is ${this.$user.email}`)
      console.log(`user object is`)
      console.log(this.$user)
      console.groupEnd
    },
    data(){
        return{
            loggedIn:false
        }
    },
    methods:{
        async signOut(){
            try{
                await firebase.auth().signOut()
                console.group("Logging out")
                console.groupEnd()
                this.$router.replace({name:'Login'})
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