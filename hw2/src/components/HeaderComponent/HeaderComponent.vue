<template>
  <span>
    <label class="header-title">Find your movie</label>
    <SearchComponent v-model="search"></SearchComponent>
    <OptionsButton label="Search by"
                   :options="searchByOptions"
                   @click="searchBy">
          </OptionsButton>
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import SearchComponent from '../SearchComponent/SearchComponent.vue';
import OptionsButton from '../OptionsButtonComponent/OptionsButtonComponent.vue';

const props = withDefaults(
  defineProps<{
    placeholder?: string;
    modelSearch?: string;
  }>(),
  { }
);
const emit = defineEmits(['searchBy']);

const search = computed({
  get() {
    return props.modelSearch;
  },
  set(value) {
    console.log(value);
  }
});

const searchByOptions = [
  {id: 0, buttonLabel: 'Title', selected: true,},
  {id: 1, buttonLabel: 'Genre'},
];

const searchBy = (value) => {
  searchByOptions.map(option => {
    option.selected=value === option.id;
    return option;
  });
  console.log(value);
}

</script>
<style scoped>
label.header-title {
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  margin-bottom: .5rem;
}
.options-button {
  display: block;
  margin-top: .5rem;
}
</style>
