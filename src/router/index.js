import Vue from "vue";
import VueRouter from "vue-router";
import MoviesIndex from "../views/movies/Index.vue";
import MoviesNew from "../views/movies/New.vue";
import MoviesShow from "../views/movies/Show.vue";
import MoviesEdit from "../views/movies/Edit.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/movies",
    name: "movies-index",
    component: MoviesIndex,
  },
  {
    path: "/movies/new",
    name: "movies-new",
    component: MoviesNew
  },
  {
    path: "/movies/:id",
    name: "movies-show",
    component: MoviesShow
  },
  {
    path: "/movies/:id/edit",
    name: "movies-edit",
    component: MoviesEdit
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
