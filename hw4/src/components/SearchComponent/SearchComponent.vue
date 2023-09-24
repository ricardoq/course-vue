<template>
  <div class="search">
    <InputComponent placeholder="Find your movie"
                    v-model="searchValue"></InputComponent>
    <ButtonComponent label="Search" @click="updateSearchTrigger">
          </ButtonComponent>
        </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import InputComponent from '../InputComponent/InputComponent.vue';
import ButtonComponent from '../ButtonComponent/ButtonComponent.vue';
import useSearchStore from '@/stores/useSearchStore';
import store from '@/stores/pinia';

const searchValue = ref('');
const searchStore = useSearchStore(store);

const updateSearchTrigger = () => {
  searchStore.updateSearch(searchValue.value);
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
