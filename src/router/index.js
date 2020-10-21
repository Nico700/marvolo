import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TheHero from '../components/TheHero.vue'
import TheComic from '../components/TheComic.vue'
import Comic from "../views/Comic.vue";
import Search from "../views/Search.vue";
import TheCharacterSeries from '../components/TheCharacterSeries.vue'
import TheCharacterStories from '../components/TheCharacterStories.vue'

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
    path: "/characters/:id",
    name: "Character",
    component: TheHero,
    props: true
  },
  {
    path: "/comics",
    name: "Comics",
    component: Comic
  },
  {
    path: "/comics/:id",
    name: "Comic",
    component: TheComic,
    props: true
  },
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
