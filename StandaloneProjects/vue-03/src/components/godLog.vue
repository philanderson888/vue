<template>
  <div class="users">
    <a href="">Users</a>
    <a href="/#/test">First Test Page</a>&nbsp;|&nbsp;
    <a href="">Users</a>&nbsp;|&nbsp;
    <a href="/#/usersFromInternet">Users From Internet</a>&nbsp;|&nbsp;
    <a href="/#/usersFromMLab">Users From MLab</a>&nbsp;|&nbsp;
    <a href="/#/godLog">Log</a>&nbsp;|&nbsp;
    <a href="/#/elementFromScratch">Element UI</a>&nbsp;|&nbsp;
    <div v-if="showUsers">
      <h1>Log</h1>
        <input type="text" v-model="newUser._id" readonly><br />
        <input type="text" v-model="newUser.email" placeholder="Email" hidden><br />
        <input type="text" v-model="newUser.name" placeholder="Full Name"><br />
        <input type="date" id="datePicker" v-model="newUser.date"><br />
        <span>Up at 4? <input type="checkbox" v-model="newUser.upAtFour" v-on:click="toggleUpAtFour(newUser)"></span>
      <div>
        <input type="submit" class="toggle" value="submit" v-on:click="addUser">
      </div>
      <div>
        <p>Up Early : {{this.upAtFourInLast14Days}}</p>
      </div>
      <ul>
        <li v-for="user in users" :key="user.date">
        <input type="checkbox" v-model="user.contacted" v-on:click="toggleUser(user)">
        <span>
         Date : {{user.date}} : Contacted: {{user.contacted}} :
         <span :class="{upatfour : user.upAtFour}">Up early {{user.upAtFour}} </span> : ID : {{user._id}} : Name : {{user.name}} : {{user.email}}
          <button v-on:click="editUser(user)">Edit</button>
          <button v-on:click="deleteUser(user)">x</button>
        </span>
       </li>
      </ul>
      <div>{{users}}</div>
    </div>
    <div v-if="showEditUser">
      <h2>Edit User</h2>
      <div>
       ID : {{userBeingModified._id}}
      </div>
      <div>
        <input type="date" v-model="userBeingModified.date">
      </div>
      <div>
        Up at 4 : <input type="checkbox" v-model="userBeingModified.upAtFour">
      </div>
      <div>
        <input type="text" v-model="userBeingModified.email" placeholder="Email"><br />
      </div>
      <div>
        <input type="text" v-model="userBeingModified.name" placeholder="Full Name">
      </div>
      Contacted : <input type="checkbox" v-model="userBeingModified.contacted" v-on:click="toggleUser(userBeingModified)">
      <div>
        <button v-on:click="saveUser(userBeingModified)">Save</button>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'users',
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
    addUser: function (e) {
      console.log('adding new user')
      e.preventDefault()
      this.$http.post('https://api.mlab.com/api/1/databases/userlist/collections/users/?apiKey=' + this.apikey, this.newUser)
        .then(function (response) {
          console.log(response)
          console.log(response.data)
          console.log(response.data.name)
          console.log(response.data.email)
          console.log(response.data._id)
          console.log(response.data._id.$oid)
          this.newUser._id = {
            $oid: response.data._id.$oid
          }
          this.users.push({
            name: this.newUser.name,
            email: this.newUser.email,
            contacted: false,
            date: this.newUser.date,
            upAtFour: this.newUser.upAtFour,
            _id: this.newUser._id
          })
        })
      console.log('adding new user - about to run this.updateStats() method')
      this.updateStats()
    },
    deleteUser: function (user) {
      console.log('deleting user')
      this.users.splice(this.users.indexOf(user), 1)
      this.$http.get('https://api.mlab.com/api/1/databases/userlist/collections/users/?apiKey=' + this.apikey)
        .then(function (response) {
          console.log(response)
          console.log(response.data)
          console.log('done')
        })
      console.log('user ID that we are deleting is ' + user._id.$oid)
      let url = 'https://api.mlab.com/api/1/databases/userlist/collections/users/' + user._id.$oid + '/?apiKey=' + this.apikey
      console.log('url is ' + url)
      this.$http.delete(url)
        .then(function (response) {
          console.log(response)
          console.log(response.data)
        })
    },
    toggleUser: function (user) {
      console.log('')
      console.log('toggling users status')
      console.log('=====================')
      console.log('user ID that we are toggling is ' + user._id.$oid)
      console.log('user is ' + JSON.stringify(user))
      console.log('user.contacted is ' + user.contacted)
      user.contacted = !(user.contacted)
      console.log('user.contacted is ' + user.contacted)
      this.users.splice(this.users.indexOf(user), 1, user)
      console.log(this.users)
      console.log('user is ' + JSON.stringify(user))
      let url = 'https://api.mlab.com/api/1/databases/userlist/collections/users/' + user._id.$oid + '/?apiKey=' + this.apikey
      console.log('url is ' + url)
      this.$http.put(url, user)
        .then(function (response) {
          console.log(response)
          console.log(response.data)
        })
    },
    editUser: function (user) {
      console.log(' ')
      console.log('editing user')
      console.log('============')
      this.showUsers = false
      this.showEditUser = true
      this.userBeingModified = user
    },
    saveUser: function (user) {
      console.log('saving user')
      console.log('')
      console.log('updating user details')
      console.log('=====================')
      console.log('user ID that we are updating is ' + user._id.$oid)
      console.log('user is ' + JSON.stringify(user))
      this.users.splice(this.users.indexOf(user), 1, user)
      console.log(this.users)
      console.log('user is ' + JSON.stringify(user))
      let url = 'https://api.mlab.com/api/1/databases/userlist/collections/users/' + user._id.$oid + '/?apiKey=' + this.apikey
      console.log('url is ' + url)
      this.$http.put(url, user)
        .then(function (response) {
          console.log(response)
          console.log(response.data)
        })
      this.showEditUser = false
      this.showUsers = true
    },
    toggleupAtFour: function (user) {
      /*
      console.log('')
      console.log('toggling up at 4')
      console.log('=====================')
      console.log('user is ' + JSON.stringify(user))
      console.log('user ID that we are toggling is ' + user._id.$oid)
      console.log('user.upAtFour is ' + user.upAtFour)
      user.upAtFour = !(user.upAtFour)
      console.log('user.upAtFour is ' + user.upAtFour)
      this.users.splice(this.users.indexOf(user),1,user)
      console.log(this.users)
      console.log('user is ' + JSON.stringify(user))
      let url = 'https://api.mlab.com/api/1/databases/userlist/collections/users/' + user._id.$oid + '/?apiKey=' + this.apikey
      console.log('url is ' + url)
      this.$http.put(url,user)
        .then(function (response) {
          console.log(response)
          console.log(response.data)
        })
     */
    },
    updateStats: function () {
      let upAtFourInLast14DaysCount = 1
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
    }
  },
  created: function () {
    console.log('Getting all users from the database : initial read')
    this.$http.get('https://api.mlab.com/api/1/databases?apiKey=' + this.apikey)
      .then(function (response) {
        console.log('databases')
        console.log(response)
        console.log(response.data)
      })
    this.$http.get('https://api.mlab.com/api/1/databases/userlist/collections/?apiKey=' + this.apikey)
      .then(function (response) {
        console.log('')
        console.log('collections in userlist database')
        console.log(response)
        console.log(response.data)
      })
    this.$http.get('https://api.mlab.com/api/1/databases/userlist/collections/userlist/?apiKey=' + this.apikey)
      .then(function (response) {
        console.log('')
        console.log('items in userlist collection')
        console.log(response)
        console.log(response.data)
      })
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
.bigText{
  font-size:45px;
}
.contacted{
  text-decoration: line-through;
}
.upatfour{
  background-color: #42ff71;
}
.notupAtFour{
  background-color: red;
}
</style>
