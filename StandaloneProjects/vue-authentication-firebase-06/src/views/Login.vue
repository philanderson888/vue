<template>
    <div>
        <h1>Login</h1>
        <div v-if="error" class="error">{{error.message1}} <router-link to='/register'>register</router-link> {{error.message2}}</div>
        <form @submit.prevent="pressed">
            <div class="email">
                <input type="email" v-model="email" placeholder="email" />
            </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="password"/>
            </div>
            <button type="submit">Log In</button>
            <router-link to="/register"><button type="button">Register</button></router-link>
        </form>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
    methods:{
        async pressed(){
            try{
                const user = await firebase.auth().signInWithEmailAndPassword(this.email,this.password)
                console.log()
                console.group(`attempting to log in `)
                console.log(user)
                console.groupEnd()
                console.log()
                this.$router.replace({name: 'Secret'})
            }
            catch(err){
                console.log(err)
                this.error = {
                    message1: 'Invalid login - username or password were incorrect.  Please try again or ',
                    message2: ' a new user',
                    url : '/register'
                }
                console.log(`error message is "${this.error.message1} register ${this.error.message2}"`)
            }
        }
    },
    data(){
        return{
            email:null,
            password:null,
            error:null
        }
    }
}
</script>
