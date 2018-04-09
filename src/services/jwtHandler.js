import jwt from 'jsonwebtoken'

const secretKey = 'my-douben-key'
const ONE_WEEK = 60 * 60 * 24 * 7

export default {
  getJWT (payload) {
    return jwt.sign(
      payload,
      secretKey,
      { expiresIn: ONE_WEEK })
  }
}
