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
  width: 390px; /* 아이폰 12 기준 */ 
  min-height: 100vh;
  margin: 0 auto;
  background: #f5f5f5;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 20px;
}
</style>