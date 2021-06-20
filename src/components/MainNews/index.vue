<template>
  <section class="mainnews">
    <div class="container">
      <div class="row">
        <SingleMainNews
          :news="news"
          :index="index"
          v-for="(news, index) in filterNews.slice(0, this.newsCount)"
          :key="news.id"
        />
      </div>
      <div v-if="newsCount < filterNews.length" class="row">
        <div class="col-12">
          <div class="mainnews-more">
            <button @click="moreNews">Digər xəbərlər</button>
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
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      )
      .then(function (data) {
        this.dataNews = data.body;
      });
  },
  computed: {
    filterNews: function () {
      return this.dataNews.filter((news) => {
        return news.title.match(this.name);
      });
    },
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