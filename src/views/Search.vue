<template>
  <div class="home">
    <div id="nav">
      <TheHeader />
    </div>
    <div v-if="results">
      <div v-if="like == 'name'">
        <AppResult
          v-for="data in results"
          :key="data.id"
          :data="data"
          :type="this.type"
        >
        </AppResult>
      </div>

      <div v-if="like == 'title'">
        <AppResultSpe
          v-for="data in results"
          :key="data.id"
          :data="data"
          :type="this.type"
        >
        </AppResultSpe>
        <p>{{ results }}</p>
      </div>
    </div>
    <div v-else class="d-flex justify-content-center">
      <pacman-loader :loading="loading" :color="color"></pacman-loader>
    </div>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import AppResult from "../components/AppResult.vue";
import AppResultSpe from "../components/AppResultSpe.vue";
import PacmanLoader from "vue-spinner/src/PacmanLoader.vue";

const axios = require("axios");
const md5 = require("md5");

export default {
  name: "Search",
  components: {
    TheHeader,
    AppResult,
    AppResultSpe,
    PacmanLoader
  },
  data() {
    return {
      search: this.$route.query.q,
      type: this.$route.query.q_type,
      results: null,
      like: null,
      startWith: null,
      url: "https://gateway.marvel.com:443/v1/public",
      apikey: process.env.VUE_APP_APIKEY_PUBLIC,
      apikeyPrivate: process.env.VUE_APP_APIKEY_PRIVATE,
      hash: md5(
        "1" +
          process.env.VUE_APP_APIKEY_PRIVATE +
          process.env.VUE_APP_APIKEY_PUBLIC
      ),
      size: '50px',
      color: 'yellow'
    };
  },
  methods: {
    getResults: function() {
      axios
        .get(
          this.url +
            "/" +
            this.getType(this.type) +
            "?limit=100&orderBy=" + this.like + "&" + this.startWith + "=" +
            encodeURIComponent(this.search) +
            "&ts=1&apikey=" +
            this.apikey +
            "&hash=" +
            this.hash
        )
        .then(response => {
          console.log(response)
          this.results = response.data.data.results;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getType(type) {
      if (type === "comics") {
        this.like = "title";
        this.startWith = "titleStartsWith";
        return "comics";
      } else {
        this.like = "name";
        this.startWith = "nameStartsWith";
        return "characters";
      }
    }
  },
  mounted() {
    this.getResults();
  }
};
</script>
