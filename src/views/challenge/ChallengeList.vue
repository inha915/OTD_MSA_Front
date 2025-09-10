<script setup>
import { onMounted, reactive } from 'vue';
import ChallengeCard from '@/components/challenge/ChallengeCard.vue';
import { getAll } from '@/services/challenge/ChallengeService';

const state = reactive({
  weeklyChallenge: [],
  monthlyChallenge: [],
  dailyChallenge: [],
});

onMounted(async () => {
  const res = await getAll();
  state.weeklyChallenge = res.data.weeklyChallenge;
  state.monthlyChallenge = res.data.monthlyChallenge;
  state.dailyChallenge = res.data.dailyChallenge;

  console.log('data', res.data);
});
</script>

<template>
   <!-- <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper> -->
  <div>
    <!-- 주간 챌린지 -->
    <div>
      <div>주간 챌린지</div>
        <ChallengeCard
          v-for="challenge in state.weeklyChallenge"
          :id="challenge.id"
          :image="challenge.image"
          :name="challenge.name"
          :reward="challenge.reward"
        ></ChallengeCard>
    </div>
    <!-- 월간 경쟁 챌린지 -->
    <div>
      <div>월간 경쟁 챌린지</div>
      <div v-for="(list, category) in state.monthlyChallenge">
        <div>{{ `> ${category}` }}</div>
        <div v-for="challenge in list">
          <ChallengeCard
            :id="challenge.id"
            :image="challenge.image"
            :name="challenge.name"
            :reward="challenge.reward"
          ></ChallengeCard>
        </div>
      </div>
      <!-- 월간 개인 챌린지 -->
      <div>
        <div>월간 개인 챌린지</div>
        <div v-for="challenge in state.dailyChallenge">
          <ChallengeCard
            :id="challenge.id"
            :image="challenge.image"
            :name="challenge.name"
            :reward="challenge.reward"
          ></ChallengeCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
