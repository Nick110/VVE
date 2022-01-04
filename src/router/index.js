import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

export const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '系统首页',
    },
    component: () => import('@/pages/home.vue'), // 懒加载组件
    children: [
      {
        path: '/dashboard',
        component: () => import('@/pages/dashboard.vue'),
      },
      {
        path: '/404',
        component: () => import('@/pages/404.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/pages/404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
