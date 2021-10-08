import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home/index.vue'
import Layout from '@/views/Layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/Home',
    component: Layout,
    children: [
      {
        path: '/Home',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '/Test',
    name: 'Test',
    component: () => import('@/views/Test/index.vue') // 懒加载组件
  },
  {
    path: '/Info',
    name: 'Info',
    component: () => import('@/views/Info/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
