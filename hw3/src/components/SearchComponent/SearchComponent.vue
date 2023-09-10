<template>
  <span>
    <InputComponent placeholder="Find your movie"
                    v-model="searchValue"></InputComponent>
    <ButtonComponent label="Search" @click="updateSearch">
          </ButtonComponent>
  </span>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import InputComponent from '../InputComponent/InputComponent.vue';
import ButtonComponent from '../ButtonComponent/ButtonComponent.vue';
import {useSearch} from '../../composables/useSearch';

const searchValue = ref('');
const {search} = useSearch();

const updateSearch = () => {
  search(searchValue.value);
}

</script>
<style scoped>
input {
  margin-right: 1rem;
}
</style>
