<script setup>
import Layout from './views/layout/Layout.vue';

import { useRoute, useRouter } from 'vue-router';
import { ref, watch, onMounted } from 'vue';



</script>

<template>
  <div class="layout">
    <Layout />
  </div>
</template>

<style>
.layout {
  width: 391px;          /* 모바일 기준 폭 (원하는 크기로 조정: 375px, 414px 등) */
  min-height: 805px;     /* 화면 전체 높이 채우기 */
  margin: 0 auto;        /* 화면 중앙 정렬 (PC에서 가운데 고정) */
  background: #fff;      /* 바탕색 지정 (안하면 양 옆에 배경색 다 보임) */
  box-shadow: 0 0 10px rgba(0,0,0,0.1); /* 데스크탑에서 모바일 박스 느낌 */
}
</style>