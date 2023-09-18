import { ref } from 'vue';
import { SearchBy } from '../shared/definitions';
import { defineStore } from 'pinia';

const useSearchStore = defineStore('search', () => {
  const search = ref('');
  const searchBy = ref(SearchBy.TITLE);

  const updateSearch = (value = '') => {
    search.value = value;
  };
  const updateSearchBy = (value = SearchBy.TITLE) => {
    searchBy.value = value;
  };

  return { search, updateSearch, searchBy, updateSearchBy };
});

export default useSearchStore;
