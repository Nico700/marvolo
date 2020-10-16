<template>
  <div class="container-fluid single-result">
    <div class="row">
      <div class="col-6">
        <img class="rounded-circle" :src="comic.thumbnail.path + '.' + comic.thumbnail.extension" alt="John" style="width:25%" />
        <h1 class="my-3">{{ comic.title }}</h1>
        <p>{{ comic.prices[0].price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
const md5 = require('md5');

export default {
  name: "TheComic",
  data: function() {
    return {
      comic: null,
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
    getComic: function() {
      let comicId = this.$route.params.id
      axios
        .get(this.url + "/comics/" + comicId + "?&apikey=" + this.apikey + "&hash=" + this.hash)
        .then(response => {
          console.log(response)
          this.comic = response.data
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getComic();
  }
};
</script>
