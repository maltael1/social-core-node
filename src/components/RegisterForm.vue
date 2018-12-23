<template>
<form class="register-form">
    <div class="title">
        <span class="header"> Нет аккаунта? </span>
        <span class="description"> Моментальная регистрация </span>
    </div>
    <input type="text" placeholder="Name" v-model="name">  
    <input type="text" placeholder="Email" v-model="email">  
    <input type="password" placeholder="Password" v-model="password">
    <input type="password" placeholder="Confirm password" v-model="confirm_password">
    <div class="">
        <button class="button" >Продолжить регистрацию</button>
    </div>
</form>  
</template>

<script>
const axios = require('axios');

export default {
    name: 'register-form',
    data(){
        return{
        email: "",
        password: "",
        name: "",
        confirm_password: "",
        error: false,
        api: ""
        }
    },
    methods: {
        
    }
}
</script>

<style>
    .register-form{
        border: 1px solid #e6e6e6;
        width: 258px;
        height: 283px;
        padding: 25px;
        background: white;
        border-radius: 3px;
    }
    .register-form input{
        height: 19px;
        width: 244px;
        padding: 6px;
        margin-bottom: 15px;
        border-radius: 3px;
        border: 1px solid #d3d9de;
    }
    .register-form a{
        text-decoration: none;
        width: 150px;
        text-align: center;
        display: inline-block;
    }
    .register-form button{
        background-color: #655CC1;
        border: none;
        color: white;
        padding: 10px 16px;
        min-width: 100px;
        border-radius: 3px;
        cursor: pointer;
    }
    .register-form button:hover{
        background-color: #6F65C5;
    }
    .register-form .title{
        height: 40px;
        margin-bottom: 15px;
    }
    .register-form .header{
        display: block;
        text-align: center;
        font-weight: 900;
        font-size: 28px;
        color: #222;
    }
    .register-form .description{
        display: block;
        text-align: center;
        font-size: 14px;
        color: #888;
    }
</style>
