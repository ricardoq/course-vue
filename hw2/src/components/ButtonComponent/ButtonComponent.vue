<template>
  <button type="button" :class="classes" :style="style" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    label: string;
    primary?: boolean;
    backgroundColor?: string;
  }>(),
  { primary: true, backgroundColor: '#f65261' }
);


const style = computed(() => ({
  backgroundColor: props.primary ? props.backgroundColor : '#21212154'
}));

const classes = computed(() => ({
  'secondary-button': !props.primary,
}));

</script>
<style scoped>
button {
  border: none;
  border-radius: 5px;
  color: white;
  padding: .5rem 1rem;
  text-transform: uppercase;
}
</style>
