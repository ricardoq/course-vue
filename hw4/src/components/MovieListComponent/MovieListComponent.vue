<template>
  <div>
    <ActionBarComponent></ActionBarComponent>
    <div class="movie-list">
      <MovieMiniature v-for="movie in movies" v-bind:key="movie.id" :movie="movie"></MovieMiniature>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue';
import MovieMiniature from '../MovieMiniatureComponent/MovieMiniatureComponent.vue';
import ActionBarComponent from '../ActionBarComponent/ActionBarComponent.vue';
import IMovie from '../../shared/definitions.ts';
import {useMovies} from '../../composables/useMovies';

const {moviesFiltered , initializeMovies} = useMovies();
const movies: ref<Array<IMovie>> = ref([]);

initializeMovies();
watch(moviesFiltered, (moviesUpd) => {
  movies.value = moviesUpd.map(movie => movie as IMovie);
  console.log(movies.value, moviesUpd.map(movie => movie as IMovie));
});

</script>
<style scoped>
.movie-list {
  display: flex;
  padding: 15px 5%;
}
</style>
