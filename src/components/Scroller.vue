<template>
  <div class="scroller">
    <div class="header">
      <h2>{{title}}</h2>
      <a href="#" id="more">更多</a>
    </div>
    <div class="content">
      <ul class="hasCover" v-if="type === 'hasCover'">
        <li v-for="item in items" :key="item.id">
          <router-link :to="'subject/' + item.id" append>
            <img v-if="item.images" :src="item.images.large" alt="">
            <span class="title">{{item.title}}</span>
            <!-- 评分星星 -->
            <!-- <rating v-if="item.rating" :rating="item.rating"></rating> -->
          </router-link>
        </li>
      </ul>
      <ul class="onlyString" v-if="type === 'onlyString'">
        <li v-for="item in items" style="border-color: #FFAC2D;" :key="item.href">
          <a :href="item.href" v-if="!item.line" :style="{color: item.color}">
            {{item.title}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'type', 'items']
}
</script>

<style scoped>
.scroller {
  margin-top: 1rem;
}
.header {
  overflow: hidden;
}
.header a {
  float: right;
  margin-right: 0;
  text-decoration: none;
  color: #42bd56;
  line-height: 2rem;
  font-size: 1.44rem;
}
.header h2 {
  display: inline-block;
  margin: 0 0 0 1rem;
  font-size: 1.8rem;
}

.hasCover {
  overflow-x: auto;
  /* display: flex;
  flex-direction: row; */
  list-style: none;
  white-space: nowrap;
  padding: 0;
  text-align: center;
}
.hasCover li {
  margin-left: 1rem;
  display: inline-block;
  width: 100px;
  overflow: auto;
}
.hasCover li a {
  color: #111;
  text-decoration: none;
}
.hasCover li:first-child {
  margin-left: 1rem;
}
.hasCover li span {
  /* text-align: center;
  display: inline-block;
  width: 100%; */
  display: inline-block;
  font-size: 1.5rem;
  margin-top: 1rem;
}
img {
  width: 100%;
  height: 143px;
  display: block;
}
/* onlyString */

</style>
