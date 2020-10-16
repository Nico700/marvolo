<!-- eslint-disable prettier/prettier -->
<template>
    <div class="header">
        <div class="row align-items-center">
            <div class="col-2">
                <router-link to="/">
                    <img style="width:90%; margin-top: -5px" src="../assets/logo.png">
                </router-link>
            </div>
            <div class="col-6 mt-2">
                <TheBar/>
            </div>
            <div class="col-4 d-flex justify-content-around align-items-center">
                <TheButton label="fakeHeroResult"/>
                <TheButton label="characters"/>
                <TheButton label="comics"/>
            </div>
        </div>
        <hr>
    </div>
</template>


<script>
import TheButton from "../components/TheButton.vue";
import TheBar from "../components/TheBar.vue";
export default {
  name: "Header",
  data() {
    return {};
  },
  components: {
    TheButton,
    TheBar
  }
};
</script>

<style></style>
