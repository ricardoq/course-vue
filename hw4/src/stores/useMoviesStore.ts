import {type Ref,ref, watch, computed } from 'vue';
import useSearchStore from './useSearchStore';
import {type IMovie, SearchBy} from '@/shared/definitions';
import { defineStore } from 'pinia';
import store from '@/stores/pinia';

const moviesList: Ref<Array<IMovie>> = ref([]);
const mockFetch: () => Promise<Array<IMovie>> = () => new Promise((resolve) => {
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

  const moviesFiltered = computed(() =>
    moviesList.value.filter((movie: IMovie) =>{
    return !searchStore.search ||
      (movie[SearchBy[searchStore.searchBy].toLowerCase()] as string)
        .toLowerCase().includes(searchStore.search.toLowerCase());
      }));

  const moviesFilteredCount = computed(() => moviesFiltered.value.length)

  return { moviesList, moviesFiltered, moviesFilteredCount ,initializeMovies};
})

export default useMoviesStore;
