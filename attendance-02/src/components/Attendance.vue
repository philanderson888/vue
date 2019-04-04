<template>
    <div class="container">
        <h1>RCCE Prayer Registration</h1>
        <div class="row">
            <div class="col">
                <input type="text" placeholder="First Name" v-model="searchUser.firstName">
            </div>
            <div class="col">
                <input type="text" placeholder="Last Name" v-model="searchUser.lastName">
            </div>
            <div class="col">
                <button type="button" ref="buttonAddNewUser" @click="addNewUser(searchUser)" :disabled=isDisabled class="btn btn-secondary">Add New User</button>
            </div>      
            <div class="col"></div>      
        </div>
        
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">
                        First Name
                    </th>
                    <th scope="col">
                        Last Name
                    </th>
                    <th scope="col">
                        Register Attendance Today
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="filteredUser in filteredUsers" v-bind:key="filteredUser.firstName + filteredUser.lastName">
                    <td>
                        {{filteredUser.firstName}}
                    </td>
                    <td>
                        {{filteredUser.lastName}}
                    </td>
                    <td>
                        <button type="button" @click="registerAttendance(filteredUser)" class="btn btn-primary">Register For Today</button>
                    </td>
                </tr>
            </tbody>
        </table>    
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Registration</th>

                </tr>
                <tr v-for="registration in filteredRegister" v-bind:key="registration.registrationDate">
                    <td>{{registration.firstName}}</td>
                    <td>{{registration.lastName}}</td>
                    <td>{{ computeDate(registration.registrationDate) }}</td>
                </tr>
            </thead>
        </table>
    </div>
