import store from '@/store/index'
import localStorageHandler from './localStorageHandler'
import jwtHandler from './jwtHandler'

export default {
  Register (userInfo) {
    // localStorage.removeItem('users')
    var users = localStorageHandler.getAllUsers()
    if (!users) users = []
    var { email, password, name } = userInfo

    var exists = users.some(user => {
      let userObj = JSON.parse(user)
      if (userObj.email && userObj.email === email) return true
    })
    if (exists) return
    var token = jwtHandler.getJWT({
      email: email,
      password: password
    })
    const user = {
      email: email,
      token: token,
      name: name,
      password: password
    }
    store.commit('updateData', user)
    localStorageHandler.addUser(users, user)
    console.log('localStorage:')
    console.log(localStorage)
  }
}
