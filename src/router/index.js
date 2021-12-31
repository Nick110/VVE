import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home.vue') // 懒加载组件
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
