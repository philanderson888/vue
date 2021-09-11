<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="pressed">
            <div class="login">
                <input type="email" v-model="email" placeholder="login" />
            </div>
            <div class="password">
                <input type="password" placeholder="password" v-model="password" />
            </div>
            <button type="button">Log In</button>
        </form>
        <div class="error" v-if="error">{{error.message}}</div>
        <span>Need an account? Click here to <router-link to="/register"></router-link></span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: null,
            password: null,
            error: null
        }
    },
    methods:{
        pressed(){
            alert('pressed')
        }
    }
}
</script>>