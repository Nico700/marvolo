<template>
  <div class="home">
    <div id="nav">
      <TheHeader />
    </div>

    <h1>Resultats</h1>
    <AppResult v-for="data in heros" :key="data.id" :data="data"> </AppResult>

  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import AppResult from '../components/AppResult.vue'

const axios = require("axios");
const md5 = require('md5');

export default {
  name: "Search",
  components: {
    TheHeader,
    AppResult
  },
  props: {
    search: String
  },
  data() {
    return {
      heros: null,
      url: "https://gateway.marvel.com:443/v1/public",
      apikey: process.env.VUE_APP_APIKEY_PUBLIC,
      apikeyPrivate: process.env.VUE_APP_APIKEY_PRIVATE,
      hash: md5(
        "1" +
          process.env.VUE_APP_APIKEY_PRIVATE +
          process.env.VUE_APP_APIKEY_PUBLIC
      ),
    };
  },
  methods: {
    getHeroes: function() {
      axios
        .get(this.url + "/characters?limit=100&orderBy=name&nameStartsWith=" + this.search + "&ts=1&apikey=" + this.apikey + "&hash=" + this.hash)
        .then(response => {
          this.heros = response.data.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getHeroes();
  }
};
</script>