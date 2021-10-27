import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/Test',
    component: () => import('@/views/Layout/index.vue'),
    children: [
      {
        path: '/Home',
        name: 'Home',
        component: () => import('@/views/Home/index.vue')
      }
    ]
  },
  {
    path: '/Test',
    name: 'Test',
    component: () => import('@/views/Test/index.vue')
  },
  {
    path: '/Info',
    name: 'Info',
    component: () => import('@/views/Info/index.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
