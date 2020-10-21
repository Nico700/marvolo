<!--  eslint-disable prettier/prettier -->
<template>
    <div class="container-fluid single-result">
        <div id="nav">
            <TheHeader />
        </div>

        <div class="d-flex justify-content-around" v-if="events">
            <div class="col-6"  v-for="event in events" :key="event.id">
                <h1 class="my-3">{{ event.title }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
import TheHeader from "../components/TheHeader";
const axios = require("axios");
const md5 = require("md5");

export default {
  name: "TheEvent",
  components: {
    TheHeader
  },
  props: {
    id: String
  },
  data: function() {
    return {
      events: null,
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
    getEvent() {
      let characterId = this.id;
      axios
        .get(
          this.url +
            "/characters/" +
            characterId +
            "/events" +
            "?apikey=" +
            this.apikey +
            "&hash=" +
            this.hash
        )
        .then(response => {
          this.events = response.data.data.results;
          console.log(this.events);
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  },
  created() {
    this.getEvent();
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
