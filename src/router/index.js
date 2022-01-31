import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Error from '@/views/Error.vue';
import SingleCockTail from '@/views/SingleCockTail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/cocktail/:id',
    name: 'SingleCockTail',
    component: SingleCockTail,
  },
  {
    path: '/:pathMatch(.*)',
    name: 'Error',
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
