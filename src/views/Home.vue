<template>
  <div class="home">
    <img src="../assets/marvolo.png">
    <TheBar class="thebarhome"/>
    <AppResult />
  </div>
</template>

<script>
// @ is an alias to /src
import TheBar from "@/components/TheBar.vue";
import AppResult from "@/components/AppResult.vue";

export default {
  name: "Home",
  components: {
    TheBar,
    AppResult
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