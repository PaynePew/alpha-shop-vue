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
  },
  {
    path: '/shipping',
    name: 'Shipping',
    component: () => import('../views/Shipping.vue'),
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/Checkout.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
