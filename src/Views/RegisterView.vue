<template>
  <div>
    <p>Register</p>
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
    <input
      v-model="name"
      type="text"
      name="name"
      placeholder="name" /><br />
    <button @click="register">
      注册
    </button>
  </div>
</template>

<script>
import RegisterService from '@/services/RegisterService'
export default {
  data () {
    return {
      email: null,
      name: null,
      password: null
    }
  },
  methods: {
    register () {
      RegisterService.Register({
        email: this.email,
        name: this.name,
        password: this.password
      })
      console.log(this.$store.state.isUserLogin)
    }
  }
}
</script>

<style>

</style>
