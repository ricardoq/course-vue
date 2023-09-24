<template>
  <input type="text"
         :placeholder="props.placeholder"
         :class="classes"
         @input="$emit('update:modelValue', $event.target.value)">
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    placeholder?: string;
  }>(),
  { }
);

defineEmits(['update:modelValue'])

</script>
<style scoped>
input {
  background-color: #21212154;
  border: none;
  border-radius: 5px;
  color: white;
  padding: .5rem 1rem;
}
input::placeholder{
  color:#ffffff99
}
</style>
