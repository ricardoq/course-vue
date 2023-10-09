import { it, expect, vi, beforeEach, describe } from 'vitest';
import { mount } from '@vue/test-utils'
import Banner from './BannerComponent.vue';
import { createTestingPinia } from '@pinia/testing'
import useSearchStore from '@/stores/useSearchStore';
import { SearchBy } from '../../shared/definitions';

describe('Search component test', () => {
  let component = null;
  const searchValue = 'searchValue';
  beforeEach(() => {
    component = mount(Banner, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            initialState: {searchValue},
            createSpy: vi.fn,
          }),
        ],
      },
    });
  });

  it('should update searchBy at store when clicked option', async () => {
    const store = useSearchStore();
    const searchByOptions = component.vm.searchByOptions;

    await component.findAll('button')[2].trigger('click');

    expect(store.updateSearchBy).toHaveBeenCalledWith(searchByOptions[1].id);
  });

  it('should update searchByOptions at component when emited store', async () => {
    const store = useSearchStore();
    const searchByOptions = component.vm.searchByOptions;

    await component.findAll('button')[2].trigger('click');

    expect(searchByOptions).toEqual([{
      id: 0,
      buttonLabel: 'Title',
      value: SearchBy.TITLE,
      selected: false,
    }, {
      id: 1,
      buttonLabel: 'Genre',
      value: SearchBy.GENRE,
      selected: true
    }]);
  });
});
