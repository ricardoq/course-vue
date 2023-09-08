<template>
  <span>
    <Header></Header>
    <MovieList :movies="movies"></MovieList>
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import Header from '../../components/HeaderComponent/HeaderComponent.vue';
import MovieList from '../../components/MovieListComponent/MovieListComponent.vue';
import IMovie from '../../shared/definitions.ts';

const movies: IMovie[] = [
      {
        id: 0,
        name: 'Pelicula 1',
        imageUrl: 'https://place-hold.it/270x400',
        genre: 'Action & adventure',
        releaseYear: 2000
      },
      {
        id: 1,
        name: 'Pelicula 2',
        imageUrl: 'https://place-hold.it/270x400',
        genre: 'Drama',
        releaseYear: 2010
      },
      {
        id: 2,
        name: 'Pelicula 3',
        imageUrl: 'https://place-hold.it/270x400',
        genre: 'Comedy',
        releaseYear: 1990
      }
    ];

</script>
<style scoped>
label.header-title {
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  margin-bottom: .5rem;
}
.options-button {
  display: block;
  margin-top: .5rem;
}
</style>
