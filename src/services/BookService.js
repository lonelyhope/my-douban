import load from './load'

const baseUrl = 'https://api.douban.com/v2/book/search?'
const novel = 'novel'
const novelQ = '虚构类'
const reality = 'reality'
const realityQ = '非虚构类'
const travel = 'travel'
const travelQ = '旅行'

export default {
  getBookByTag (req, count = 8) {
    return new Promise((resolve, reject) => {
      let { tag } = req
      let url
      switch (tag) {
        case novel:
          url = baseUrl + `q=${novelQ}&count=${count}`
          break
        case reality:
          url = baseUrl + `q=${realityQ}&count=${count}`
          break
        case travel:
          url = baseUrl + `q=${travelQ}&count=${count}`
      }
      load
        .load(url)
        .then(data => { resolve(data) })
        .catch(err => { reject(err) })
    })
  },
  getBook () {
    return new Promise((resolve, reject) => {
      Promise
        .all([
          this.getBookByTag({ tag: novel }),
          this.getBookByTag({ tag: reality }),
          this.getBookByTag({ tag: travel })
        ])
        .then(data => { resolve(data) })
        .catch(err => { reject(err) })
    })
  }
}
