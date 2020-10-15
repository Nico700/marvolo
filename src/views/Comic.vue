<template>
  <div class="home">
    <TheComic />
  </div>
</template>

<script>
// @ is an alias to /src
import TheComic from "@/components/TheComic.vue";

export default {
  name: "Comic",
  components: {
    TheComic
  }
};
</script>