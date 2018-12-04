<template>
<form>
    <span v-if="error">Ошибка входа</span>
    <input type="text" placeholder="Email" v-model="email">  
    <input type="password" placeholder="password" v-model="password">
    <button class="button" v-on:click.prevent="get_token">Войти</button>
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
            .catch(err => { this.error = true})
        }
    }
}
</script>

