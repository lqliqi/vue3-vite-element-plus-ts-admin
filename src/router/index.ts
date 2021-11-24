import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router';
// progress bar
import NProgress from 'nprogress';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/Home',
    component: () => import('@/views/Layout/index.vue'),
    children: [
      {
        path: '/Home',
        name: 'Home',
        component: () => import('@/views/Home/index.vue')
      },
      {
        path: '/Info',
        name: 'Info',
        component: () => import('@/views/Info/index.vue')
      },
      {
        path: '/About',
        name: 'About',
        component: () => import('@/views/About/index.vue')
      }
    ]
  },
  {
    path: '/Test',
    name: 'Test',
    component: () => import('@/views/Test/index.vue')
  }
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();
  next();
});
router.afterEach(() => {
  // finish progress bar
  NProgress.start();
});

export default router;
