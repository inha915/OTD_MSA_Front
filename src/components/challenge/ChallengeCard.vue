<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  challengeId: '',
  image: '',
  name: '',
  reward: '',
});
</script>

<template>
  <div class="test">
    <img class="img-card" :src="`${props.image}`" />
    <!-- :alt="`${props.name}`" -->
    <div>
      <img src="/public/image/main/point.png" alt="point" class="point" />{{
        `${props.reward}P`
      }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.point {
  width: 15px;
}
.test {
  .img-card {
    width: 168px;
    height: 121px;

    box-shadow: 1px 1px #ddd;
  }
}
</style>
