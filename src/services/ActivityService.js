import jsonp from 'jsonp'

export default {
  load (start, count) {
    return new Promise((resolve, reject) => {
      jsonp('https://api.douban.com/v2/event/list?loc=108288&start=' +
      start + '&count=' + count,
      null, function (err, data) {
        if (err) {
          console.error(`ActivityService load error: ${err.message}`)
        } else {
          resolve(data.events)
        }
      })
    })
  },
  loadOne (id) {
    return new Promise((resolve, reject) => {
      jsonp('https://api.douban.com/v2/event/' + id, null,
        (err, data) => {
          if (err) {
            console.error(`ActivityService loadOne error: ${err.message}`)
          } else {
            resolve(data)
          }
        })
    })
  }
}
