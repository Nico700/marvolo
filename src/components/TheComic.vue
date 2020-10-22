<!-- eslint-disable prettier/prettier -->
<template>
  <div class="container-fluid single-result">
    <div id="nav">
      <TheHeader />
    </div>
    <div class="row" v-if="comic">
      <div class="col-6">
        <table class="table">
          <tr>
            <td rowspan="5" style="width: 40%"><img :src="comic.thumbnail.path + '.' + comic.thumbnail.extension" style="width:100%" /></td>
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
              <router-link class="pt-2" :to="'/characters/' + truncCharactId(comic.resourceURI) ">{{ comic.name }}</router-link>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader";
const axios = require("axios");
const md5 = require("md5");

export default {
  name: "TheComic",
  components: {
    TheHeader
  },
  props: {
    id: Number
  },
  data: function() {
    return {
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
    truncCharactId: function(uri) {
      let parts = uri.split("/");
      let lastSegment = parts.pop() || parts.pop();
      return lastSegment;
    },
    getComic: function() {
      let comicId = this.id;
      axios
        .get(
          this.url +
            "/comics/" +
            comicId +
            "?&apikey=" +
            this.apikey +
            "&hash=" +
            this.hash
        )
        .then(response => {
          this.comic = response.data.data.results[0];
        })
        .catch(error => {
          console.log(error);
        });
    },

    getWriter: function(role, name) {
      if (role == "writer") {
        return name;
      }
    }
  },
  created() {
    this.getComic();
  }
};
</script>
