import { it, expect, vi, beforeEach, describe } from 'vitest';
import { mount } from '@vue/test-utils'
import MovieMiniature from './MovieMiniatureComponent.vue';
import { createTestingPinia } from '@pinia/testing'
import useMovieStore from '@/stores/useMoviesStore';

describe('Search component test', () => {
  let component = null;
  const movie = {
    id: 0,
    title: 'Pelicula 1',
    imageUrl: 'https://place-hold.it/270x400',
    genre: 'Action & adventure',
    releaseYear: 2000,
    raiting: 4,
    description: 'Is an action & adventure movie',
  };

  beforeEach(() => {
    component = mount(MovieMiniature, {
      props:{movie},
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

  it('should update selected movie on click', () => {
    const store = useMovieStore();
    component.find('.miniature-wrapper').trigger('click');

    expect(store.updateSelectedMovie).toHaveBeenCalled();
  });
});


