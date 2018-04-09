import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: null,
    token: null,
    name: null,
    isUserLogin: false
  },
  mutations: {
    updateData (state, payload) {
      let { email, token, name } = payload
      console.log('update')
      if (!state.isUserLogin || state.token === token) {
        state.email = email
        state.token = token
        state.name = name
        state.isUserLogin = !!(token)
        return true
      }
      state.isUserLogin = !!(token)
      return false
    }
  }
})
