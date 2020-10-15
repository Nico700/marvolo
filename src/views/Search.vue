<template>
  <div class="home">
    <div id="nav">
      <TheHeader />
    </div>

    <h1>Resultats</h1>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'

const axios = require("axios");
const md5 = require('md5');

export default {
  name: "Search",
  components: {
    TheHeader
  },
  data() {
    return {
      search: this.$props,
      url: "https://gateway.marvel.com:443/v1/public",
      apikey: process.env.VUE_APP_APIKEY_PUBLIC,
      apikeyPrivate: process.env.VUE_APP_APIKEY_PRIVATE,
      hash: md5(
        "1" +
          process.env.VUE_APP_APIKEY_PRIVATE +
          process.env.VUE_APP_APIKEY_PUBLIC
      ),
      search_content: this.$refs.valeur_search
    };
  },
  methods: {
    getHeroes: function() {
      console.log(this.search);
      axios
        .get(this.url + "/characters?nameStartsWith=sp&ts=1&apikey=" + this.apikey + "&hash=" + this.hash)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  beforeMount() {
    this.getHeroes();
  }
};
</script>
