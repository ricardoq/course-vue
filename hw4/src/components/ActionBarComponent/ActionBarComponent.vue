<template>
  <div class="list-header">
    <label>{{moviesStore.moviesFilteredSortedCount}} movies found</label>
    <OptionsButton label="Sort by"
                  :options="sortByOptions"
                  @click="updateSortBy"></OptionsButton>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import OptionsButton from '../OptionsButtonComponent/OptionsButtonComponent.vue';
import useMoviesStore from '@/stores/useMoviesStore';
import store from '@/stores/pinia';

const moviesStore = useMoviesStore(store);
const sortByOptions = ref([
  {id: 0, buttonLabel: 'Release Date', selected: true,},
  {id: 1, buttonLabel: 'Raiting'},
]);
const updateSortBy = (value) => {
  moviesStore.updateSortBy(value);
};

</script>
<style scoped>
.list-header {
  align-items: center;
  background-color: #555555;
  color: white;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  justify-content:space-between;
  padding: .5rem 3rem;
}
</style>
