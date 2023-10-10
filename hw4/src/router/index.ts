import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: () => import('@/pages/HomePage/HomePage.vue')},
    {
      path: '/movie/:id',
      name: 'MovieDetail',
      component: import('@/pages/MovieDetailPage/MovieDetailPage.vue'),
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('@/pages/NotFoundPage/NotFoundPage.vue'),
    },
    { path: "/:catchAll(.*)", redirect:'/404'},
  ],
});

export default router;
