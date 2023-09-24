import { ref, watch, computed } from 'vue';
import { useSearch } from './useSearch';
import {type IMovie, SearchBy} from '@/shared/definitions';

const moviesList = ref([]);
const searchByVal = ref(SearchBy.TITLE);
const mockFetch = () => new Promise((resolve) => {
  setTimeout(() => {
    const data = [{
              id: 0,
              title: 'Pelicula 1',
              imageUrl: 'https://place-hold.it/270x400',
              genre: 'Action & adventure',
              releaseYear: 2000
            },
            {
              id: 1,
              title: 'Pelicula 2',
              imageUrl: 'https://place-hold.it/270x400',
              genre: 'Drama',
              releaseYear: 2010
            },
            {
              id: 2,
              title: 'Pelicula 3',
              imageUrl: 'https://place-hold.it/270x400',
              genre: 'Comedy',
              releaseYear: 1990
            }];
    resolve(data);
  }, 1000);
});
export function useMovies() {
  const { searchValue, searchByValue } = useSearch();

  const initializeMovies = async () => {
    moviesList.value = await mockFetch();
  };

  const moviesFilteredSorted = computed(() =>
    moviesList.value.filter((movie: IMovie) =>
      !searchValue.value ||
      movie[SearchBy[searchByVal.value].toLowerCase()]
        .toLowerCase().includes(searchValue.value.toLowerCase())));

  watch(searchByValue ,(newVal) => {
    searchByVal.value = newVal;
  });


  return { moviesFilteredSorted ,initializeMovies};
}
