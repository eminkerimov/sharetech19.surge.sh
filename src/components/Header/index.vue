<template>
  <header>
    <div class="container">
      <div v-if="!Searchbox" class="header-main">
        <a class="header-main_logo" href="/">
          <img src="../../assets/img/logo.png" alt="logo" />
        </a>
        <a @click="Searchbox=true" class="header-main_btn" href="#">
          <img src="../../assets/img/srch.png" alt="logo" />
        </a>
      </div>
      <div v-else class="header-search">
        <input
          type="text" :value="value" 
          @input="$emit('input', $event.target.value)" 
          placeholder="Type for searching ..."
        />
        <a @click="searchState" class="header-search_btn" href="#">
          <img src="../../assets/img/Component 2.svg" alt="src" />
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ['value'],
  data() {
    return {
     Searchbox: false,
    };
  },
  methods : {
    searchState () {
      this.Searchbox = !this.Searchbox;
      // this.$emit('searchState', Searchbox);
    }
  }
}
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>
