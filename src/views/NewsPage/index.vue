<template>
  <div class="container">
    <SingleNewsPage :news="news" :title="id" />
    <div class="row">
      <div class="col-12">
        <h2 class="oxshar">OXŞAR XƏBƏRLƏR</h2>
      </div>
    </div>
    <MainNews />
  </div>
</template>

<script>
import SingleNewsPage from "./SingleNewsPage";
import MainNews from "../../components/MainNews";

export default {
  components: {
    SingleNewsPage,
    MainNews,
  },
  data() {
    return {
      news: {},
      id: "",
    };
  },
  // computed: {
  //   getNews() {
  //     return this.$route.path;
  //   },
  // },
  mounted() {
    this.getNews();
  },
  watch: {
    '$route.path': 'getNews',
  },
  methods: {
    getNews() {
      this.id = this.$route.params.id;
      this.$http
        .get(
          `https://jsonplaceholder.typicode.com/posts/${this.id}`
        )
        .then(function (data) {
          this.news = data.body;
        });
    },
  },
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>