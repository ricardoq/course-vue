<template>
  <span class="options-button">
    <label>{{label}}</label>
    <button v-for="option in options"
            :key="option.id" type="button"
            :class="[
              option.selected && 'selected'
            ]"
            @click="onClick(option.id)">
      {{ option.buttonLabel }}
    </button>
  </span>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    label: string;
    options: {id: number, buttonLabel: string, selected: boolean}[]
  }>(),
  {  }
);

const emit = defineEmits<{(event: 'click', index: number): void}>();

const onClick = (index) => {
  props.options.map(option => {
    option.selected = option.id === index;
    return option;
  });
  emit('click', index);
};

</script>
<style scoped>
label{
  color: white;
  text-transform: uppercase;
  padding: .5rem 1rem;
  padding-left: 0;
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
