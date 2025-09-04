<script setup>
import MobileFooter from '@/components/MobileFooter.vue';
</script>

<template>
  <nav class="footer">
    <button>홈</button>
    <button>운동</button>
    <button>식단</button>
    <button>챌린지</button>
    <button>커뮤니티</button>
    <button>내정보</button>
  </nav>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  border-top: 1px solid #ddd;
  background: #fff;
  border-radius: 0 0 20px 20px;
}
button {
  flex: 1;
  background: none;
  border: none;
  font-size: 14px;
}
</style>