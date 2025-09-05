import { createRouter, createWebHistory } from 'vue-router'

import Test  from '@/components/test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },   
    {
      path: '/test',
      name: 'Test',
      component: Test,
    }

  ],
})

export default router
