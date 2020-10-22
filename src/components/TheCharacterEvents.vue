<template>
    <div class="container-fluid single-result">
        <div id="nav">
            <TheHeader />
        </div>

        <div v-if="events" class="d-flex justify-content-around">
            <div class="col-6">
                <ul v-if="events.length > 0" class="list-group">
                    <li class="list-group-item" v-for="(event, index) in events" :key="index">
                        <h3>{{ event.title }}</h3>
                        <img :src="event.thumbnail.path + '.' + event.thumbnail.extension" alt="Serie picture" style="width:25%">
                    </li>
                </ul>
                <h4 v-else class="my-5">No events found.</h4>
            </div>
        </div>
        <div v-else class="d-flex justify-content-center">
            <pacman-loader :loading="loading" :color="color"></pacman-loader>
        </div>
    </div>
</template>

<script>
import TheHeader from "../components/TheHeader";
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue';

const axios = require("axios");
const md5 = require("md5");

export default {
    name: "TheCharacterEvents",
    components: {
        TheHeader,
        PacmanLoader
    },
    props: {
        id: Number
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
            ),
            size: '50px',
            color: 'yellow'
        };
    },
    methods: {
        truncComicId: function(uri) {
            let parts = uri.split("/");
            let lastSegment = parts.pop() || parts.pop();
            return lastSegment;
        },
        getHeroSeries() {
            let characterId = this.id;
            axios
            .get(
            this.url +
                "/characters/" +
                characterId +
                "/events?apikey=" +
                this.apikey +
                "&hash=" +
                this.hash
            )
            .then(response => {
                console.log(response.data.data.results);
                this.events = response.data.data.results;
            })
            .catch(error => {
            console.log(error.response);
            });
        }
    },
    created() {
        this.getHeroSeries();
    }
}
</script>
