<template>
    <div>
        <div>Name : 
            <input v-model="dataFromParent" ref="userName">
            <button @click="updateName">Update Name</button>
        </div>
        <div>
            Add new name : <input v-model="newUserName" ref="newUserName">
            Add new user age : <input v-model="newUserAge" type="number" min="0" max="130" ref="newUserAge">
            <button @click="addUser">Add new user</button>
        </div>
        <div>
            Delete item : Index : <input v-model="userIndex" ref="userIndex">
            <button @click="deleteUser">Delete User</button>
        </div>
        <div ref="userDetails">
            Name:<input v-model="userName">
            Age:<input type="number" v-model="userAge">
            Index:<input readonly v-model="userIndex">
            <button @click="updateUser">Update</button>
        </div>
        <ul>
            <li v-for="(user,index) in users" v-bind:key="user.name">
                <div @click="displayUser(user,index)">
                    [{{index}}] : {{user.name}} is age {{user.age}}
                </div>
            </li>
        </ul>

        <lab06-child-component-01 :child01field01=dataFromParent @changingNameToBob="userName=$event"></lab06-child-component-01>
        <lab06-child-component-01 :child01field01=dataFromParent></lab06-child-component-01>
        <lab06-child-component-02 :name=dataFromParent></lab06-child-component-02>
        <lab06-child-component-02 :name=dataFromParent></lab06-child-component-02>

    </div>
</template>
<script>
import Lab06ChildComponent01 from './Lab06ChildComponent01.vue';
import Lab06ChildComponent02 from './Lab06ChildComponent02.vue';

var globalNamesArray = JSON.parse(localStorage.getItem("globalNamesArray"));
console.log(globalNamesArray==null);
console.log(globalNamesArray);
if(globalNamesArray==null){
    globalNamesArray=[
        { name : 'fred', age:21 },
        { name : 'bill', age:33 }
    ];
}

Array.prototype.last = function() {
    return this[this.length-1];
}

var lastItem = globalNamesArray.last();
console.log(lastItem);
var globalCounter = lastItem.age;
globalCounter++;
var newUserNamePreset = lastItem.name+globalCounter;


export default {
  components:{
    'lab06-child-component-01':Lab06ChildComponent01,
    'lab06-child-component-02':Lab06ChildComponent02,
  },
  data: function(){
      return {
          newUserName:newUserNamePreset,
          newUserAge:globalCounter,
          users:globalNamesArray,
          userIndex:null,
          userName:null,
          userAge:null
      }
  },
  computed: {
      newUser:function(){
          return {
            name:this.newUserName,
            age:this.newUserAge
          }
      },
      dataFromParent:function(){
          return this.userName;
      }
  },
  methods:{
      updateName(event){
          console.log(this.$refs.userName.value);
          this.dataFromParent = this.$refs.userName.value;
          globalDataObjectInParent.name= this.$refs.userName.value;
          console.log(globalDataObjectInParent);
      },
      addUser(){
        console.log('adding a new user');
        console.log(this.newUser);
        console.log(globalNamesArray);
        globalNamesArray.push(this.newUser);
        console.log('list of users is now');
        console.log(globalNamesArray);
        globalCounter++;
        this.newUserName+=globalCounter;
        this.newUserAge=globalCounter;
        localStorage.setItem("globalNamesArray",JSON.stringify(globalNamesArray));
      },
      deleteUser(){
          console.log('deleting user ' + this.userIndex);
          console.log('item being deleted is');
          console.log(this.users[this.userIndex]);
          this.users.splice(this.userIndex,1);
          globalNamesArray.splice(this.userIndex,1);
          localStorage.setItem("globalNamesArray",JSON.stringify(globalNamesArray));
          console.log(this.users);
          this.userIndex=this.users.length-1;
      },
      displayUser(user,index){
          this.userName=user.name;
          this.userAge=user.age;
          this.userIndex=index;
      },
      updateUser(){
          var modifiedUser={
              name:this.userName,
              age:this.userAge
          }
          this.users.splice(this.userIndex,1,modifiedUser);
          globalNamesArray.splice(this.userIndex,1,modifiedUser);
          localStorage.setItem("globalNamesArray",JSON.stringify(globalNamesArray));
 
      }
  }
}
</script>
<style scoped>
div{
    border:3px solid rgb(17, 2, 2);
    background-color:cornsilk;
}

</style>
