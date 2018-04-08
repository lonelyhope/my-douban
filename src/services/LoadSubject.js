import load from './load'

const baseUrl = 'https://api.douban.com/v2/'

export default {
  async getSingleSubject (req) {
    let {classify, id} = req
    let url
    switch (classify) {
      case 'movie':
        url = baseUrl + classify + '/subject/' + id
        break
      case 'book':
        url = baseUrl + classify + '/' + id
    }
    try {
      let subject = await load.load(url)
      return subject
    } catch (err) {
      console.log('err in loadsubject: ' + err)
    }
  }
}
