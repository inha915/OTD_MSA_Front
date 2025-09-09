<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  id: 0,
  image: '',
  name: '',
});
</script>

<template>
  <div><img :src="`${props.image}`" :alt="`${props.name}`" /></div>
</template>

<style scoped></style>
