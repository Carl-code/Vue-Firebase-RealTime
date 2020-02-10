<template>
    <div class="login">
        <h3>Sign In</h3>
        <input type="text" placeholder="Email"><br>
        <input type="password" placeholder="Password"><br>
        <button>Connection</button>
        <p>You don´t have an account? You can <router-link to="/sign-up">create one</router-link></p>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {};
    },
    methods: {}
}
</script>

<style scoped>
    .login {
        margin-top: 40px;
    }

    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }

    button {
        margin-top: 20px;
        width: 20%;
        cursor: pointer;
        font-weight: 200;
        background: #41B883;
        color: white;
    }

    p {
        margin-top: 40px;
        font-size: 13px;
    }

    p a {
        text-decoration: none;
        cursor: pointer;
    }
</style>