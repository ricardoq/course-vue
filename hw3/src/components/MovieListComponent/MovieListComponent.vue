<template>
  <div>
    <div class="list-header">
      <label>{{movies.length}} movies found</label>
      <OptionsButton label="Sort by"
                   :options="sortByOptions"></OptionsButton>
    </div>
    <div class="movie-list">
      <MovieMiniature v-for="movie in movies" v-bind:key="movie.id" :movie="movie"></MovieMiniature>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import OptionsButton from '../OptionsButtonComponent/OptionsButtonComponent.vue';
import MovieMiniature from '../MovieMiniatureComponent/MovieMiniatureComponent.vue';
import IMovie from '../../shared/definitions.ts';

const props = withDefaults(
  defineProps<{
    movies: Array<IMovie>;
  }>(),
  { }
);

const sortByOptions = [
  {id: 0, buttonLabel: 'Release Date', selected: true,},
  {id: 1, buttonLabel: 'Raiting'},
];


</script>
<style scoped>
.list-header {
  background-color: #555555;
  color: white;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: .5rem 3rem;
}
.movie-list {
  display: flex;
  padding-top: 15px;
}
</style>
