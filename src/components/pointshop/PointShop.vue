<script setup>
import { defineProps, ref, reactive } from 'vue';

const allItems = ref(['Item1', 'Item2', 'Item3']);

const state = reactive({
  search: '',
  searchList: [...allItems.value],
});

const onTyping = () => {
  console.log('User is typing:', state.search);
  pointData();
};

const pointData = () => {
  console.log('Search initiated for:', state.search);
  state.searchList = allItems.value.filter(item =>
    item.toLowerCase().includes(state.search.toLowerCase())
  );
};

const props = defineProps
({
  id: 0,
  image: '',
  name: '',
});

</script>

<template>
  <div class="search-bar-container">
    <b-form-input
      list="search-list-id"
      @input="onTyping"
      @keyup.enter="pointData"
      v-model="state.search"
    />
    <datalist id="search-list-id">
      <option v-for="item in state.searchList" :key="item">{{ item }}</option>
    </datalist>
    <b-button variant="outline-secondary" size="sm" @click="pointData">
      Search
    </b-button>
  </div>
</template>

<style scoped>
.search-bar-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 10px;
}

.search-bar-container input {
  flex-grow: 1;
  min-width: 0;
}
</style>