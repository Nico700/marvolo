<template>
  <div class="container-fluid single-result">
    <div id="nav">
      <TheHeader />
    </div>

    <div v-if="comics" class="d-flex justify-content-around">
      <div class="col-6">
        <ul v-if="comics.length > 0" class="list-group">
          <li
            class="list-group-item"
            v-for="(comic, index) in comics"
            :key="index"
          >
            <h3>{{ comic.title }}</h3>
            <img
              :src="comic.thumbnail.path + '.' + comic.thumbnail.extension"
              alt="Comic picture"
              style="width:25%"
            />
          </li>
        </ul>
        <h4 v-else class="my-5">No comics found.</h4>
      </div>
    </div>
    <div v-else class="d-flex justify-content-center">
      <pacman-loader :loading="loading" :color="color"></pacman-loader>
    </div>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader";
import PacmanLoader from "vue-spinner/src/PacmanLoader.vue";

const axios = require("axios");
const md5 = require("md5");

export default {
  name: "TheCharacterComics",
  components: {
    TheHeader,
    PacmanLoader
  },
  props: {
    id: Number
  },
  data: function() {
    return {
      comics: null,
      url: "https://gateway.marvel.com:443/v1/public",
      apikey: process.env.VUE_APP_APIKEY_PUBLIC,
      apikeyPrivate: process.env.VUE_APP_APIKEY_PRIVATE,
      hash: md5(
        "1" +
          process.env.VUE_APP_APIKEY_PRIVATE +
          process.env.VUE_APP_APIKEY_PUBLIC
      ),
      size: "50px",
      color: "yellow"
    };
  },
  methods: {
    truncComicId: function(uri) {
      let parts = uri.split("/");
      let lastSegment = parts.pop() || parts.pop();
      return lastSegment;
    },
    getComics() {
      let characterId = this.id;
      axios
        .get(
          this.url +
            "/characters/" +
            characterId +
            "/comics?apikey=" +
            this.apikey +
            "&hash=" +
            this.hash
        )
        .then(response => {
          console.log(response.data.data.results);
          this.comics = response.data.data.results;
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  },
  created() {
    this.getComics();
  }
};
</script>
