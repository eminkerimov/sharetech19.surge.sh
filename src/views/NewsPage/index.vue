<template>
  <div class="container">
    <SingleNewsPage :result="result" :title="id" />
    <div class="row">
      <div class="col-12">
        <h2 class="oxshar">Related News</h2>
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
      result: {},
      id: "",
    };
  },
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
          "https://pixabay.com/api/?key=22611941-35feccb113a4702f2550eabeb&q=sea+green+nature&per_page=50"
        )
        .then(function (data) {
          let result = data.body.hits.filter((item) => {
                return item.id == this.id;
            });
            this.result = result[0];        
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>