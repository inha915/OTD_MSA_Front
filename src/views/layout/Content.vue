<script setup></script>

<template>
  <main class="content">
    <section class="progress">
      <h3>진행중</h3>
      <div class="cards">
        <div class="card">체중 5키로 감량!</div>
        <div class="card">+ 추가 목표</div>
      </div>
    </section>

    <section class="community">
      <h3>커뮤니티</h3>
      <div class="post" v-for="i in 2" :key="i">
        <p class="user">고등 불주먹</p>
        <p class="text">오늘 점심주 가성하실분</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.content {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  
}

/* 섹션 간 여백 추가 */
section {
  margin-bottom: 24px;
}

.progress{
  height: 20%;
  display: flex;
  flex-direction: column;
}


.progress h3,
.community h3 {
  margin-bottom: 12px;
}

.cards {
  display: flex;
  gap: 12px;
}
.card {
  flex: 1;
  background: #fff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 0 4px rgba(0,0,0,0.1);
}
.post {
  background: #fff;
  padding: 12px;
  margin-top: 8px;
  border-radius: 12px;
}
</style>