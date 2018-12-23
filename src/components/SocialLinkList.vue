<template>
<form class="social-link-list">
    <span class="title">Войти через другой сервис</span>
    <button class="button vk" >Вконтакте</button>
    <button class="button facebook" >Facebook</button>
    <button class="button ok" >Одноклассники</button>
    <button class="button instagramm" >Instagramm</button>
    <button class="button gmail">Gmail</button>
</form>  
</template>

<script>
const axios = require('axios');

export default {
    name: 'social-link-list',
    data(){
        return{
        email: "",
        password: "",
        error: false,
        api: ""
        }
    },
    methods: {
        
    }
}
</script>

<style>
    .social-link-list{
        border: 1px solid #e6e6e6;
        width: 258px;
        height: 283px;
        padding: 25px;
        background: white;
        border-radius: 3px;
    }
    .social-link-list .button{
        border: none;
        color: white;
        padding: 10px 16px;
        width: 260px;
        margin-bottom: 15px;
        border-radius: 3px;
        cursor: pointer;
    }
    .vk{
        background-color: rgb(101, 154, 197);
    }
    .facebook{
        background-color: rgb(51, 85, 199);
    }
    .ok{
        background-color: rgb(252, 116, 38);
    }
    .instagramm{
        background-color: rgb(238, 107, 179);
    }
    .gmail{
        background-color: rgb(233, 55, 55);
    }
    .vk:hover{
        background-color: rgb(120, 165, 202);
    }
    .facebook:hover{
        background-color: rgb(72, 103, 204);
    }
    .ok:hover{
        background-color: rgb(250, 100, 14);
    }
    .instagramm:hover{
        background-color: rgb(231, 127, 184);
    }
    .gmail:hover{
        background-color: rgb(233, 84, 84);
    }
    .social-link-list .title{
        font-size: 22px;
        padding-bottom: 10px;
        display: block;
    }
</style>
