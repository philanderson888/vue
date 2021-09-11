<template>
    <div style="border:2px solid black; margin:50px;padding:20px;background-color:bisque;">
        <h1>Lab08 - Filtering A List With LoDash and Creating A Church Register!!!</h1>
        <ul>
            <h2>This is the basic list</h2>
            <li v-for="item in testArray" v-bind:key="item">{{item}}</li>
        </ul>
        <ul>
            <h2>This is the filtered list</h2>
            <input v-model="searchText">
            <li v-for="item in filteredArray" v-bind:key="item">{{item}}</li>
        </ul>
        FirstName:
        <input v-model="user.firstName">
        Last Name:
        <input v-model="user.lastName">

        <ul>
            <h2>Please type in your name and select from the drop down list to register yourself in class today</h2>
            <input v-model="searchUser.firstName">
            <li v-for="searchUser in filteredUsers" v-bind:key="searchUser.firstName + searchUser.lastName">{{searchUser.firstName}} - {{searchUser.lastName}}
               <button @click="Register(searchUser)" class="btn btn-default">Register</button>
            </li>
        </ul>
        <hr />
        First Name:
        <input v-model="newUser.firstName">
        Last Name:
        <input v-model="newUser.lastName">

        <button @click="addNewUser" class="btn btn-default">Add New User</button>
        <ul>
            <h2>List of registered users</h2>
            <li v-for="registration in register" v-bind:key="registration.firstName+registration.lastName">{{registration.firstName}} - {{registration.lastName}} - {{registration.dateTimeRegistered}}</li>
        </ul>
    </div>
</template>
<script>
export default{
    data: function(){
        return{
            searchText:'',
            searchUser:{
                firstName:'',
                lastName:''
            },
            testArray:['one','two','three'],
            user:{
                firstName:'',
                lastName:''
            },
            registration:{
                firstName:'',
                lastName:'',
                dateTimeRegistered:''
            },
            users:[],
            register:[],
            newUser:{
                firstName:'',
                lastName:''
            }
        }
    },
    computed:{
        filteredArray:function(){
            var self=this;
            // filter is a Vue function.  It iterates over testArray
            // and each item iterated over is passed into the function
            // here as testItem
            return this.testArray.filter(function(testItem){
                return _.includes(testItem.toLowerCase(), self.searchText.toLowerCase());
            });
        },
        filteredUsers:function(){
            var self=this;
            return this.users.filter(function(user){
                return _.includes(user.firstName.toLowerCase(), self.searchUser.firstName.toLowerCase());
            });
        }
    },
    created:function(){
        console.log('creating app');
       this.users = JSON.parse(localStorage.users);
        this.register = JSON.parse(localStorage.register);
        console.log((localStorage.users));
        console.log((localStorage.register));
    },
    methods:{
        Register(user){
            var userToRegister={
                firstName:'',
                lastName:'',
                dateTimeRegistered:''
            }
            userToRegister.firstName=user.firstName;
            userToRegister.lastName=user.lastName;
            userToRegister.dateTimeRegistered=new Date();
            this.register.push(userToRegister);
            localStorage.register = JSON.stringify(this.register);
            console.log(localStorage.register);
        },
        addNewUser(){
            console.log('adding a new user');
            console.log('New user first name is ' + this.newUser.firstName);
            var newUserObject = {
                firstName:this.newUser.firstName,
                lastName:this.newUser.lastName
            }
            this.users.push(newUserObject);
            localStorage.users = JSON.stringify(this.users);
            console.log('local storage users object holds ' + localStorage.users);
            newUserObject = '';
        }
    }
}



</script>
