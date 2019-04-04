<template>
 <el-container class="elementFromScratch">
   <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-submenu index="2">
      <template slot="title">Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-submenu>
    <el-menu-item index="3"><a href="https://www.ele.me">Orders</a></el-menu-item>
    <el-menu-item index="3"><a href="/#/elementFromScratch">Element UI</a></el-menu-item>
    <el-menu-item index="3"><a href="/#/godLog">Getting Up God Log</a></el-menu-item>
   </el-menu>
   <el-main>
     <el-row :gutter="10">
       <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
       <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
       <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
       <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
     </el-row>
     <el-row :gutter="10">
       <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
       <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
       <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
       <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
     </el-row>
     <el-row :gutter="10">
       <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
         <div class="grid-content bg-purple">
           <el-button type="info" size="small">Small</el-button>
         </div>
       </el-col>
       <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
       <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
       <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
     </el-row>
     <el-row :gutter="10" v-for="user in users" :key="user.date">
       <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">
       <input type="checkbox" v-model="user.contacted" v-on:click="toggleUser(user)">
       </div></el-col>
       <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
     <span>
         Date : {{user.date}} : Contacted: {{user.contacted}} :
         <span :class="{upatfour : user.upAtFour}">Up At 4 {{user.upAtFour}} </span> : ID : {{user._id}} : Name : {{user.name}} : {{user.email}}
          <button v-on:click="editUser(user)">Edit</button>
          <button v-on:click="deleteUser(user)">x</button>
        </span>
      </div></el-col>
       <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
       <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
     </el-row>
      <ul>
        <li v-for="user in users" :key="user.date">
        <input type="checkbox" v-model="user.contacted" v-on:click="toggleUser(user)">
        <span>
         Date : {{user.date}} : Contacted: {{user.contacted}} :
         <span :class="{upatfour : user.upAtFour}">Up At 4 {{user.upAtFour}} </span> : ID : {{user._id}} : Name : {{user.name}} : {{user.email}}
          <button v-on:click="editUser(user)">Edit</button>
          <button v-on:click="deleteUser(user)">x</button>
        </span>
       </li>
      </ul>
   </el-main>
 <el-footer>Footer</el-footer>
</el-container>
</template>
<script>
export default {
  data () {
    return {
      newUser: {
        _id: '',
        contacted: true,
        upAtFour: false
      },
      users: [
      ],
      showUsers: true,
      showEditUser: false,
      userBeingModified: {},
      upAtFourInLast14Days: 0
    }
  },
  methods: {

  },
  created: function () {
    this.$http.get('https://api.mlab.com/api/1/databases/userlist/collections/users/?apiKey=' + this.apikey)
      .then(function (response) {
        console.log('')
        console.log('users in users collection')
        console.log(response)
        console.log(response.data)
        this.users = response.data
        let upAtFourInLast14DaysCount = 0
        let count = 0
        this.users.forEach(function (user) {
          if (user.upAtFour === true) {
            if (count < 14) {
              upAtFourInLast14DaysCount++
              console.log('count is ' + upAtFourInLast14DaysCount)
            }
          }
          count++
        })
        this.upAtFourInLast14Days = upAtFourInLast14DaysCount
        console.log('final count up in last 14 days is ' + this.upAtFourInLast14Days)
      })
  }
}
</script>
<style scoped>
.el-header {
  background-color: #8ae2cc;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-footer{
  background-color: pink;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
