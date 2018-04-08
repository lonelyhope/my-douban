<template>
  <div>
    <sub-nav></sub-nav>
    <list :items="events"></list>
    <infinite-loading @infinite="onInfinite">
      <loading slot="spinner"></loading>
    </infinite-loading>
  </div>
</template>

<script>
import SubNav from '@/components/SubNav'
import List from '@/components/List'
import InfiniteLoading from 'vue-infinite-loading'
import ActivityService from '@/services/ActivityService'
import Loading from '@/components/Loading'

export default {
  data () {
    return {
      events: [],
      start: 0,
      count: 3
    }
  },
  components: {
    SubNav,
    List,
    InfiniteLoading,
    Loading
  },
  methods: {
    async load () {
      let events = null
      try {
        events = await ActivityService.load(this.start, this.count)
        this.start += this.count
        this.events = this.events.concat(events)
        console.log(`load events in HomeView: ${this.events.length}`)
      } catch (err) {
        console.log(`error in List HomeView: ${err}`)
      }
    },
    onInfinite ($state) {
      setTimeout(() => {
        this.load()
        $state.loaded()
      }, 1000)
    }
  },
  mounted () {
    this.load()
  }
}
</script>

<style>

</style>
