<template>
  <div class="has-header">
    <template v-if="!showLoading">
      <div class="info">
        <h2>
          {{eventItem.title}}
          <span class="badge">{{eventItem.loc_name}}</span>
        </h2>
        <div class="poster">
          <img :src="eventItem.image_hlarge" alt="">
        </div>
        <div class="detail">
          <span>时间:&nbsp;&nbsp;</span>
          <ul>
            <li>{{eventItem.begin_time}}</li>
            <li>{{eventItem.end_time}}</li>
          </ul>
        </div>
        <div class="detail">
          <span>地点:&nbsp;&nbsp;</span>
          <ul>
            <li>{{eventItem.address}}</li>
          </ul>
        </div>
        <div class="detail">
          <span>费用:&nbsp;&nbsp;</span>
          <ul>
            <li>{{eventItem.fee_str}}</li>
          </ul>
        </div>
        <div class="detail">
          <span>类型:&nbsp;&nbsp;</span>
          <ul>
            <li>{{eventItem.category_name}}</li>
          </ul>
        </div>
        <div class="detail">
          <span>起始时间:&nbsp;&nbsp;</span>
          <ul>
            <li v-if="eventItem.owner">{{eventItem.owner.name}}</li>
          </ul>
        </div>
        <tags v-if="eventItem.tags" :items="eventItem.tags | toArray"></tags>
        <div class="describe">
          <h2>活动详情</h2>
          <div v-if="eventItem.content" class="content" v-html="content"></div>
        </div>
      </div>
      <download-app></download-app>
    </template>
    <loading v-show="showLoading"></loading>
  </div>
</template>

<script>
import ActivityService from '@/services/ActivityService'
import Tags from '@/components/Tags'
import Loading from '@/components/Loading'
import DownloadApp from '@/components/DownloadApp'

export default {
  data () {
    return {
      showLoading: true,
      eventItem: null
    }
  },
  computed: {
    content: function () {
      // Careful XSS
      // Remove copyright imgs
      return this.eventItem.content.replace(/<img.+?>/ig, '')
    }
  },
  async created () {
    const id = this.$route.params.id
    try {
      this.eventItem = await ActivityService.loadOne(id)
      this.showLoading = false
    } catch (err) {
      console.log('err in DetailView: ' + err)
    }
  },
  filters: {
    toArray (value) {
      return value.split(',')
    }
  },
  components: {
    Tags,
    Loading,
    DownloadApp
  }
}
</script>

<style>
.badge {
  color: white;
  background-color: #FF8263;
  padding: 0.1rem 0.5rem;
  line-height: 1.8rem;
  font-size: 1.2rem;
  border-radius: 0.2rem;
}
.poster img {
  width: 100%;
  max-width: 22rem;
}
.poster {
  text-align: center;
}
.detail {
  font-size: 1.4rem;
}
.detail span {
  float: left;
  line-height: 150%;
  color: #666666;
}
ul {
  list-style: none;
}
h2 {
  font-size: 1.68rem;
}
.describe h2 {
  color: #072;
  font-weight: bold;
  margin: 2rem 0;
}
</style>
