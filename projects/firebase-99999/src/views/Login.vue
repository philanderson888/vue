<template>
<div class="container">
    <form action="">
        <div class="form-group col-sm-4 offset-sm-4">
           <label for="login-email">Email</label>
            <input v-model="email" type="email" id="login-email" class="form-control" placeholder="email" value="mail@philanderson.co.uk" required />         
        </div>
        <div class="form-group col-sm-4 offset-sm-4">
            <label for="login-password">Password</label>
            <input v-model="password" type="password" id="login-password" class="form-control" required/>
        </div>
        <button type="submit" @click="login" class="btn btn-primary">Submit</button>
        <p></p>
        <p>No account?  Click to <router-link to="Register">register</router-link></p>
    </form>
</div>
</template>
<script>
import firebase from 'firebase'
export default {
    name:'login',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        login(){
            firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
                function(user){
                    alert('successful login')
                    console.log('successful login')
                },
                function(err){
                    alert('error logging in : ' + err.message)
                }
            )
            this.$router.replace('home')
        }
    }

}
</script>