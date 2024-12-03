import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    meta: {
      title: '系统首页'
    },
    component: () => import('@/components/Layout/Layout.vue'), // 懒加载组件
    children: [
      {
        path: '/dashboard',
        component: () => import('@/pages/dashboard.vue'),
        meta: {
          title: '总览',
          icon: 'logos:twitter'
        }
      },
      {
        path: '/pro',
        component: () => import('@/pages/pro/index.vue'),
        meta: {
          title: '项目',
          icon: 'logos:sketch'
        },
        children: [
          {
            path: 'a',
            component: () => import('@/pages/a/index.vue'),
            meta: {
              title: 'A',
              icon: 'logos:vue'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: () => import('@/pages/404.vue'),
    meta: {
      hideOnMenu: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
