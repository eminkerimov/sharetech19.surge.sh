<template>
  <section class="mainnews">
    <div class="container">
      <div class="row">
        <SingleMainNews
          :news="news"
          :index="index"
          v-for="(news, index) in dataNews.slice(0, this.newsCount)"
          :key="news.id"
        />
      </div>
      <div v-if="newsCount < dataNews.length" class="row">
        <div class="col-12">
          <div class="mainnews-more">
            <button @click="moreNews">Load More</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SingleMainNews from "./SingleMainNews.vue";

export default {
  name: "MainNews",
  components: {
    SingleMainNews,
  },
  data: () => ({
    dataNews: [],
    newsCount: 9,
  }),
  created() {
    this.$http
      .get(
        "https://pixabay.com/api/?key=22611941-35feccb113a4702f2550eabeb&q=sea+green+nature&per_page=50"
      )
      .then(function (data) {
        this.dataNews = data.body.hits;
      });
  },
  methods: {
    moreNews() {
      this.newsCount += 9;
    },
  },
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>