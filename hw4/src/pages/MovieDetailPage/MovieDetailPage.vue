<template>
  <div class="page-wrapper">
    <MovieDetail :movie="selectedMovie"></MovieDetail>
    <MovieGenreList :genre="(selectedMovie as IMovie).genres[0]"></MovieGenreList>
  </div>
</template>

<script lang="ts" setup>
import MovieDetail from '../../components/MovieDetailComponent/MovieDetailComponent.vue';
import MovieGenreList from '../../components/MovieGenreListComponent/MovieGenreListComponent.vue';
import useMoviesStore from '@/stores/useMoviesStore';
import store from '@/stores/pinia';
import type {IMovie} from '@/shared/definitions';

const {selectedMovie} = useMoviesStore(store);
</script>
<style scoped>
</style>
