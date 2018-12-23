<template>
<form class="login-form">
    <input type="text" placeholder="Email" v-model="email">  
    <input type="password" placeholder="password" v-model="password">
    <div class="">
        <button class="button" v-on:click.prevent="get_token">Войти</button>
        <a href="#">Забыли пароль?</a>
    </div>
</form>  
</template>

<script>
const axios = require('axios');

export default {
    name: 'login-form',
    data(){
        return{
        email: "",
        password: "",
        error: false,
        api: ""
        }
    },
    methods: {
        get_token: function (event) {
            axios
            .post('http://localhost:3000/api/v1/sessions', 
                {
                    email: this.email,
                    password: this.password
                }
            )
            .then(response => (
                this.$emit('complite', response.data.token)
                
            ))
            .catch(err => { alert()})
        }
    }
}
</script>

<style>
    .login-form{
        border: 1px solid #e6e6e6;
        width: 258px;
        height: 132px;
        padding: 25px;
        background: white;
        border-radius: 3px;
    }
    .login-form input{
        height: 19px;
        width: 244px;
        padding: 6px;
        margin-bottom: 15px;
        border-radius: 3px;
        border: 1px solid #d3d9de;
    }
    .login-form a{
        text-decoration: none;
        width: 150px;
        text-align: center;
        display: inline-block;
    }
    .login-form button{
        background-color: #655CC1;
        border: none;
        color: white;
        padding: 10px 16px;
        min-width: 100px;
        border-radius: 3px;
        cursor: pointer;
    }
    .login-form button:hover{
        background-color: #6F65C5;
    }
</style>

