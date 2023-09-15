import { ref } from 'vue';
import { SearchBy } from '../shared/definitions';

const searchValue = ref('');
const searchByValue = ref(SearchBy.TITLE);

export function useSearch() {
  const search = (value = '') => {
    searchValue.value = value;
  };
  const searchBy = (value = SearchBy.TITLE) => {
    searchByValue.value = value;
  };

  return { searchValue, search, searchByValue, searchBy };
}
