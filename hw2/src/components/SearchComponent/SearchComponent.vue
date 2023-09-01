<template>
  <span>
    <InputComponent placeholder="Find your movie"
                    v-model="search"></InputComponent>
    <ButtonComponent label="Search" @click="$emit('update:modelValue', search)">
          </ButtonComponent>
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import InputComponent from '../InputComponent/InputComponent.vue';
import ButtonComponent from '../ButtonComponent/ButtonComponent.vue';

const props = withDefaults(
  defineProps<{
    placeholder?: string;
  }>(),
  { }
);
const emit = defineEmits(['update:modelValue'])

</script>
<style scoped>
input {
  margin-right: 1rem;
}
</style>
