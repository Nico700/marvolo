import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Comic from "../views/Comic.vue";
import Search from "../views/Search.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/comic",
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
