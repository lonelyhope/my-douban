const delimiter = '||'

function stringToArray (arr) {
  if (!arr) return null
  return arr.split(delimiter)
}

function arrayToString (arr) {
  return arr.join(delimiter)
}

export default {
  getAllUsers () {
    return stringToArray(localStorage.getItem('users'))
  },
  addUser (users, user) {
    users.push(JSON.stringify(user))
    localStorage.setItem('users', arrayToString(users))
  }
}
