import { it, expect, vi, beforeEach, describe } from 'vitest';
import { mount } from '@vue/test-utils'
import MovieList from './MovieListComponent.vue';
import { createTestingPinia } from '@pinia/testing'
import useMovieStore from '@/stores/useMoviesStore';

describe('Search component test', () => {
  let component = null;

  beforeEach(() => {
    component = mount(MovieList, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            createSpy: vi.fn,
          }),
        ],
      },
    });
  });

  it('should initialize movies on load', () => {
    const store = useMovieStore();

    expect(store.initializeMovies).toHaveBeenCalled();
  });
});


