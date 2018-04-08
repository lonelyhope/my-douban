<template>
  <div id="app">
    <router-view/>
    <router-view class="view" name="subject"></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState({
      count: state => state.count
    })
  },
  mounted () {
    this.$store.commit('increment')
    console.log(this.count)
  }
}
</script>

<style>
#app {
}
</style>
