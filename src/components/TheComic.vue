<!-- eslint-disable prettier/prettier -->
<template>
  <div class="container-fluid single-result" v-if="comic">
    <div class="row">
      <div class="col-6">
        <table class="table">
          <tr>
            <td rowspan="5" style="width: 40%"><img :src="comic.thumbnail.path + '.' + comic.thumbnail.extension" alt="John" style="width:100%" /></td>
          </tr>
          <tr>
            <td><b>Publication</b></td>
            <td>{{ comic.dates[0].date }}</td>
          </tr>
          <tr>
            <td><b>Titre</b></td>
            <td>{{comic.title }}</td>
          </tr>
          <tr>
            <td><b>Écrivain</b></td>
            <td>
              <span v-for="(comic, index) in comic.creators.items" :key="index">
                {{ getWriter(comic.role, comic.name) }}
              </span>
            </td>
          </tr>
          <tr>
            <td><b>Prix</b></td>
            <td>{{comic.prices[0].price }}$</td>
          </tr>
        </table>
      </div>
      <div class="col-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="(comic, index) in comic.characters.items" :key="index">
              {{ comic.name }}
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//import FakeComic from "../../comic.json";
const axios = require("axios");
const md5 = require('md5');

export default {
  name: "TheComic",
  data: function() {
    return {
      //comic: FakeComic.data.results[0],
      //writer: FakeComic.data.results[0].creators.items.role,

      comic: null,
      writer: null,
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
          console.log(this.comic);
          this.comic = response.data.data.results[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getWriter: function(role, name) {
      if (role == "writer") {
        return name;
      }
    },

    mounted() {
      this.getComic();
    }
  }
};
</script>
