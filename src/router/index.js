import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import MissionListView from "../views/MissionListView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/missoes",
    name: "mission-list",
    component: MissionListView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
