<template>
  <div id="app">
    <Header v-model="name"/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";


export default {
  components: {
    Header,
    Footer,
  },
  data: () => ({
    name: '',
    Searchbox: false,
  }),
  method: {
    getSearch () {
      this.Searchbox = !this.Searchbox;
    }
  },
};
</script>

<style lang="scss">
@import "assets/scss/__main.scss";
</style>
