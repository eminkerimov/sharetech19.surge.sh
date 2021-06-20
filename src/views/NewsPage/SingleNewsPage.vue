<template>
  <div class="news">
    <div class="news-img">
      <img src="https://cars.usnews.com/images/article/202002/128389/1_title_2020_kia_optima.jpg" alt="news-title" />
    </div>
    <div class="news-main">
      <div class="news-main_social">
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-facebook-messenger"></i></a>
        <a href="#"><i class="fab fa-google"></i></a>
        <a href="#"><i class="fab fa-whatsapp"></i></a>
        <a href="#"><i class="fab fa-pinterest"></i></a>
      </div>
      <div class="news-main_content">
        <div class="news-main_content_title">
          <p>{{ news.title }}</p>
          <h3>{{ news.body }}</h3>
          <span>
            <i class="fas fa-user-edit"></i>
            {{ news.id }}
          </span>
          <span>
            <i class="fas fa-comment-alt"></i>
            {{ news.id }}
          </span>
          <span>
            <i class="fas fa-clock"></i>
            {{ time }}
          </span>
        </div>
        <div class="news-main_content_bottom">
          <p>{{ news.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
  computed: {
    time() {
      return this.id;
    },
  },
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>
