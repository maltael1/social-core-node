<template>
    <login-form
    @complite="login_with_token"
    ></login-form>
</template>

<script>

import LoginForm from '../components/LoginForm'
export default {
  components: {
    LoginForm
  },
  methods: {
    login_with_token: function(token){
      this.$parent.user_signed_in = true
      this.$router.push('/')
    }
  }
}
</script>