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

<style>

</style>
