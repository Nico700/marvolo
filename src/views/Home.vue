<template>
  <div class="home">
    <img src="../assets/marvolo.png" style="margin-top: 100px;">
    <TheBar class="thebarhome"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheBar from "@/components/TheBar.vue";

export default {
  name: "Home",
  components: {
    TheBar
  }
};
</script>

<style>
.thebarhome {
  width: 50%;
  margin: auto;
  margin-top: 50px;
}
</style>