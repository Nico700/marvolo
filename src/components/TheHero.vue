<!--  eslint-disable prettier/prettier -->
<template>
    <div v-if="hero" class="container-fluid single-result">
        <div id="nav">
            <TheHeader />
        </div>

        <div class="d-flex justify-content-around">
            <div class="col-6">
                <img class="!rounded-circle" :src="hero.thumbnail.path + '.' + hero.thumbnail.extension" alt="Hero picture" style="width:25%">
                <h1 class="my-3">{{ hero.name }}</h1>
                <p>{{ hero.description }}</p>
            </div>
            <div class="col-6">
                <h3 class="text-center">Comics related</h3>
                <ul v-if="hero.comics.items.length > 0" class="list-group">
                    <li class="list-group-item" v-for="(comic, index) in hero.comics.items" :key="index">
                        <router-link class="pt-2" :to="'/comics/' + truncComicId(comic.resourceURI) ">{{ comic.name }}</router-link>
                    </li>
                </ul>
                <h4 v-else class="my-5">No comics found for <b>{{ hero.name }}</b></h4>
            </div>
        </div>
    </div>
</template>

<script>
import TheHeader from "../components/TheHeader";
const axios = require("axios");
const md5 = require("md5");

export default {
  name: "TheHero",
  components: {
    TheHeader
  },
  props: {
    id: Number
  },
  data: function() {
    return {
      hero: null,
      url: "https://gateway.marvel.com:443/v1/public",
      apikey: process.env.VUE_APP_APIKEY_PUBLIC,
      apikeyPrivate: process.env.VUE_APP_APIKEY_PRIVATE,
      hash: md5(
        "1" +
          process.env.VUE_APP_APIKEY_PRIVATE +
          process.env.VUE_APP_APIKEY_PUBLIC
      )
    };
  },
  methods: {
    truncComicId: function(uri) {
      let parts = uri.split("/");
      let lastSegment = parts.pop() || parts.pop();
      return lastSegment;
    },
    getHero() {
      let characterId = this.id;
      axios
        .get(
          this.url +
            "/characters/" +
            characterId +
            "?apikey=" +
            this.apikey +
            "&hash=" +
            this.hash
        )
        .then(response => {
          console.log(response.data.data.results[0]);
          this.hero = response.data.data.results[0];
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  },
  created() {
    this.getHero();
  }
};
</script>

<style scoped>
.list-group {
  max-height: 500px;
  margin-bottom: 10px;
  overflow: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
</style>
