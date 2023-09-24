import {type Ref,ref, watch, computed } from 'vue';
import useSearchStore from './useSearchStore';
import {type IMovie, SearchBy, SortBy} from '@/shared/definitions';
import { defineStore } from 'pinia';
import store from '@/stores/pinia';
import { snakeToCamel } from '@/shared/utils';

const moviesList: Ref<Array<IMovie>> = ref([]);
const sortBy: Ref<string> = ref(SortBy[SortBy.RELEASE_YEAR]);
const selectedMovie: Ref<IMovie|null> = ref(null);
const mockFetch: () => Promise<Array<IMovie>> = () => new Promise((resolve) => {
  setTimeout(() => {
    const data = [{
      id: 0,
      title: 'Pelicula 1',
              imageUrl: 'https://place-hold.it/270x400',
              genre: 'Action & adventure',
              releaseYear: 2000,
              raiting: 4,
              description: 'Is an action & adventure movie',
            },
            {
              id: 1,
              title: 'Pelicula 2',
              imageUrl: 'https://place-hold.it/270x400',
              genre: 'Drama',
              releaseYear: 2010,
              raiting: 2,
              description: 'Is a Drama movie',
            },
            {
              id: 2,
              title: 'Pelicula 3',
              imageUrl: 'https://place-hold.it/270x400',
              genre: 'Comedy',
              releaseYear: 1990,
              raiting: 5,
              description: 'Is a Comedy movie',
            },
          ];
    resolve(data);
  }, 1000);
});
const useMoviesStore = defineStore('movies', () => {
  const searchStore = useSearchStore(store);

  const initializeMovies = async () => {
    moviesList.value = await mockFetch();
  };

  const updateSortBy = (sortValue = SortBy.RELEASE_YEAR) => {
    sortBy.value = SortBy[sortValue];
  };

  const updateSelectedMovie = (selectedMovieValue: IMovie) => {
    selectedMovie.value = selectedMovieValue;
  };

  const moviesFilteredSorted = computed(() => (
    moviesList.value.filter(
      (movie: IMovie) => (!searchStore.search || !sortBy.value) ||
      (movie[SearchBy[searchStore.searchBy].toLowerCase()] as string)
        .toLowerCase().includes(searchStore.search.toLowerCase())
      ).sort((valA: IMovie, valB: IMovie) =>
         (valA[snakeToCamel(sortBy.value)] as number) -
        (valB[snakeToCamel(sortBy.value)] as number)
      )));

  const moviesFilteredSortedCount = computed(() => moviesFilteredSorted.value.length)

  return {
    selectedMovie,
    moviesList,
    sortBy,
    moviesFilteredSorted,
    moviesFilteredSortedCount,
    initializeMovies,
    updateSortBy,
    updateSelectedMovie,
  };
})

export default useMoviesStore;
