<template>
    <form class="container">
        <h1>Attendance</h1>
        <div class="row">
            <div class="col">
                <input type="text" v-model="user.firstName" placeholder="First Name" class="form-control">
            </div>
            <div class="col">
                <input type="text" v-model="user.lastName" placeholder="Last Name" class="form-control">
            </div>
            <div class="col">
                <button type="button" @click="addUser(user)" class="btn btn-primary">New User</button>
            </div>
        </div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Register</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" v-bind:key="user.firstName + user.lastName">
                    <td>{{user.firstName}}</td>
                    <td>{{user.lastName}}</td>
                    <td><button type="button" class="btn btn-default">Edit</button></td>
                    <td><button type="button" class="btn btn-default">Register</button></td>
                </tr>
            </tbody>
        </table>
        
   
    </form>

</template>
<script>
export default {
    data:function(){
        return {
            users:[
                {firstName:'rob',lastName:'roy'},
                {firstName:'paul',lastName:'smelling'}
            ],
            user:{
                firstName:'',
                lastName:''
            },
            newUser:{},
            registration:{},
            register:[]
        }
    },
    methods:{
        addUser(user){
            this.newUser.firstName = user.firstName
            this.newUser.lastName = user.lastName
            this.users.push(this.newUser)
        },
        addRegistration(){

        }
    }
}
</script>

