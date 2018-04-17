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
  max-width: 41.2rem;
  margin: 0 auto;
}
html {
  font-size: 62.5%;
  width: 100%;
}
.body {
 color: #111;
}
.has-header {
  margin-top: 60px;
}
</style>
