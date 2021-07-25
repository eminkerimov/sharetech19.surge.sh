<template>
  <router-link :to="{ name: 'NewsPage', params: news }" class="col-3">
    <a href="#">
      <div class="topnews-item">
        <div class="topnews-item-img">
          <img :src="news.largeImageURL" alt="news.title" />
        </div>
        <div class="topnews-item-content">
          <h3>{{news.user}}</h3>
          <p>{{news.tags}}</p>
        </div>
      </div>
    </a>
  </router-link>
</template>

<script>
export default {
  props: ["news"],
};
</script>

<style lang="scss" scoped>
@import "./style.scss";

@media only screen and (max-width: 1199px) {
    .topnews-item-content {
      width: 120px;
      margin: 0 5px;
    }
}
</style>