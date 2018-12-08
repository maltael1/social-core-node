<template>
<div class="app">
  <div class="header">
  <header-bar></header-bar>
  </div>
  <div class="page">
    <router-view></router-view>
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
            token: this.$root.$options.VueCookie.get("social-core-token")
        }
    )
    .then(response => (
        this.user_signed_in = true,
        this.loaded = true
        
    ))
    .catch(err => {})
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
body {
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
}
.app {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.header {
  border-bottom: 1px solid #b3b3b3;
  width: 100%;
  padding: 30px 50px;
}

.page {
  width: 100%;
  padding: 30px 50px;
}

.help-text {
  margin-top: 20px;
  font-size: 12px;
}
</style>
