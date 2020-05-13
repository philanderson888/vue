<template>
    <div>
        <h1>Login</h1>
        <div v-if="error" class="error">{{error.message}}</div>
        <form @submit.prevent="pressed">
            <div class="email">
                <input type="email" v-model="email" placeholder="email" />
            </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="password"/>
            </div>
            <button type="submit">Log In</button>
            <router-link to="/register"><button type="button">Register</button></router-link>
        </form>
    </div>
</template>