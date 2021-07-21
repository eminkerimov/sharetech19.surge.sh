<template>
  <section class="topnews">
    <div class="container">
      <div class="row">
        <SingleTopNews :news="news" v-for="news in dataNews" :key="news.id" />
      </div>
    </div>
  </section>
</template>


<script>
import SingleTopNews from "./SingleTopNews";

export default {
  name: "TopNews",
  components: {
    SingleTopNews,
  },
  data() {
    return {
      dataNews: [],
    };
  },
  created() {
    this.$http
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=0906bae561b840eb8efc9af41646b3b5"
      )
      .then(function (data) {
        console.log(data);
        this.dataNews = data.body.articles.slice(0, 4);
      });
  },
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>