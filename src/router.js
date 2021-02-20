import Vue from "vue";
import store from "./store";

import Router from "vue-router";

Vue.use(Router);

// create new router

const routes = [
  {
    path: "/",
    component: () => import("./views/app"), //webpackChunkName app
    // beforeEnter: authenticate,
    redirect: "/app/pages/home",

    children: [
      // pages
      {
        path: "/app/pages",
        component: () => import("./views/app/pages"),
        redirect: "/app/pages/home",
        children: [
          {
            path: "home",
            component: () => import("./views/app/pages/Home"),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    component: () => import("./views/app/pages/Home"),
  },
];

const router = new Router({
  mode: "history",
  linkActiveClass: "open",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0};
  },
});

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach(() => {});

export default router;
