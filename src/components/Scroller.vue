<template>
  <div>
    <div class="header">
      <h2>{{title}}</h2>
      <a href="#">更多</a>
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

<style>

</style>
