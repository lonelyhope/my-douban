<template>
  <div>
    <header-bar></header-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import SubNav from '@/components/SubNav'

export default {
  components: {
    HeaderBar,
    SubNav
  }
}
</script>

<style>

</style>
