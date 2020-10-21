import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TheHero from "../components/TheHero.vue";
import TheEvent from "../components/TheEvent.vue";
import Comic from "../components/TheComic.vue";
import Search from "../views/Search.vue";
import TheCharacterEvents from '../components/TheCharacterEvents.vue'
import TheCharacterSeries from "../components/TheCharacterSeries.vue";
import TheCharacterStories from "../components/TheCharacterStories.vue";
import TheCharacterComics from "../components/TheCharacterComics.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/characters",
    name: "Characters"
  },
  {
    path: "/characters/:id/series",
    name: "CharacterSeries",
    component: TheCharacterSeries,
    props: true
  },
  {
    path: "/characters/:id/stories",
    name: "CharacterStories",
    component: TheCharacterStories,
    props: true
  },
  {
    path: "/characters/:id/events",
    name: "CharacterEvents",
    component: TheCharacterEvents,
    props: true
  },
  {
    path: "/characters/:id/comics",
    name: "CharacterComics",
    component: TheCharacterComics,
    props: true
  },
  {
    path: "/characters/:id",
    name: "Character",
    component: TheHero,
    props: true
  },
  {
    path: "/characters/:id/events",
    name: "Events",
    component: TheEvent,
    props: true
  },
  {
    path: "/comics",
    name: "Comics",
    component: Comic
  },
  // {
  //   path: "/comics/:id",
  //   name: "Comic",
  //   component: Comic
  // },
  {
    path: "/search",
    name: "Search",
    component: Search,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