</template>
<script>
import Lodash from 'lodash'
import {eventBus} from '../main.js'
export default {
    data:function(){
        return {
            users:[],
            onlineUsers:[],
            searchUser:{
                userID:'',
                firstName:'',
                lastName:''
            },
            user:{
                userId:'',
                firstName:'',
                lastName:''
            },
            register:[],
            registration:{
                userId:'',
                firstName:'',
                lastName:'',
                registrationDate:''
            },
            isDisabled:true,
            onLine: '',
            authenticatedUserResponseObject : {},
            mydate:moment(new Date()).format('LTS'),
        }
    },
    methods:{
        addNewUser(user){
            let userNameString = user.firstName + user.lastName
            let duplicateUser = false;
            this.users.forEach(function(userItem){
                let nameString = userItem.firstName + userItem.lastName;
                if (userNameString === nameString){
                    duplicateUser = true;
                }
            })
            if (!duplicateUser){
                let newUser = {
                    userId : '',
                    firstName: user.firstName,
                    lastName: user.lastName
                }
                console.log(this.onLine)
                if(this.onLine){
                    this.$http.post('https://philanderson888-churchregister.firebaseio.com/users.json',newUser)
                    .then(response => {
                        newUser.userId = response.body.name
                        this.users.push(newUser)
                        localStorage.users = JSON.stringify(this.users)
                        this.onlineUsers = this.getAllUsers()
                        console.log(this.onlineUsers)
                    }),error => {
                        console.log(error)
                    }
                }
                else{
                    this.users.push(newUser)
                    localStorage.users=JSON.stringify(this.users)
                }
            }
            else{
                alert('User already exists')
            }
        },
        registerAttendance(user){
            let canRegister = true
            this.register.forEach(function(registration){
                if ( (registration.firstName == user.firstName) && (registration.lastName == user.lastName)){
                    if(Math.abs(registration.registrationDate-new Date())<3600000){
                        canRegister = false
                    }

                }
            })
            if(canRegister){
                let newRegistration = {
                    userId : user.userId,
                    firstName : user.firstName,
                    lastName : user.lastName,
                    registrationDate : Date.parse(new Date())
                }
                this.$http.post('https://philanderson888-churchregister.firebaseio.com/register.json',newRegistration)
                    .then(response=>{
                        console.log('registering new entry in register datahbase')
                        console.log(newRegistration)
                        newRegistration.registrationId = response.body.name
                        this.register.unshift(newRegistration)
                        localStorage.register = JSON.stringify(this.register)
                        console.log('updated register array is now')
                        console.log(this.register)
                    }),error=>{
                        console.log('looks like there has been a problem')
                        console(log(error))
                    }
            }
        },
        registrationShortDate(registration){
            console.log(registration)
            console.log(registration.registrationDate)
            if(registration!==null){
                let locale = "en-GB"
                let registrationMonth = registration.registrationDate.toLocaleString(locale, { month : "short" })
                let registrationYear = registration.registrationDate.toLocaleString(locale, { year:"numeric" })
                let registrationDay = registration.registrationDate.toLocaleString(locale,{ date : "numeric"})
                return registrationDay + ' ' + registrationMonth + ' ' + registrationYear
            }
            else{
                return null
            }
        },
        registrationShortTime(registration){
            let locale = "en-GB"
            return registration.registrationDate.toLocaleString(locale, { hours : "2-digit"}) + ':' + registration.registrationDate.toLocaleString(locale, { minutes : "2-digit"})
        },
        getAllUsers(){
            if(this.onLine){
                let url = 'https://philanderson888-churchregister.firebaseio.com/users.json?auth=' + this.authenticatedUserResponseObject.idToken
                console.log('database url is ' + url)
                this.$http.get(url)
                    .then(response=>{
                        console.log('getting all users from firebase')
                        console.log(response)
                        console.log(response.body)
                        return response.json()
                    })
            }
        },
        signUpNewUser(newUser){
            // only have coded it fixed at present but it does work if you use a fresh email address
            let authenticationSignUpObject = {
                "email":process.env.VUE_APP_email,
                "password":process.env.VUE_APP_password,
                "returnSecureToken":true
            }
            this.$http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + process.env.VUE_APP_API_Key, authenticationSignUpObject , {headers:{'Content-Type': 'application/json'}})
                .then(response=>{
                    console.log('creating a new user')
                    console.log(response)
                    console.log(response.body)
                })
        },
        signInUser(){
            let authenticationSignInObject = {
                "email":process.env.VUE_APP_email,
                "password":process.env.VUE_APP_password,
                "returnSecureToken":true
            }
            this.$http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + process.env.VUE_APP_API_Key, authenticationSignInObject , {headers:{'Content-Type':'application/json'}})
                .then(response=>{
                    console.log('authenticating a user')
                    console.log(response)
                    console.log(response.body)
                    this.authenticatedUserResponseObject = response.body
                    // now have token, do a read of all of the online users!
                    this.getAllUsers() 
                })
        },
        computeDate(dateToCompute){
            return moment(dateToCompute).calendar()
        }
    },
    created(){
        eventBus.$on('onlineStatus',function(data){
            console.log('online status is ' + data)
            this.onLine = data
        })   
        this.onLine = navigator.onLine
        console.log('online status is ' + this.onLine)
        this.users = JSON.parse(localStorage.users)
        this.register = JSON.parse(localStorage.register)
        console.log('Vue Created : logging users array : there are ' + this.users.length + ' users')
        console.log(this.users)
        console.log('Vue Created : logging register : there are ' + this.register.length + ' registrations')
        console.log(this.register)   
        if(this.onLine){
            // get token from firebase
            this.signInUser()
        }
    },
    computed:{
        filteredUsers(){
            var self = this
            let filteredUserArray = this.users.filter(function(userItem){
                return (
                    _.includes(userItem.firstName.toLowerCase(), self.searchUser.firstName.toLowerCase())
                )
                &&
                (
                    _.includes(userItem.lastName.toLowerCase(), self.searchUser.lastName.toLowerCase())
                )
            })
            if(filteredUserArray.length>0){
                self.isDisabled = true
            }else{
                self.isDisabled = false
            }
            return filteredUserArray
        },
        filteredRegister(){
            var self=this
            let filteredRegisterArray = this.register.filter(function(registerItem){
                return (
                    _.includes(registerItem.firstName.toLowerCase(), self.searchUser.firstName.toLowerCase())
                )
                &&
                    (
                    _.includes(registerItem.lastName.toLowerCase(), self.searchUser.lastName.toLowerCase())
                )
            })
            return filteredRegisterArray
        }
    }
}

</script>

<style scoped>
div.container{
  background-color:rgb(167, 222, 235); 
}
</style>

