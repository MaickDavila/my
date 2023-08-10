import { createRouter, createWebHistory } from "vue-router";
import homePage from "../pages/homePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: homePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
