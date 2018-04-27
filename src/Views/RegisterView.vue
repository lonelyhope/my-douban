<template>
  <div>
    <h1 class="title">欢迎加入豆瓣</h1>
    <p v-if="error">{{ error }}</p>
    <div id="content">
      <input
        v-model="email"
        type="text"
        name="email"
        placeholder="email" /><br />
      <input
        id="pass"
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
        立即注册
      </button>
    </div>
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

<style scoped>
/* 标题 */
.title {
  color: #42bd56;
  font-size: 4rem;
  margin: 10% 0 9%;
  text-align: center;
  font-weight: 300;
}
#content {
  width: 100%;
  padding: 2rem 1.5rem;
  box-sizing: border-box;
}
/* 输入框 */
#content input {
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  font-size: 1.5rem;
  line-height: 4rem;
  padding: 1px;
  background: #fff;
  border: 0.1rem solid #ccc;
  outline: 0;
}
#content button {
  box-sizing: border-box;
  width: 100%;
  background-color: #42bd56;
  border: 0.1rem solid #17AA52;
  font-size: 1.7rem;
  color: white;
  margin-top: 1rem;
  height: 4.5rem;
}
#content button, #content input {
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}
footer {
  text-align: center;
}
footer .agreement {
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
