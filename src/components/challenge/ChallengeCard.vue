<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  challengeId: 0,
  image: '',
  name: '',
  point: 0,
});
</script>

<template>
  <div>
    <img :src="`${props.image}`" :alt="`${props.name}`" />
    <div>
      <img src="/public/image/main/point.png" alt="point" />{{
        `${props.point}P`
      }}
    </div>
  </div>
</template>

<style scoped></style>
