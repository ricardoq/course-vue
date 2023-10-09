import { it, expect, vi, beforeEach, describe } from 'vitest';
import { mount } from '@vue/test-utils'
import Search from './SearchComponent.vue';
import { createTestingPinia } from '@pinia/testing'
import useSearchStore from '@/stores/useSearchStore';

describe('Search component test', () => {
  let component = null;
  const searchValue = 'searchValue';
  beforeEach(() => {
    component = mount(Search, {
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

  it('should update search at store when clicked', async () => {
    const store = useSearchStore();

    component.vm.searchValue = searchValue;
    await component.find('button').trigger('click');

    expect(store.updateSearch).toHaveBeenCalledWith(searchValue);
  });
});


