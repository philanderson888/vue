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
import { eventBus } from "../main.js";
export default {
  created() {
    eventBus.$on("onlineStatus", data => {
      if (data) {
        console.log("connection has gone online");
        this.onLine = true;
        this.getAuthenticationToken();
        this.getOnlineUsers();
        this.getOnlineRegister();
      } else {
        console.log("connection has gone offline");
        this.onLine = false;
      }
    });
    this.users = JSON.parse(localStorage.users);
    this.register = JSON.parse(localStorage.register);
    if (this.onLine) {
      this.getAuthenticationToken();
    }
  },
  data: function() {
    return {
      onLine: navigator.onLine,
      users: [],
      onlineUsers: {},
      register: [],
      onlineRegister: {},
      searchUser: {
        firstName: "",
        lastName: ""
      },
      idToken: "",
      searchUser: {
        firstName: "",
        lastName: ""
      },
      isDisabled: true
    };
  },
  methods: {
    getAuthenticationToken() {
      let authenticationSignInObject = {
        email: process.env.VUE_APP_email,
        password: process.env.VUE_APP_password,
        returnSecureToken: true
      };
      this.$http
        .post(
          "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" + process.env.VUE_APP_apikey,
          authenticationSignInObject,
          { headers: { "Content-Type": "application/json" } }
        )
        .then(response => {
          if (response.status === 200) {
            this.idToken = response.body.idToken;
          }
        })
        .then(() => {
          this.getOnlineUsers();
          this.getOnlineRegister();
        }),
        error => {
          console.log("error");
        };
    },
    getOnlineUsers() {
      let url =
        "https://philanderson888-churchregister.firebaseio.com/users.json?auth=" +
        this.idToken;
      this.$http
        .get(url)
        .then(response => {
          console.log("gettting all users from online database");
          console.log(response.status);
          if (response.status === 200) {
            this.onlineUsers = response.body;
            console.log(this.onlineUsers);
          }
        })
        .then(() => {
          this.syncOnlineWithLocalUsers();
        });
    },
    getOnlineRegister() {
      let url =
        "https://philanderson888-churchregister.firebaseio.com/register.json?auth=" +
        this.idToken;
      this.$http.get(url).then(response => {
        console.log("getting all regisrations from online database");
        console.log(response.status);
        if (response.status === 200) {
          this.onlineRegister = response.body;
          console.log(this.onlineRegister);
          this.syncOnlineWithLocalRegister();
        }
      });
    },
    syncOnlineWithLocalUsers() {
      console.log("syncing online users with local");
      for (let userId in this.onlineUsers) {
        let matchFound = false;
        let onlineUser = {
          userId: userId,
          firstName: this.onlineUsers[userId].firstName,
          lastName: this.onlineUsers[userId].lastName
        };
        let onlineUserNameString = onlineUser.firstName + onlineUser.lastName;
        console.log(onlineUser);
        console.log("matching online with local users");
        this.users.forEach(function(localUser) {
          let localUserNameString = localUser.firstName + localUser.lastName;
          if (onlineUserNameString === localUserNameString) {
            matchFound = true;
            if (localUser.userId == "") {
              localUser.userId = onlineUser.userId;
            }
          }
        });
        if (!matchFound) {
          //user does not exist locally so add it
          this.users.push(onlineUser);
          localStorage.users = JSON.stringify(this.users);
          //also push new user up to the cloud!!!
        }
      }
    },
    syncOnlineWithLocalRegister() {
      console.log("syncing online registrations with local");
      for (let registrationId in this.onlineRegister) {
        let matchFound = false;
        let onlineRegistration = {
          registrationId: registrationId,
          userId: this.onlineRegister[registrationId].userId,
          firstName: this.onlineRegister[registrationId].firstName,
          lastName: this.onlineRegister[registrationId].lastName
        };
        console.log(onlineRegistration);
        console.log("matching online with local registration");
        this.register.forEach(function(localRegistration) {
          if (localRegistration.registrationId === registrationId) {
            matchFound = true;
          }
        });
        if (!matchFound) {
          //registration does not exist locally so add it
          this.register.push(onlineRegistration);
        }
      }
      localStorage.register = JSON.stringify(this.register);
    },
    addNewUser(user) {
      let userNameString = user.firstName + user.lastName;
      let duplicateUser = false;
      this.users.forEach(function(userItem) {
        let nameString = userItem.firstName + userItem.lastName;
        if (userNameString === nameString) {
          duplicateUser = true;
        }
      });
      if (!duplicateUser) {
        let newUser = {
          userId: "",
          firstName: user.firstName,
          lastName: user.lastName
        };
        console.log(this.onLine);
        if (this.onLine) {
          this.$http
            .post(
              "https://philanderson888-churchregister.firebaseio.com/users.json",
              newUser
            )
            .then(response => {
              newUser.userId = response.body.name;
              this.users.push(newUser);
              localStorage.users = JSON.stringify(this.users);
              this.onlineUsers = this.getAllUsers();
              console.log(this.onlineUsers);
            }),
            error => {
              console.log(error);
            };
        } else {
          this.users.push(newUser);
          localStorage.users = JSON.stringify(this.users);
        }
      } else {
        alert("User already exists");
      }
    },
    registerAttendance(user) {
      let canRegister = true;
      this.register.forEach(function(registration) {
        if (
          registration.firstName == user.firstName &&
          registration.lastName == user.lastName
        ) {
          if (Math.abs(registration.registrationDate - new Date()) < 3600000) {
            canRegister = false;
          }
        }
      });
      if (canRegister) {
        let newRegistration = {
          userId: user.userId,
          firstName: user.firstName,
          lastName: user.lastName,
          registrationDate: Date.parse(new Date())
        };
        if (this.onLine) {
          this.$http
            .post(
              "https://philanderson888-churchregister.firebaseio.com/register.json",
              newRegistration
            )
            .then(response => {
              console.log("registering new entry in register datahbase");
              console.log(newRegistration);
              newRegistration.registrationId = response.body.name;
              this.register.unshift(newRegistration);
              localStorage.register = JSON.stringify(this.register);
              console.log("updated register array is now");
              console.log(this.register);
            }),
            error => {
              console.log("looks like there has been a problem");
              console(log(error));
            };
        } else {
          this.register.unshift(newRegistration);
          localStorage.register = JSON.stringify(this.register);
        }
      }
    },
    computeDate(dateToCompute) {
      return moment(dateToCompute).calendar();
    }
  },
  computed: {
    filteredUsers() {
      var self = this;
      let filteredUserArray = this.users.filter(function(userItem) {
        return (
          _.includes(
            userItem.firstName.toLowerCase(),
            self.searchUser.firstName.toLowerCase()
          ) &&
          _.includes(
            userItem.lastName.toLowerCase(),
            self.searchUser.lastName.toLowerCase()
          )
        );
      });
      if (filteredUserArray.length > 0) {
        self.isDisabled = true;
      } else {
        self.isDisabled = false;
      }
      return filteredUserArray;
    },
    filteredRegister() {
      var self = this;
      let filteredRegisterArray = this.register.filter(function(registerItem) {
        return (
          _.includes(
            registerItem.firstName.toLowerCase(),
            self.searchUser.firstName.toLowerCase()
          ) &&
          _.includes(
            registerItem.lastName.toLowerCase(),
            self.searchUser.lastName.toLowerCase()
          )
        );
      });
      return filteredRegisterArray;
    }
  }
};
</script>

