<template>
  <div id="app">
    <router-view/>
    <router-view class="view" name="subject"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
}
</style>
