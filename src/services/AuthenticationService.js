// AuthenticationService.js
import store from '@/store/index'
import localStorageHandler from './localStorageHandler'
import jwtHandler from './jwtHandler'

let state = store.state
// let message = {
//   done: false,
//   message: ''
// }

export default {
  login (userInfo) {
    if (state.isUserLogin) return
    var { email, password } = userInfo
    console.log(password)
    var users = localStorageHandler.getAllUsers()
    var token = jwtHandler.getJWT({
      email: email,
      password: password
    })
    var name
    var validUser = users.some(user => {
      let userObj = JSON.parse(user)
      if (userObj.password === password) {
        name = userObj.name
        return true
      }
    })
    if (!validUser) {
      console.log('unvalid user:' + password)
      return false
    }
    const user = {
      email: email,
      token: token,
      name: name
    }
    store.commit('updateData', user)
  },

  logout () {
  }
}
