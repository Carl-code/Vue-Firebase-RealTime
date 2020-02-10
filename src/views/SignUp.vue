<template>
    <div class="sign-up">
        <p>Let´s create a new Account!</p>
        <input type="text" v-model="Email"><br>
        <input type="password" v-model="Password"><br>
        <button @click="signUp">Sign Up</button>
        <span>or go back to <router-link to="/login">login </router-link>.</span>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'signUp',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signUp: function() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function (user) {
                alert('Your account has been created!')
            },
            function (error) {
                alert('Oops.' + err.message)
            }
          );
        }
    }
}
</script>

<style scoped>
    .signUp {
        margin-top: 40px;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }

    button {
        margin-top: 10px;
        width: 10%;
        cursor: pointer;
        background: #41B883;
        color: white;
    }

    span {
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }
</style>