<script setup>
import { defineProps } from "vue";

const props = defineProps({
  challengeId: "",
  image: "",
  name: "",
  reward: "",
});
</script>

<template>
  <div>
    <img class="img-card" :src="`${props.image}`" />
    <!-- :alt="`${props.name}`" -->
    <div>
      <img src="/public/image/main/point.png" alt="point" class="point" />{{
        `${props.reward}P`
      }}
    </div>
  </div>
</template>

<style scoped>
.point {
  width: 15px;
}
.img-card {
  width: 168px;
  height: 121px;
  border-radius: 15px;
  border: 1px solid #ddd;
}
</style>
