<template>
  <div class="header-bar">
    <h1 class="title">
      <router-link :to="{ name: 'HomeView'}">
        豆瓣
      </router-link>
    </h1>
    <ul class="nav">
      <li>
        <router-link style="color: #2384E8" :to="{ name: 'MovieView'}">
          电影
        </router-link>
      </li>
      <li>
        <router-link style="color: #9F7860" :to="{ name: 'BookView'}">
          图书
        </router-link>
      </li>
      <li>
        <router-link style="color: #E4A813" :to="{ name: 'StatusView'}">
          广播
        </router-link>
      </li>
      <li>
        <router-link style="color: #2AB8CC" :to="{ name: 'GroupView'}">
          小组
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header-bar {
  overflow: hidden;
  border-bottom: solid 1px gainsboro;
}
.title a, li a {
  color: #00b600;
  text-decoration: none;
}
h1 {
  float: left;
  margin: 0px;
  margin-left: 2px;
}
ul {
  list-style-type: none;
  text-decoration: none;
  float: right;
}
li {
  display: inline;
  margin: 2px;
}
</style>
