import { createRouter, createWebHistory } from 'vue-router'

import Test from '@/components/test.vue'
import Home from '@/views/HomeView.vue'
import Community from '@/views/community/CommunityView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },   
    {
      path: '/community',
      name: 'Commuity',
      component: Community
    },   
    {
      path: '/test',
      name: 'Test',
      component: Test,
    }

  ],
})

export default router
