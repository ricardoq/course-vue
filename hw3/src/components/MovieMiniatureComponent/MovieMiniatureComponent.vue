<template>
  <div class="miniature-wrapper">
    <img :src="movie.imageUrl">
    <div class="miniature-footer">
      <div>
        {{movie.name}}
        <span class="genre">{{movie.genre}}</span>
      </div>
      <div>
        <span class="release-year">{{movie.releaseYear}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import OptionsButton from '../OptionsButtonComponent/OptionsButtonComponent.vue';
import IMovie from '../../shared/definitions.ts';

const props = withDefaults(
  defineProps<{
    movie: IMovie;
  }>(),
  { }
)

</script>
<style scoped>
.miniature-wrapper {
  color: white;
  display: flex;
  flex-flow: column;
  padding: 0 1rem ;
  width:33%;
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
</style>
