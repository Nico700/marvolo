<template>
  <div class="home">
    <div id="nav">
      <TheHeader />
    </div>
    <TheComic />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
import TheComic from "@/components/TheComic.vue";

export default {
  name: "Comic",
  components: {
    TheHeader,
    TheComic
  }
};
</script>