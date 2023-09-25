import { it, expect } from 'vitest';
import { mount } from '@vue/test-utils'
import Button from './ButtonComponent.vue';

//👇 Imports a specific story for the test
it('renders default button', () => {
  const label = 'Button';
  const button = mount(Button, {
    label
  })
  expect(button.text()).toContain(label);
});
