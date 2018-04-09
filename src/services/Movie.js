import load from './load'

const baseUrl = 'https://api.douban.com/v2/movie/'
const tags = ['hotMovies', 'newMovies', 'topMovies']

export default {
  getMovieByTag (tag) {
    return new Promise((resolve, reject) => {
      let url
      switch (tag) {
        case tags[0]:
          url = baseUrl + '/in_theaters?count=8'
          break
        case tags[1]:
          url = baseUrl + '/coming_soon?count=8'
          break
        case tags[2]:
          url = baseUrl + '/top250?count=8'
      }
      load
        .load(url)
        .then(data => resolve(data))
        .catch(err => { console.log(`err when getMovieByTag: ${err}`) })
    })
  },
  getMovie () {
    return new Promise((resolve, reject) => {
      Promise
        .all([
          this.getMovieByTag(tags[0]),
          this.getMovieByTag(tags[1]),
          this.getMovieByTag(tags[1])
        ])
        .then(data => { resolve(data) })
        .catch(err => { console.log(`err when getMoive: ${err}`) })
    })
  }
}
