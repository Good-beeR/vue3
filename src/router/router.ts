import {createWebHistory, createRouter} from "vue-router";
import Home from "@/pages/Home/Home.vue";
import Girls from "@/pages/Girls/Girls.vue";
import Privacy from "@/pages/Privacy/Privacy.vue";
import Rules from "@/pages/Rules/Rules.vue";
import PageNotFound from "@/pages/PageNotFound/PageNotFound.vue";
import {store} from "@/store/store";
import * as types from "@/shared/const/store.types";

const appStore = store;

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/girls",
    name: "Girls",
    component: Girls,
    props: true,
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy,
    props: true,
  },
  {
    path: "/rules",
    name: "Rules",
    component: Rules,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: PageNotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {

  const pageDateIsAvailability = appStore.getters.pageContentIsFound(to.name);

  if (!pageDateIsAvailability) {
    appStore.dispatch(types.CHANGE_LOADING_STATE, true).finally();
    appStore.dispatch(types.GET_PAGE_REQUEST, to.name).then(() => {
        next();
        appStore.dispatch(types.CHANGE_LOADING_STATE, false).finally();
      }
    ).catch(() => {
      next({path: from.fullPath});
      appStore.dispatch(types.CHANGE_LOADING_STATE, false).finally();
    });
  } else {
    next();
  }
});

export default router;