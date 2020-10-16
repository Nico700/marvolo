import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TheHero from '../components/TheHero.vue'
import Comic from "../views/Comic.vue";
import Search from "../views/Search.vue";

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
    path: "/characters/:id",
    name: "Character",
    component: TheHero
  },
  {
    path: "/comics",
    name: "Comics",
    component: Comic
  },
  {
    path: "/comics/:id",
    name: "Comic",
    component: Comic
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
