import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Parts from "../views/Parts.vue";
import Register from "../views/Register.vue";


const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/parts",
    name: "Parts",
    component: Parts
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
