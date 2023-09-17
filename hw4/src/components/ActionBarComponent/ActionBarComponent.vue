<template>
  <div class="list-header">
    <label>{{movies.length}} movies found</label>
    <OptionsButton label="Sort by"
                  :options="sortByOptions"></OptionsButton>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue';
import OptionsButton from '../OptionsButtonComponent/OptionsButtonComponent.vue';
import IMovie from '../../shared/definitions.ts';
import {useMovies} from '../../composables/useMovies';

const {moviesFiltered , initializeMovies} = useMovies();
const movies: ref<Array<IMovie>> = ref([]);
const sortByOptions = [
  {id: 0, buttonLabel: 'Release Date', selected: true,},
  {id: 1, buttonLabel: 'Raiting'},
];

watch(moviesFiltered, (moviesUpd) => {
  movies.value = moviesUpd.map(movie => movie as IMovie);
  console.log(movies.value, moviesUpd.map(movie => movie as IMovie));
});

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
