<template>
  <div class="page-wrapper">
    <MovieDetail :movie="selectedMovie"></MovieDetail>
    <MovieList></MovieList>
  </div>
</template>

<script lang="ts" setup>
import MovieDetail from '../../components/MovieDetailComponent/MovieDetailComponent.vue';
import MovieList from '../../components/MovieListComponent/MovieListComponent.vue';
import useMoviesStore from '@/stores/useMoviesStore';
import store from '@/stores/pinia';

const {selectedMovie} = useMoviesStore(store);
</script>
<style scoped>
</style>
