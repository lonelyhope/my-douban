<template>
  <div class="card">
    <div class="desc">
      <a href="#">
        <img src="../assets/douban-app-logo.png" alt="">
      </a>
      <a href="#">
        <div class="user-info">
          <strong>
            豆瓣<span v-if="mold === 'quote'">写了日记</span>
          </strong>
          <div class="timestamp">2017-03-01 19:30:41</div>
        </div>
      </a>
    </div>
    <div v-if="mold === 'quote'" class="article-card">
      <div class="title">
        豆瓣App 4.12.0 主要更新
      </div>
      <div class="detail">
        - 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...
      </div>
    </div>
    <p v-if="mold === 'comment'" class="comment">
      可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你
    </p>
    <div class="info">
      <span class="btn like"><i>4</i></span>
      <span v-if="mold === 'quote'" class="btn comment"><i>0</i></span>
      <span v-if="mold === 'quote'" class="btn retweet"><i>1</i></span>
      <span class="btn more"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    mold: {
      type: String,
      required: true
    }
  }
}
</script>
