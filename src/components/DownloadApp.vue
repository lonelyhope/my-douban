<template>
  <div class="download-app">
    <div class="info">
      <img src="../assets/douban-app-logo.png" alt="下载豆瓣">
      <div class="info-content">
        <strong>豆瓣</strong>
        <div>我们的精神角落</div>
      </div>
    </div>
    <a href="#">去 App Store 免费下载 iOS 客户端</a>
  </div>
</template>

<script>
export default {
  name: 'download-app'
}
</script>

<style scoped>
.download-app {
  padding: 0 0 2rem 0;
  margin-top: 5rem;
}
.info {
  overflow: hidden;
  width: 50%;
  margin: 0 auto 1.5rem;
  font-size: 1.4rem;
  color: #111;
}
img {
  width: 4.8rem;
  height: 4.8rem;
  float: left;
  margin-right: 1.2rem;
}
.info-content strong {
  font-size: 2.4rem;
}
a {
  text-decoration: none;
  color: #42bd56;
  display: block;
  text-align: center;
  font-size: 1.5rem;
}
</style>
