<template>
  <div class="sub-nav">
    <div class="quickNav">
      <ul class="quick-nav">
        <li>
          <router-link :to="{name: 'MovieView'}">影院热映</router-link>
        </li>
        <li>
          <router-link :to="{name: 'StatusView'}">欧美新碟榜</router-link>
        </li>
        <li>
          <router-link :to="{name: 'RegisterView'}">注册帐号</router-link>
        </li>
        <li>
          <router-link :to="{name: 'LoginView'}">登录豆瓣</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.quick-nav li a {
  text-decoration: none;
  margin: 0.2rem;
  color: #494949;
  /* max-width: 100%; */
  line-height: 1rem;
  padding: 1.2rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #f6f6f6;
  white-space: nowrap;
  display: block;
  border-radius: 0.2rem;
}
.quick-nav li {
  width: 50%;
  /* box-sizing: border-box; */
  /* 使用浮动元素 */
  float: left;
}
.quick-nav {
  margin: 1rem 0 0 0;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  overflow: hidden;
  list-style-type: none;
}
</style>
