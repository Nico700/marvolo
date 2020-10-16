<template>
  <div class="home">
    <div id="nav">
      <TheHeader />
    </div>

    <h1>Resultats</h1>
    <AppResult v-for="data in datas" :key="data.id"/>
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
    // eslint-disable-next-line vue/no-unused-components
    AppResult
  },
  props: {
    search: String
  },
  data() {
    return {
      datas: null,
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
      console.log(this.search)
      axios
        .get(this.url + "/characters?limit=100&orderBy=name&nameStartsWith=" + this.search + "&ts=1&apikey=" + this.apikey + "&hash=" + this.hash)
        .then(response => {
          this.datas = response.data.data;
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