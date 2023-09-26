import { it, expect, vi, beforeEach, describe } from 'vitest';
import { mount } from '@vue/test-utils'
import ActionBar from './ActionBarComponent.vue';
import { createTestingPinia } from '@pinia/testing'
import useMoviesStore from '@/stores/useMoviesStore';

describe('Action Bar component test', () => {
  let component = null;
  const sortValue = 0;
  beforeEach(() => {
    component = mount(ActionBar, {
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

  it('should update sort at store when clicked', async () => {
    const store = useMoviesStore();
    await component.find('button').trigger('click');
    expect(store.updateSortBy).toHaveBeenCalledWith(sortValue);
  });
});
