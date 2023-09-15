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
import { watch, onUpdated, ref } from 'vue';
import OptionsButton from '../OptionsButtonComponent/OptionsButtonComponent.vue';
import MovieMiniature from '../MovieMiniatureComponent/MovieMiniatureComponent.vue';
import IMovie from '../../shared/definitions.ts';
import {useMovies} from '../../composables/useMovies';

const {moviesFiltered , initializeMovies} = useMovies();
const movies: ref<Array<IMovie>> = ref([]);
const sortByOptions = [
  {id: 0, buttonLabel: 'Release Date', selected: true,},
  {id: 1, buttonLabel: 'Raiting'},
];

initializeMovies();
watch(moviesFiltered, (moviesUpd) => {
  movies.value = moviesUpd.map(movie => movie as IMovie);
  console.log(movies.value, moviesUpd.map(movie => movie as IMovie));
});

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
