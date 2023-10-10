<template>
  <div class="banner-component">
    <img v-lazyLoad="movie?.imageUrl">
    <div class="details">
      <label class="header-title">{{movie?.title}}
        <span class="raiting">{{ movie?.raiting }}</span>
      </label>
      <div class="detail-data">
        <span class="release">{{ movie?.releaseYear }}</span>
        <span class="duration">{{ movie?.duration }}</span>
      </div>
      <div class="detail-desc">{{ movie?.description }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {type IMovie} from '@/shared/definitions';

const props = withDefaults(
  defineProps<{
    movie: IMovie;
  }>(),
  { }
);

</script>
<style scoped>
.banner-component {
  display: flex;
  padding: 50px 5%;
}
label.header-title {
  display: block;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
}
.header-title .raiting {
  color: #a1e66f;
  border: white solid 1px;
  border-radius: 50%;
  font-weight: lighter;
  height: 65px;
  margin-left: 1rem;
  padding: .5rem;
  width: 65px;
}
.details {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  padding: 4rem;
  width: 100%;
}
.detail-data {
  color: #f65261;
  font-size: 1.5rem;
  font-weight: lighter;
  margin-bottom: 1rem;
}
.detail-data .release {
  margin-right: 1rem;
}
.detail-data .duration:after,
.detail-data .release:after {
  color: #555;
  font-size: 1rem;
  margin-left: .5rem;
}
.detail-data .release:after {
  content: 'year';
}
.detail-data .duration:after {
  content: 'minutes';
}
.options-button {
  display: block;
  margin-top: .5rem;
}
</style>
