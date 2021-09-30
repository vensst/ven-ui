import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import { ComponentRoute } from "./routes";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/home.vue"),
  },
  // 指南
  {
    path: "/guide",
    component: () =>
      import(/* webpackChunkName: "guide" */ "@/views/Layout.vue"),
    redirect: "/guide/design",
    children: [
      {
        path: "design",
        name: "guide-design",
        meta: {
          title: "设计原则",
        },
        component: () =>
          import(/* webpackChunkName: "guide" */ "@/views/guide/design.vue"),
      },
      {
        path: "nav",
        name: "guide-nav",
        meta: {
          title: "导航",
        },
        component: () =>
          import(/* webpackChunkName: "guide" */ "@/views/guide/nav.vue"),
      },
    ],
  },
  ...ComponentRoute,
  // 资源
  {
    path: "/resource",
    component: () =>
      import(/* webpackChunkName: "resource" */ "@/views/Layout.vue"),
    children: [
      {
        path: "/",
        name: "resource-index",
        meta: {
          title: "资源",
        },
        component: () =>
          import(
            /* webpackChunkName: "resource" */ "@/views/resource/index.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    try {
      let el = document.getElementsByClassName("page-container")[0];
      el.scrollTop = 0;
    } catch (e) {
      console.warn(e);
    }
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 };
  },
});
// router.afterEach(() => {
// document.body.scrollTop = 0;
// document.documentElement.scrollTop = 0;
// window.scrollTo(0, 0);
// });

export default router;
