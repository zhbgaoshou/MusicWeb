import { createRouter, createWebHashHistory } from "vue-router";

// 导航栏
export const menuRoute = [
  {
    path: "/discover",
    name: "discover",
    component: () => import("@/views/Discover/Discover.vue"),
    meta: {
      title: "发现音乐",
      icon: "icon-yinle1",
    },
  },
  {
    path: "/recommend",
    name: "recommend",
    component: () => import("@/views/Recommend/Recommend.vue"),
    meta: {
      title: "推荐歌单",
      icon: "icon-bofangliebiao",
    },
  },
  {
    path: "/newmusic",
    name: "newmusic",
    component: () => import("@/views/NewMusic/NewMusic.vue"),
    meta: {
      title: "最新音乐",
      icon: "icon-yinle2",
    },
  },
  {
    path: "/newmv",
    name: "newmv",
    component: () => import("@/views/NewMV/NewMV.vue"),
    meta: {
      title: "最新MV",
      icon: "icon-diantai",
    },
  },
];

const routes = [
  {
    path: "/",
    redirect: "/discover",
  },
  ...menuRoute,
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
