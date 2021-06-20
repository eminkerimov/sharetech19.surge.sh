<template>
  <router-link :to="{ name: 'NewsPage', params: news }" class="col-4">
    <a href="#" v-if="showAdd(index)">
      <div class="mainnews-item">
        <div class="mainnews-item_img">
          <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/C448/production/_117684205_lotus.jpg" alt="news.title" />
        </div>
        <div class="mainnews-item_content">
          <p>{{ news.title }}</p>
          <h3>{{ news.body }}</h3>
          <div class="mainnews-item_content_bottom">
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
        </div>
      </div>
    </a>

    <a href="#" v-else>
      <div class="mainnews-item">
        <div class="adv-panel small">
          <h2>REKLAM ÜÇÜN</h2>
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
      default: function () {
        return { urlToImage: 'https://image.cnbcfm.com/api/v1/image/106851305-16153034722021-03-09t145859z_1207388438_rc2q7m98ixbe_rtrmadp_0_usa-climate-directaircapture.jpeg?v=1615303508'}
      }
    },
    index : {type : Number},
  },
  methods: {
    showAdd(num) {
      return !(num % 5 == 0 && num != 0);
    },
  },
  computed: {
    time() {
      return this.news.id;
    },
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>