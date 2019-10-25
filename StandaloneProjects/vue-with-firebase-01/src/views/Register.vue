<template>
<div class="container">
    <h1>Register</h1>
    <form action="">
        <div class="form-group col-sm-4 offset-sm-4">
           <label for="register-email">Email</label>
            <input type="email" v-model="email" id="register-email" class="form-control" placeholder="email" value="phil@phil.com" required />         
        </div>
        <div class="form-group col-sm-4 offset-sm-4">
            <label for="register-password">Password</label>
            <input type="password" v-model="password" id="register-password" class="form-control" required/>
        </div>
        <button @click="register" type="submit" class="btn btn-primary">Submit</button>
        <p></p>
        <p>Or click <router-link to="Login">here</router-link> to log in</p>
    </form>
</div>
</template>
<script>
import firebase from 'firebase'
export default {
    name:'register',
    data(){
        return{
            email:'',
            password:''
        }
    }, 
    methods:{
        register(){

            firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
            .then(
            function(user){
                console.log('account has been created')
                alert('account has been created')
            },
            function(err){
                console.log('error ' + err.message)
                alert('error creating user ' + err.message)
            })
        }
    }   
}
</script>