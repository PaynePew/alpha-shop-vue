import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect:{name:'Address'}
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
