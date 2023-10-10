<template>
 <router-link to="/">
   <h1 :style="style">
      netflix<span>roullete</span>
    </h1>
 </router-link>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    primary?: boolean;
    color?: string
  }>(),
  { primary: true, color: '#f65261'}
);
const style = computed(() => ({
  color: props.primary ? props.color : 'white'
}));
</script>
<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
  margin: 1rem;
}

h1 span {
  font-weight: lighter;
}

a {
  text-decoration: none;
}
</style>
