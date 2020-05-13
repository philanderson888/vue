<template>
  <div class="login">
    <h1>This is a login page</h1>
    <form @submit.prevent="pressed">
      <div>
        <input type="email" placeholder="email">
      </div>
      <div>
        <input type="password" placeholder="password">
      </div>
      <button type="submit">Login</button>
    </form>
    <div></div>
    <router-link to="/register">Register</router-link>
  </div>
</template>
