<template>
  <div class="has-header">
    <scroller title="最受关注图书｜虚构类" type="hasCover" :items="novel"></scroller>
    <scroller title="最受关注图书｜非虚构类" type="hasCover" :items="reality"></scroller>
    <scroller title="豆瓣纸书" type="hasCover" :items="travel">
      <div class="promItem" slot="promItem">
        <img class="corver" src="../assets/book_zw.jpg" alt="">
        <div class="content">
          <span class="price">¥ 68</span>
          <p class="name">造物</p>
          <p class="info">改变世界的万物图典，3000幅图里的发明与冒险</p>
        </div>
      </div>
    </scroller>
    <scroller title="发现好书" type="onlyString" :items="bookTags"></scroller>
    <types></types>
    <download-app></download-app>
  </div>
</template>

<script>
import Scroller from '@/components/Scroller'
import Types from '@/components/Types'
import DownloadApp from '@/components/DownloadApp'

import BookService from '@/services/BookService'

export default {
  components: { Scroller, Types, DownloadApp },
  data () {
    return {
      novel: [],
      reality: [],
      travel: [],
      bookTags: [
        {
          title: '不可饶恕的女人们',
          href: 'https://m.douban.com/doulist/35573',
          color: '#42BD56'
        },
        {
          title: '爱欲书',
          href: 'https://m.douban.com/doulist/38088147',
          color: '#FF4055'
        },
        {
          title: '他们还写侦探小说',
          href: 'https://m.douban.com/doulist/645579',
          color: '#4F9DED'
        },
        {
          line: true
        },
        {
          title: '人生识字始忧患',
          href: 'https://m.douban.com/doulist/192653',
          color: '#CC3344'
        },
        {
          title: '詩歌書店',
          href: 'https://m.douban.com/doulist/89925',
          color: '#FFAC2D'
        },
        {
          title: '尝试理解人类变化无常不可测心理相关小荐',
          href: 'https://m.douban.com/doulist/45361809',
          color: '#3BA94D'
        }
      ]
    }
  },
  methods: {
    async getBook () {
      let books
      try {
        books = await BookService.getBook()
        this.novel = books[0].books
        this.reality = books[1].books
        this.travel = books[2].books
        console.log(books)
      } catch (err) {
        console.log('error in bookview: ' + err)
      }
    }
  },
  mounted () {
    this.getBook()
  }
}
</script>
