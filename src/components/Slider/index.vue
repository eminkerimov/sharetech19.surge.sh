<template>
  <section v-if="!Searchbox" class="slider">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="slider-item">
            <a href="#">
              <img src="../../assets/img/Rectangle 45.png" alt="rectangle45" />
              <div class="slider-item-content">
                <h3>
                  Everything in nature is lyrical in its ideal essence, tragic in its fate, and comic in its existence. George Santanayao
                </h3>
                <span>
                  <i class="fas fa-user-edit"></i>
                  2 min ago
                </span>
                <span>
                  <i class="fas fa-clock"></i>
                  7 min
                </span>
                <span>
                  <i class="fas fa-heart"></i>
                  160
                </span>
              </div>
            </a>
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col-12">
              <div class="slider-item right">
                <a href="#">
                  <img src="../../assets/img/Rectangle 4.1.png" alt="rectangle45" />
                  <div class="slider-item-content">
                    <h3>
                      Look deep into nature, and then you will understand everything better. Albert Einstein
                    </h3>
                    <span>
                      <i class="fas fa-user-edit"></i>
                      2 min ago
                    </span>
                    <span>
                      <i class="fas fa-clock"></i>
                      7 min
                    </span>
                    <span>
                      <i class="fas fa-heart"></i>
                      160
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="slider-item right">
                <a href="#">
                  <img src="../../assets/img/Rectangle 4.4.png" alt="rectangle45" />
                  <div class="slider-item-content">
                    <h3>
                      The earth has music for those who listen. William Shakespeare
                    </h3>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-6">
              <div class="slider-item right">
                <a href="#">
                  <img src="../../assets/img/Rectangle 4.43.png" alt="rectangle45" />
                  <div class="slider-item-content">
                    <h3>
                      Nature does not hurry, yet everything is accomplished. Lao Tzu
                    </h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "Slider",
    data() {
    return {
     Searchbox: false,
    };
  },
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>