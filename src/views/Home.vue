<template>
  <div class="home">
    <TopNews />
    <template v-if="!Searchbox" >
      <Slider />
      <Adv />
    </template>
    <MainNews />
  </div>
</template>

<script>
import TopNews from "@/components/TopNews";
import Slider from "@/components/Slider";
import Adv from "@/components/Adv";
import MainNews from "@/components/MainNews";

export default {
  name: "Home",
  components: {
    TopNews,
    Slider,
    Adv,
    MainNews,
  },
  props: ["Searchbox"],
  updated(){
    console.log("search: ", this.Searchbox)
  }
};
</script>
