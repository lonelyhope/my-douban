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
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #f3f3f3;
  display: flex;
  position: fixed;
  justify-content: space-between;
  background-color: white;
  z-index: 1000;
  top: 0;
  left: 0;
}
.title a, li a {
  color: #00b600;
  text-decoration: none;
}
h1 {
  display: inline-block;
  margin: 0.3rem;
  font-size: 2.8rem;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
}
ul {
  vertical-align: middle;
  list-style: none;
  margin: 0;
  padding: auto;
  display: flex;
  align-items: center;
}
li a {
  font-size: 1.6rem;
  display: inline-block;
  margin: 0.4rem;
}
</style>
