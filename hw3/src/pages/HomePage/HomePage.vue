<template>
  <div class="page-wrapper">
    <Header></Header>
    <MovieList></MovieList>
  </div>
</template>

<script lang="ts" setup>
import Header from '../../components/HeaderComponent/HeaderComponent.vue';
import MovieList from '../../components/MovieListComponent/MovieListComponent.vue';

</script>
<style scoped>
.page-wrapper {
  background: #333;
  padding: 30px;
}
</style>
