<template>
  <router-link :to="{ name: 'NewsPage', params: news }" class="col-4">
    <a href="#" v-if="showAdd(index)">
      <div class="mainnews-item">
        <div class="mainnews-item_img">
          <img :src="news.largeImageURL" alt="news.title" />
        </div>
        <div class="mainnews-item_content">
          <p>{{ news.user }}</p>
          <h3>{{ news.tags }}</h3>
          <div class="mainnews-item_content_bottom">
            <span>
              <i class="fas fa-user-edit"></i>
              {{ news.user }}
            </span>
            <span>
              <i class="fas fa-comment-alt"></i>
              {{ news.comments }}
            </span>
            <span>
              <i class="fas fa-clock"></i>
              {{ news.likes }}
            </span>
          </div>
        </div>
      </div>
    </a>

    <a href="#" v-else>
      <div class="mainnews-item">
        <div class="adv-panel small">
          <h2>SKY NATURE</h2>
        </div>
      </div>
    </a>
  </router-link>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
    },
    index : {type : Number},
  },
  methods: {
    showAdd(num) {
      return !(num % 5 == 0 && num != 0);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>