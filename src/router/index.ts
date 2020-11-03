import {createWebHistory, createRouter} from 'vue-router';
import Home from '@/pages/Home/Home.vue';
import Girls from '@/pages/Girls/Girls.vue';
import Privacy from '@/pages/Privacy/Privacy.vue';
import Rules from '@/pages/Rules/Rules.vue';
import PageNotFound from '@/pages/PageNotFound/PageNotFound.vue';
import {vuexStore} from '@/repositories';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
  },
  {
    path: '/girls',
    name: 'Girls',
    component: Girls,
    props: true,
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
    props: true,
  },
  {
    path: '/rules',
    name: 'Rules',
    component: Rules,
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: PageNotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const name = to.name ? String(to.name) : 'NotFound';

  const isPageDateExist = vuexStore.isPageExist(name);

  if (!isPageDateExist) {
    vuexStore.changeLoadingState(true);
    vuexStore.getPageContent(name).then(() => {
        next();
        vuexStore.changeLoadingState(false);
      }
    ).catch(() => {
      next({path: from.fullPath});
      vuexStore.changeLoadingState(false);
    });
  } else {
    next();
  }
});

export default router;