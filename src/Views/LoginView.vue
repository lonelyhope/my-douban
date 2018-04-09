<template>
  <div>
    <p>Login</p>
    <input
      v-model="email"
      type="text"
      name="email"
      placeholder="email" /><br />
    <input
      v-model="password"
      type="password"
      name="password"
      placeholder="password" /><br />
    <button @click="login">
      登录
    </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login () {
      AuthenticationService.login({
        email: this.email,
        password: this.password
      })
      console.log(this.$store.state.isUserLogin)
    }
  },
  mounted () {
    console.log(localStorage)
  }
}
</script>

<style>

</style>
