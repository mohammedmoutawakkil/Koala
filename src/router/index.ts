import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/views/Home.vue";
import About from "/src/views/About.vue";
import Contact from "/src/views/Contact.vue";
import PageNotFound from "/src/views/PageNotFound.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/ContactUS",
    name: "ContactUS",
    component: Contact,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: PageNotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
