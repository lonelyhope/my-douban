<template>
  <div>
    <a href="javascript:history.go(-1);">取消</a>
    <h1>
      登录豆瓣
    </h1>
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
    <button @click="login">
      登录
    </button>

    <footer>
      <div class="more-login">使用其他方式登录 &amp; 找回密码</div>
      <div class="btns">
        <router-link :to="{name: 'RegisterView'}">注册豆瓣帐号</router-link>
        <a href="#/pages">下载豆瓣App</a>
      </div>
    </footer>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: null,
      password: null,
      error: null,
      passwordType: 'password'
    }
  },
  methods: {
    login () {
      AuthenticationService.login({
        email: this.email,
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
  },
  mounted () {
    console.log(localStorage)
  }
}
</script>

<style>

</style>
