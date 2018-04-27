<template>
  <div>
    <div id="header">
      <a href="javascript:history.go(-1);">取消</a>
      <h1>
        登录豆瓣
      </h1>
      <p v-if="error">{{ error }}</p>
    </div>

    <form method="get" @submit.prevent="login">
      <div id="form-user">
        <label>
          <input
            v-model="email"
            type="text"
            name="email"
            placeholder="email" />
        </label>
      </div>
      <div id="form-pass">
        <label>
          <input
            v-model="password"
            :type="passwordType"
            name="password"
            placeholder="password" />
          <span @click="changePassType">look</span>
        </label>
      </div>
      <div>
        <button
          class="submit"
          type="submit">
          登录
        </button>
      </div>
    </form>

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

<style scoped>
#header {
  border-bottom: 0.1rem solid #eee;
  text-align: center;
}
#header a {
  text-decoration: none;
  float: left;
  color: #42bd56;
  font-size: 1.5rem;
  font-weight: normal;
}

form {
  width: 100%;
  padding: 2rem 1.5rem;
  box-sizing: border-box;
}
form div[id|=form] {
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  background: #fff;
  border: 0.1rem solid #ccc;
  outline: 0;
  position: relative;
}
form input {
  border: none;
  display: inline-block;
  font-size: 1.5rem;
  line-height: 4rem;
  outline: 0;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
  padding-right: 4rem;
}
form button {
  box-sizing: border-box;
  width: 100%;
  background-color: #42bd56;
  border: 0.1rem solid #17AA52;
  font-size: 1.7rem;
  color: white;
  margin-top: 1rem;
  height: 4.5rem;
}
form div[id|=form], form button {
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}
form span {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
}
footer {
  text-align: center;
}
footer .more-login {
  color: #aaa;
  font-size: 1.4rem;
}
footer .btns {
  margin-top: 4rem;
}
footer .btns a {
  color: #42bd56;
  text-decoration: none;
  font-size: 1.5rem;
}
</style>
