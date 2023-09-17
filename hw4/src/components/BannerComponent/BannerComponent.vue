<template>
  <div class="banner-component">
    <label class="header-title">Find your movie</label>
    <SearchComponent></SearchComponent>
    <OptionsButton label="Search by"
                   :options="searchByOptions"
                   @click="updateSearch">
          </OptionsButton>
        </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { SearchBy } from '../../shared/definitions';
import { useSearch } from '../../composables/useSearch';
import SearchComponent from '../SearchComponent/SearchComponent.vue';
import OptionsButton from '../OptionsButtonComponent/OptionsButtonComponent.vue';

const props = withDefaults(
  defineProps<{
    placeholder?: string;
    modelSearch?: string;
  }>(),
  { }
);
const {searchByValue, searchBy} = useSearch();

const search = computed({
  get() {
    return props.modelSearch;
  },
  set(value) {
    console.log(value);
  }
});

const searchByOptions = ref([
  {id: 0, buttonLabel: 'Title', value: SearchBy.TITLE, selected: true,},
  {id: 1, buttonLabel: 'Genre', value: SearchBy.GENRE},
]);

const updateSearch = (value) => {
  searchBy(value);
}

watch(searchByValue, (value) => {
  searchByOptions.value = searchByOptions.value.map(option => ({
    ...option,
    selected: value === option.value,
  }));
})

</script>
<style scoped>
.banner-component {
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
.options-button {
  display: block;
  margin-top: .5rem;
}
</style>
