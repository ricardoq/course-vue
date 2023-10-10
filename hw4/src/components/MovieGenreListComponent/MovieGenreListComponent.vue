<template>
  <div>
    <div class="list-header">
      <label>Films by
        <span>{{ genre }}</span>
      </label>
    </div>
    <div class="movie-list">
      <MovieMiniature v-for="movie in moviesStore.moviesFilteredSorted"
                      v-bind:key="movie.id"
                      :movie="movie"></MovieMiniature>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MovieMiniature from '../MovieMiniatureComponent/MovieMiniatureComponent.vue';
import { SearchBy } from '@/shared/definitions';
import useMoviesStore from '@/stores/useMoviesStore';
import useSearchStore from '@/stores/useSearchStore';
import store from '@/stores/pinia';

const moviesStore = useMoviesStore(store);
const searchStore = useSearchStore(store);
const props = withDefaults(
  defineProps<{
    genre: string;
  }>(),
  { }
  );

moviesStore.initializeMovies();
searchStore.updateSearchBy(SearchBy.GENRES);
searchStore.updateSearch(props.genre);

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
.movie-list {
  display: flex;
  flex-wrap: wrap;
  padding: 15px 5%;
}
</style>
