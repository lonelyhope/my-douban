<template>
  <div>
    <h1 class="title">欢迎加入豆瓣</h1>
    <p v-if="error">{{ error }}</p>
    <input
      v-model="email"
      type="text"
      name="email"
      placeholder="email" /><br />
    <input
      v-model="password"
      :type="passwordType"
      name="password"
      placeholder="password" />
    <span @click="changePassType">look</span>
    <br />
    <input
      v-model="name"
      type="text"
      name="name"
      placeholder="name" /><br />
    <button @click="register">
      注册
    </button>
    <footer>
      <div class="agreement">点击「注册」代表你已阅读并同意用户使用协议</div>
      <div class="btns">
        <a href="#/pages">下载豆瓣App</a>
      </div>
    </footer>
  </div>
</template>

<script>
import RegisterService from '@/services/RegisterService'
export default {
  data () {
    return {
      email: null,
      name: null,
      password: null,
      error: null,
      passwordType: 'password'
    }
  },
  methods: {
    register () {
      if (!this.email || !this.name || !this.password) {
        this.error = '请输入所有信息'
        return
      }
      RegisterService.Register({
        email: this.email,
        name: this.name,
        password: this.password
      })
      console.log(this.$store.state.isUserLogin)
    },
    changePassType () {
      if (this.passwordType === 'password') {
        this.passwordType = 'text'
      } else {
        this.passwordType = 'password'
      }
    }
  }
}
</script>

<style>

</style>
