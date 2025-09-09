import { createRouter, createWebHistory } from 'vue-router';


import Test from '@/components/test.vue';
import Home from '@/views/HomeView.vue'
import Community from '@/views/community/CommunityView.vue';
import ChallengeHome from '@/views/challenge/ChallengeHome.vue';
import ChallengeList from '@/views/challenge/ChallengeList.vue';

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
      component: Community,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
    {
      path: '/challenge',
      name: 'ChallengeHome',
      component: ChallengeHome,
    },
    {
      path: '/challenge/list',
      name: 'ChallengeList',
      component: ChallengeList,
    },
  ],
});

export default router;
