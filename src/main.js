import Vue from 'vue'
import App from './App'
import router from './router'
var VueCookie = require('vue-cookie');

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  VueCookie,
  template: '<App/>',
  components: {App},
  data: {
    user_signed_id: true
  }
  
})