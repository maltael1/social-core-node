<template>
  <div class="menu-links">
    <router-link to="/">Home</router-link>
    <router-link v-if="!this.$parent.user_signed_in" to="/login">Login</router-link>
  </div>
</template>

<script>

export default {

}
</script>

<style>
.menu-links a {
  display: inline-block;
  text-decoration: none;
  color: #555;
  margin-right: 30px;
}
</style>
