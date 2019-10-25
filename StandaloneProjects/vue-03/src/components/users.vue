<template>
  <div class="users">
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
      <input type="checkbox" v-model="user.contacted">
      <span :class="{contacted: user.contacted}">
        {{user.name}} : {{user.email}}
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
      },
      users: [
        {
          name: 'Phil Anderson',
          contacted: false,
          email: 'phil@anderson.com'
        },
        {
          name: 'Tom Payne',
          contacted: false,
          email: 'phil@anderson.com'
        },
        {
          name: 'George White',
          contacted: false,
          email: 'phil@anderson.com'
        }
      ]
    }
  },
  methods: {
    addUser: function (e) {
      console.log('add')
      e.preventDefault()
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false
      })
    },
    deleteUser: function (user) {
      this.users.splice(this.users.indexOf(user), 1)
    }
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
