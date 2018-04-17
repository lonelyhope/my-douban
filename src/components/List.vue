<template>
  <div class="list">
    <template v-for="item in items">
      <router-link
        class="thumbnail"
        :to="{
            name: 'DetailView',
            params: { id: item.id }
          }"
        :key="item.id">
        <div class="content">
          <img :src="item.image_hlarge" alt="cover">
          <h3>{{item.title}}</h3>
          <p>{{item.content | subStr}}</p>
        </div>
        <div class="author">
          <span class="name">{{item.category_name}}</span>
          <span class="label" v-if="item.subcategory_name">
            本活动来自栏目 {{item.subcategory_name}}
          </span>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  filters: {
    subStr: function (value) {
      let newVal = value.replace(/<.*?>/g, '')
      return newVal.slice(0, 30)
    }
  }
}
</script>

<style scoped>
.thumbnail {
  border-bottom: solid 1px gainsboro;
  padding: 2.5rem 1.8rem 2.5rem 0;
  margin-left: 1.8rem;
  display: block;
}
h3, p, span, a {
  color: #aaa;
  text-decoration: none;
}
.content {
  width: 100%;
}
.content h3 {
  color: #494949;
  font-size: 1.7rem;
}
.content p {
  font-size: 1.2rem;
}
img {
  width: 25.6%;
  float: right;
  height: 8.678rem;
  margin-left: 2.5rem;
}
.label {
  float: right;
}
</style>
