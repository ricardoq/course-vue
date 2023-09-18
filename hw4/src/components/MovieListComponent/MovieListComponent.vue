<template>
  <div>
    <ActionBarComponent></ActionBarComponent>
    <div class="movie-list">
      <MovieMiniature v-for="movie in moviesStore.moviesFilteredSorted" v-bind:key="movie.id" :movie="movie"></MovieMiniature>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MovieMiniature from '../MovieMiniatureComponent/MovieMiniatureComponent.vue';
import ActionBarComponent from '../ActionBarComponent/ActionBarComponent.vue';
import useMoviesStore from '@/stores/useMoviesStore';
import store from '@/stores/pinia';

const moviesStore = useMoviesStore(store);

moviesStore.initializeMovies();

</script>
<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  padding: 15px 5%;
}
</style>
