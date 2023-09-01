<template>
  <span>
    <label>{{label}}</label>
    <button v-for="(option, index) in options"
            :key="index" type="button"
            :class="[
              option.selected && 'selected'
            ]"
            @click="onClick(index)">
      {{ option.buttonLabel }}
    </button>
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    label: string;
    options: {buttonLabel: string, selected: boolean}[]
    backgroundColor?: string;
  }>(),
  { primary: true, backgroundColor: '#f65261' }
);

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const onClick = (index) => {
  props.options.map((option, optionIndex) => {
    option.selected = optionIndex === index;
    return option;
  });
  emit('click', index);
};

</script>
<style scoped>
label{
  text-transform: uppercase;
  padding: .5rem 1rem;
  font-family: Arial, Helvetica, sans-serif;
}
button {
  background-color: #21212154 ;
  border: none;
  color: white;
  padding: .5rem 1rem;
  text-transform: uppercase;
}
button.selected {
  background-color: #f65261 ;
}
button:first-of-type{
  border-radius: 5px 0 0 5px;
}
button:last-of-type{
  border-radius: 0 5px 5px 0;
}
</style>
