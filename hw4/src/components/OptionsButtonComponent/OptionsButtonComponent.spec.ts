import { it, expect, vi, beforeEach, describe } from 'vitest';
import { mount } from '@vue/test-utils'
import OptionsButton from './OptionsButtonComponent.vue';
import { createTestingPinia } from '@pinia/testing'
import useSearchStore from '@/stores/useSearchStore';

describe('Option Button component test', () => {
  const label = 'New Label';

  it('should set label from props', () => {
    const optionsButton = mount(OptionsButton, {
      props: {
        label: label,
      }
    });

    expect(optionsButton.find('label').text()).toEqual(label);
  });

  it('should emit selection after click', async () => {
    const options = [
      {id: 1, buttonLabel: 'label 1', selected: false},
      {id: 2, buttonLabel: 'label 2', selected: true},
    ];
    const testIndex = 1;
    const optionsButton = mount(OptionsButton, {
      props: {
        label: label,
        options,
      }
    });

    const btns = optionsButton.findAll('button');
    await btns[testIndex].trigger('click');

    expect(optionsButton.emitted().click[0]).toEqual([options[testIndex].id]);
  });
});


