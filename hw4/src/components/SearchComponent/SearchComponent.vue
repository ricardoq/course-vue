<template>
  <div class="search">
    <InputComponent placeholder="Find your movie"
                    v-model="searchValue"></InputComponent>
    <ButtonComponent label="Search" @click="updateSearch">
          </ButtonComponent>
        </div>
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
.search {
  display: flex;
  width: 100%;
}
input {
  margin-right: 2rem;
  width: 100%;
}
</style>
