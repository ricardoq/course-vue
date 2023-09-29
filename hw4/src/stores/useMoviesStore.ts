import {type Ref,ref, watch, computed } from 'vue';
import useSearchStore from './useSearchStore';
import {type IMovie, SearchBy, SortBy} from '@/shared/definitions';
import { defineStore } from 'pinia';
import store from '@/stores/pinia';
import { snakeToCamel } from '@/shared/utils';
import MovieApi from '@/api/api';

const moviesList: Ref<Array<IMovie>> = ref([]);
const sortBy: Ref<string> = ref(SortBy[SortBy.RELEASE_YEAR]);
const selectedMovie: Ref<IMovie|null> = ref(null);

const useMoviesStore = defineStore('movies', () => {
  const searchStore = useSearchStore(store);
  const movieApi = new MovieApi;

  const initializeMovies = async () => {
    console.log(await movieApi.fetchMovies());
    moviesList.value = await movieApi.fetchMovies();
  };

  const updateSortBy = (sortValue = SortBy.RELEASE_YEAR) => {
    sortBy.value = SortBy[sortValue];
  };

  const updateSelectedMovie = (selectedMovieValue: IMovie) => {
    selectedMovie.value = selectedMovieValue;
  };

  const moviesFilteredSorted = computed(() => {
    return moviesList.value.filter(
      (movie: IMovie) => {
        if (!searchStore.search) {
          return true;
        }
        if (searchStore.searchBy === SearchBy.GENRES) {
          return movie.genres
                  .find((genre: string) => genre.toLowerCase()
                            .includes(searchStore.search.toLowerCase()));
        }
        return (movie[SearchBy[searchStore.searchBy].toLowerCase()] as string)
                .toLowerCase().includes(searchStore.search.toLowerCase());
      }).sort((valA: IMovie, valB: IMovie) =>
         (valA[snakeToCamel(sortBy.value)] as number) -
        (valB[snakeToCamel(sortBy.value)] as number)
      );
    });

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
