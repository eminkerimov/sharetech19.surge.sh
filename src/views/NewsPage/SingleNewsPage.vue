<template>
  <div class="news">
    <div class="news-img">
      <img :src="result.largeImageURL" alt="news-title" />
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
          <p>{{ result.user }}</p>
          <h3>{{result.tags}}</h3>
          <span>
            <i class="fas fa-user-edit"></i>
            {{ result.user }}
          </span>
          <span>
            <i class="fas fa-comment-alt"></i>
            {{ result.comments }}
          </span>
          <span>
            <i class="fas fa-clock"></i>
            {{ result.likes }}
          </span>
        </div>
        <div class="news-main_content_bottom">
          <p>Today, we live with ubiquitous technology designed to constantly pull for our attention. But many scientists believe our brains were not made for this kind of information bombardment, and that it can lead to mental fatigue, overwhelm, and burnout, requiring “attention restoration” to get back to a normal, healthy state. <strong>Strayer is one of those researchers. He believes that being in nature restores depleted attention circuits, which can then help us be more open to creativity and problem-solving.</strong> “When you use your cell phone to talk, text, shoot photos, or whatever else you can do with your cell phone, you’re tapping the prefrontal cortex and causing reductions in cognitive resources,” he says.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>
