<script setup>
import { onMounted, reactive } from "vue";
import ChallengeCard from "@/components/challenge/ChallengeCard.vue";
import { getAll } from "@/services/challenge/ChallengeService";

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
<<<<<<< HEAD
  console.log(res.data);
=======

  console.log('data', res.data);
>>>>>>> 95cd8c6bce0d4e48156638540f298d4f1df2df13
});
</script>

<template>
  <div>
    <!-- 주간 챌린지 -->
    <div>
      <div>진행중인 주간 챌린지</div>
      <div v-for="challenge in state.weeklyChallenge" :key="challenge.id">
        <ChallengeCard
          :id="challenge.id"
          :image="challenge.image"
          :name="challenge.name"
          :reward="challenge.reward"
        ></ChallengeCard>
      </div>
    </div>
    <!-- 월간 경쟁 챌린지 -->
    <div>
      <div>월간 경쟁 챌린지</div>
<<<<<<< HEAD
      <div v-for="challenge in state.monthlyChallenge" :key="challenge.id">
        <div>{{ `> ${challenge.name}` }}</div>
        <ChallengeCard
          :id="challenge.id"
          :image="challenge.image"
          :name="challenge.name"
        ></ChallengeCard>
=======
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
>>>>>>> 95cd8c6bce0d4e48156638540f298d4f1df2df13
      </div>
      <!-- 월간 개인 챌린지 -->
      <div>
        <div>월간 개인 챌린지</div>
        <div v-for="challenge in state.dailyChallenge" :key="challenge.id">
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
