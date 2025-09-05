<script setup>
import MobileFooter from '@/components/MobileFooter.vue';
</script>

<template >
  <nav class="footer_detail">
    <button> <img src="/image/navigator_img/home-s.png" alt="홈화면"/>
    <span class="text-body-3">홈</span></button>
    <button>운동</button>
    <button>식단</button>
    <button>챌린지</button>
    <button>커뮤니티</button>
    <button>내정보</button>
  </nav>
</template>

<style scoped>

.footer_detail {
  height: 92px;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  border-top: 1px solid #ddd;
  background: #ffffff;
  border-radius: 0 0 20px 20px;
}
button {
  flex: 1;
  background: none;
  border:none;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
button > img{
  max-width: 40%;
  height: auto;
}
</style>