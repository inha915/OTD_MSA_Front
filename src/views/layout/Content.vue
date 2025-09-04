<script setup>
import { ref } from 'vue';

const meal_info = ref([
  { meal_day: '아침', kcal: 150, check: 1 },
  { meal_day: '점심', kcal: 450, check: 1 },
  { meal_day: '저녁', kcal: 550, check: 1 },
  { meal_day: '간식', kcal: 120, check: 0 },
]);
</script>

<template>
  <main class="content">
    <section class="progress-section">
      <div class="weather_container">
        <span class="title_text">날씨</span>
        <div class="cards">
          <div class="card">날씨 표출 !</div>
        </div>
      </div>
      <div class="progress_container">
        <span class="title_text">진행중</span>
        <div class="cards">
          <div class="card">+ 추가 목표</div>
        </div>
      </div>
    </section>

    <section class="community">
      <span>오늘의 식단</span>
      <div class="meal_cards">
        <div
          class="meal_card"
          v-for="(item, index) in meal_info"
          :key="item.meal_day"
        >
          <div class="meal_card_top">
            <div>{{ `${item.meal_day}` }}</div>
            <div v-if="item.check === 1">체크</div>
          </div>
          <div>{{ `${item.kcal}` }} kcal</div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.content {
  flex: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
  /* overflow-y: auto; */
}

/* 섹션 간 여백 추가 */
section {
  margin-bottom: 24px;
}

.progress-section {
  display: flex;
  gap: 15px;
  flex-direction: row;
  row-gap: 15px;
  background-color: #fafafa;
  padding-bottom: 10px; /* (선택) 내부 여백 추가 */
}

.title_text {
  display: flex;
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 15px;
}

.community span {
  display: flex;
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 15px;
}

.cards {
  display: flex;
  gap: 12px;
}
.card {
  width: 168px;
  height: 121px;
  /* flex: 1; */
  background: #fff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
}
.post {
  background: #fff;
  padding: 12px;
  margin-top: 8px;
  border-radius: 12px;
}

.meal_cards {
  width: 350px;
  height: 223px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열 */
  gap: 15px; /* 카드 간격 */
  background: #ffe864;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);

  .meal_card {
    display: flex;    
    flex-direction: column;
    justify-content: space-between;
    width: 152px;
    height: 90px;
    /* flex: 1; */
    background: #fff;
    padding: 16px;
    border-radius: 12px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  }

  .meal_card_top {
    display: flex;
    justify-content: space-between;
  }
}
</style>
