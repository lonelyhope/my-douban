<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.name">
        <a href="#">{{item.name ? item.name : item}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding-left: 0;
  overflow: hidden;
}
li a {
  float: left;
  text-decoration: none;
  color: #494949;
  border-radius: 1rem;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #f5f5f5;
}
</style>
