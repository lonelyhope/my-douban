<template>
  <div>
    <template v-if="!showLoading">
      <div class="subject-card">
        <h1 class="title">{{subject.title}}</h1>
        <div class="subject-info">
          <div class="right">
            <a href="#">
              <img v-if="subject.images" :src="subject.images.large" alt="cover">
            </a>
          </div>
          <div class="left" v-if="subject.rating">
            <!-- <rating :rating="subject.rating">
              <span slot="ratingsCount">{{subject.ratings_count}}人评价</span>
            </rating> -->
            <template v-if="subject.genres && subjectMeta">
              <p class="meta">{{subjectMeta}}</p>
              <a href="#" class="open-app">用App查看影人资料</a>
            </template>
            <template v-if="subject.author && subjectMeta">
              <p class="meta">{{subjectMeta}}</p>
              <a href="#" class="buy">在豆瓣购买</a>
            </template>
          </div>
        </div>
        <div v-if="subject.author" class="vendors-link">
          <a class="link">
            在哪儿买这本书？
            <span class="info">
              豆瓣阅读电子书 66.00元起
            </span>
          </a>
        </div>
        <marking>
          <template slot="book" v-if="subject.author">
            <router-link :to="{ name: 'LoginView'}">想读</router-link>
            <router-link :to="{ name: 'LoginView'}">在读</router-link>
            <router-link :to="{ name: 'LoginView'}">读过</router-link>
          </template>
          <template slot="movie" v-else>
            <router-link :to="{ name: 'LoginView'}">想看</router-link>
            <router-link :to="{ name: 'LoginView'}">看过</router-link>
          </template>
        </marking>
        <div class="subject-intro">
          <h2>{{subject.title}}的简介</h2>
          <p>
            <template v-if="summary && subject.summary">
              {{isExpand ? summary : subject.summary}}……
            </template>
            <a href="javascript:;" v-show="isExpand" v-on:click="expand">
              (展开)
            </a>
            <a href="javascript:;" v-show="!isExpand" v-on:click="expand">
              (收起)
            </a>
          </p>
        </div>
        <div class="genres">
          <h2>查看更多相关分类</h2>
          <template v-if="genres">
            <tags :items="genres"></tags>
          </template>
        </div>
        <div class="subject-pics">
          <h2>{{subject.title}}的图片</h2>
          <ul v-if="subject.images">
            <li class="pic">
              <a href="#">
                <img :src="subject.images.large" alt="poster">
              </a>
            </li>
            <li class="pic">
              <a href="#">
                <img :src="subject.images.large" alt="poster">
              </a>
            </li>
            <li class="pic">
              <a href="#">
                <img :src="subject.images.large" alt="poster">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="subject-comments">
        <h2>{{subject.title}}的短评</h2>
        <div class="content-list">
          <card mold="comment" v-for="item in items" :key="item"></card>
          <a class="list-link" href="javascript:;">显示更多评论</a>
        </div>
      </div>
      <!-- <scroller title="推荐的豆列" type="onlyString" :items="movieTags"></scroller> -->
      <download-app></download-app>
    </template>
    <loading v-show="showLoading"></loading>
  </div>
</template>

<script>
import LoadSubject from '@/services/LoadSubject'
// import Banner from '../components/Banner'
// import Rating from '../components/Rating'
import Marking from '../components/Marking'
import Card from '../components/Card'
import List from '../components/List'
import Scroller from '../components/Scroller'
import Tags from '../components/Tags'
import DownloadApp from '../components/DownloadApp'
import Loading from '../components/Loading'

export default {
  components: {
    List,
    Scroller,
    Tags,
    DownloadApp,
    Loading,
    Marking,
    Card
  },
  data () {
    return {
      subject: null,
      showLoading: true,
      classify: '',
      id: '',
      isExpand: true,
      items: new Array(5)
    }
  },
  methods: {
    expand: function (event) {
      this.isExpand = !(this.isExpand)
    }
  },
  async created () {
    this.id = this.$route.params.id
    this.classify = this.$route.params.classify
    try {
      this.subject = await LoadSubject.getSingleSubject({
        classify: this.classify,
        id: this.id
      })
      this.showLoading = false
      console.log('subject:')
      console.log(this.subject)
    } catch (err) {
      console.log('subject view err: ' + err)
    }
  },
  computed: {
    subjectMeta: function () {
      if (this.classify === 'movie') {
        return this.subject.year + '/' +
             this.subject.genres.join(' / ') + ' / ' +
             this.subject.casts.map(item => item.name).join(' / ') + ' / ' +
             this.subject.directors.map(item => item.name).join(' / ') + ' / ' +
             this.subject.countries.join(' / ')
      } else if (this.classify === 'book') {
        return this.subject.author.join(' / ') +
             this.subject.translator.join(' / ') + ' / ' +
             this.subject.publisher + ' / ' +
             this.subject.binding + ' / ' + this.subject.pages + ' / ' +
             this.subject.price + ' / ' + this.subject.pubdate
      }
    },
    summary: function () {
      if (this.subject.summary) {
        return this.subject.summary.slice(0, 120)
      }
    },
    genres: function () {
      if (this.classify === 'book') {
        return this.subject.tags
      } else if (this.classify === 'movie') {
        return this.subject.genres
      }
    }
  }
}
</script>

<style>

</style>
