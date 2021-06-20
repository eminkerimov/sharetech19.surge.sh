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
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      )
      .then(function (data) {
        this.dataNews = data.body.slice(0, 4);
      });
  },
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>