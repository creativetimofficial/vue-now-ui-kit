import Vue from "vue";
import Router from "vue-router";
import Index from "./pages/Index.vue";
import Login from "./pages/Login.vue";
import Profile from "./pages/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: {default: Index, header: MainNavbar, footer: MainFooter},
      props: {
        header: {colorOnScroll: 400, transparent: true}
      }
    },
    {
      path: "/login",
      name: "login",
      components: {default: Login, header: MainNavbar, footer: MainFooter}
    },
    {
      path: "/profile",
      name: "profile",
      components: {default: Profile, header: MainNavbar, footer: MainFooter}
    }
  ]
});
