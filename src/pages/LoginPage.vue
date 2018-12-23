<template>
  <div class="login-page">
    <div class="content">
      <div class="forms">
        <login-form
        @complite="login_with_token"
        ></login-form>
        <register-form
        @complite="register">
        </register-form>
      </div>
      <div class="forms">
        <social-link-list>

        </social-link-list>
      </div>
    </div>
  </div>
</template>

<script>

import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import SocialLinkList from '../components/SocialLinkList'
export default {
  beforeCreate: function () {
    if (this.$parent.user_signed_in == true){
        this.$router.push('/');
    }
  },
  components: {
    LoginForm,
    RegisterForm,
    SocialLinkList
  },
  methods: {
    login_with_token: function(token){
      this.$root.$options.VueCookie.set("social-core-token", token)
    this.$parent.user_signed_in = true
      this.$router.push('/')
    },
    register: function(){

    }
  }
}
</script>

<style>
  .login-page{
    width: 100vw;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 650px;
  }
  .forms{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 540px;
  }
</style>