<template>
  <div class="editUser">
   <a href="">Edit Users</a>
   <a href="/#/test">First Test Page</a>&nbsp;|&nbsp;
   <a href="">Users</a>&nbsp;|&nbsp;
   <a href="/#/usersFromInternet">Users From Internet</a>&nbsp;|&nbsp;
   <a href="/#/usersFromMLab">Users From MLab</a>&nbsp;|&nbsp;
    <h1>Users</h1>
      <input type="text" v-model="newUser.email" placeholder="Email"><br />
      <input type="text" v-model="newUser.name" placeholder="Full Name">
    <div>
      <input type="submit" class="toggle" value="submit" v-on:click="addUser">
    </div>
    <ul>
      <li v-for="user in users" :key="user.name">
      <input type="checkbox" v-model="user.contacted" v-on:click="toggleUser(user)">
      <span :class="{contacted: user.contacted}">
        {{user.contacted}} : {{user._id}} : {{user.name}} : {{user.email}}
        <button v-on:click="editUser(user)">Edit</button>
        <button v-on:click="deleteUser(user)">x</button>
      </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  name: 'users',
  data () {
    return {
      newUser: {
        contacted: true
      },
      users: [
      ],
      apikey=123456
    }
  },
  methods: {
    addUser: function (e) {
      console.log('add')
      e.preventDefault()
      this.$http.post('https://api.mlab.com/api/1/databases/userlist/collections/users/?apiKey=' + this.apikey, this.newUser)
        .then(function (response) {
          console.log(response)
          console.log(response.data)
          console.log(response.data.name)
          console.log(response.data.email)
          console.log(response.data._id)
          console.log(response.data._id.$oid)
          this.users.push({
            name: this.newUser.name,
            email: this.newUser.email,
            contacted: false,
            _id: response.data._id.$oid
          })
        })
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
      this.users.splice(this.users.indexOf(user),1,user)
      console.log(this.users)
      console.log('user is ' + JSON.stringify(user))
      let url = 'https://api.mlab.com/api/1/databases/userlist/collections/users/' + user._id.$oid + '/?apiKey=' + apikey
      console.log('url is ' + url)
      this.$http.put(url,user)
        .then(function (response) {
          console.log(response)
          console.log(response.data)
        })
    },
    editUser: function (user) {
      let url = '/#/test'
      window.open(url,'_self')
    }
  },
  created: function () {
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
</style>
