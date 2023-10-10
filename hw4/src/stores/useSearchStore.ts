import { ref } from 'vue';
import { SearchBy } from '../shared/definitions';
import { defineStore } from 'pinia';
import { useRouter, useRoute } from 'vue-router'

const useSearchStore = defineStore('search', () => {
  const search = ref('');
  const searchBy = ref(SearchBy.TITLE);
  const route = useRoute();
  if (route.query['search']) search.value = route.query['search'] as string;

  const updateSearch = (value = '') => {
    search.value = value;
  };
  const updateSearchBy = (value = SearchBy.TITLE) => {
    searchBy.value = value;
  };

  return { search, updateSearch, searchBy, updateSearchBy };
});

export default useSearchStore;
