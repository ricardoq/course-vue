<template>
  <div class="page-wrapper">
    <Banner></Banner>
    <div class="not-found">PAGE NOT FOUND</div>
  </div>
</template>

<script lang="ts" setup>
import Banner from '../../components/BannerComponent/BannerComponent.vue';
</script>
<style scoped>
.not-found {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 4rem 2rem;
  text-align: center;
  width: 100%;
}
</style>
