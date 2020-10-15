import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Comic from "../views/Comic.vue";

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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
