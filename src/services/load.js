import jsonp from 'jsonp'

export default {
  load (url) {
    return new Promise((resolve, reject) => {
      jsonp(url, null, function (err, data) {
        if (err) {
          console.error(`Load error:${url} ${err.message}`)
        } else {
          resolve(data)
        }
      })
    })
  }
}
