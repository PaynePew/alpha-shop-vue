import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import('../views/Address.vue'),
    meta: {
      next: 'Shipping',
    },
  },
  {
    path: '/shipping',
    name: 'Shipping',
    component: () => import('../views/Shipping.vue'),
    meta: {
      next: 'Checkout',
      prev: 'Address',
    },
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/Checkout.vue'),
    meta: {
      prev: 'Shipping',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
