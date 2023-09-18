<template>
  <div class="miniature-wrapper" @click="selectMovie">
    <img v-lazyLoad="movie.imageUrl">
    <div class="miniature-footer">
      <div>
        {{movie.title}}
        <span class="genre">{{movie.genre}}</span>
      </div>
      <div>
        <span class="release-year">{{movie.releaseYear}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useMoviesStore from '@/stores/useMoviesStore';
import {IMovie} from '@/shared/definitions.ts';
import vLazyLoad from '@/directives/LazyLoadDirective';
import store from '@/stores/pinia';

const props = withDefaults(
  defineProps<{
    movie: IMovie;
  }>(),
  { }
);

const moviesStore = useMoviesStore(store);

const selectMovie = () => {
  moviesStore.updateSelectedMovie(props.movie);
}

</script>
<style scoped>
.miniature-wrapper {
  color: white;
  display: flex;
  flex-flow: column;
  padding: 1.5rem 1rem;
  width: calc(33% - 2rem);
}
.miniature-wrapper img {
  height: auto;
  width: 100%;
}
.miniature-wrapper .miniature-footer {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}
.miniature-wrapper .miniature-footer .genre {
  display: block;
  font-size: .8rem;
}
.miniature-wrapper .miniature-footer .release-year {
  border: 1px solid white;
  border-radius: 3px;
  padding: 2px;
}
img.loading {
  background-color: grey;
  min-height: 350px;
  min-width: 100%;
}
</style>
