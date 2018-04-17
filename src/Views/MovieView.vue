<template>
  <div class="movie-view has-header has-header">
    <scroller title="影院热映" type="hasCover" :items="hotMovies"></scroller>
    <scroller title="免费在线观影" type="hasCover" :items="topMovies"></scroller>
    <scroller title="新片速递" type="hasCover" :items="newMovies"></scroller>
    <scroller title="发现好电影" type="onlyString" :items="movieTags"></scroller>
    <types></types>
    <download-app></download-app>
  </div>
</template>

<script>
import DownloadApp from '@/components/DownloadApp'
import Scroller from '@/components/Scroller'
import Types from '@/components/Types'
import Movie from '@/services/Movie'

export default {
  components: {
    DownloadApp,
    Scroller,
    Types
  },
  data () {
    return {
      hotMovies: [],
      newMovies: [],
      topMovies: [],
      movieTags: []
    }
  },
  methods: {
    async getMovie () {
      try {
        let movies = await Movie.getMovie()
        this.hotMovies = movies[0].subjects
        this.newMovies = movies[1].subjects
        this.topMovies = movies[2].subjects
        console.log(movies)
      } catch (err) {
        console.log('get Movie err in MovieView: ' + err)
      }
    }
  },
  mounted () {
    this.getMovie()
  }
}
</script>

<style>

</style>
