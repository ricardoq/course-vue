<template>
  <div class="list-header">
    <label>{{moviesStore.moviesFilteredCount}} movies found</label>
    <OptionsButton label="Sort by"
                  :options="sortByOptions"></OptionsButton>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue';
import OptionsButton from '../OptionsButtonComponent/OptionsButtonComponent.vue';
import IMovie from '../../shared/definitions.ts';
import useMoviesStore from '@/stores/useMoviesStore';
import store from '@/stores/pinia';

const moviesStore = useMoviesStore(store);
const sortByOptions = [
  {id: 0, buttonLabel: 'Release Date', selected: true,},
  {id: 1, buttonLabel: 'Raiting'},
];

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
