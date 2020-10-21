<template>
  <div class="home">
    <TheButton class="button" label="comics"/>
    <TheButton class="button" label="characters"/>
    <br style="clear:both">
    <img src="../assets/marvolo.png" style="margin-top: 100px;">
    <TheBar class="thebarhome"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheBar from "@/components/TheBar.vue";
import TheButton from "@/components/TheButton.vue";

export default {
  name: "Home",
  components: {
    TheBar,
    TheButton
  }
};
</script>

<style>
.thebarhome {
  width: 50%;
  margin: auto;
  margin-top: 50px;
}

.button {
  float: right;
  margin-right: 50px;
  margin-top: 10px;
}

.button a {
  color: black;
  font-size: 13px;
}
</style>