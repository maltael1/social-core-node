<template>
<div class="app">
  <div class="page">
    <router-view v-if="loaded"></router-view>
  </div>
</div>
</template>

<script>
const axios = require('axios');
import HeaderBar from './components/HeaderBar'
export default {
  beforeCreate: function () {
    axios
    .get('http://localhost:3000/api/v1/sessions', 
        {
          headers: {
            Authorization: "Token "+this.$root.$options.VueCookie.get("social-core-token")
          }
        }
    )
    .then(response => (
      this.user_signed_in = true,
      this.loaded = true
    ))
    .catch(err => {
      if (this.$root._router.history.current.name != "login"){
        this.$router.push('/login');
      };
      this.loaded = true;

      
    })
  },
  components: {
    HeaderBar
  },
  data(){
    return{
      user_signed_in: false,
      loaded: false
    }
  },
  name: 'app'
}

</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .app{
    background-color: #fafafa;
    width: 100vw;
    min-height: 100vh;
  }
  .page{
    width: 100vw;
    min-height: 100vh;
  }
</style>
