import { it, expect } from 'vitest';
import { mount } from '@vue/test-utils'
import Button from './ButtonComponent.vue';

it('should render button with label', () => {
  const label = 'Button';
  const button = mount(Button, {
    props: {label}
  })
  expect(button.text()).toEqual(label);
});

it('should add secondary-button class', () => {
  const label = 'Button';
  const primary = false;
  const button = mount(Button, {
    props: {label, primary},
  })
  expect(button.classes()).toEqual(['secondary-button']);
});
