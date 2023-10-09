import { it, expect } from 'vitest';
import { mount } from '@vue/test-utils'
import Input from './InputComponent.vue';

it('should render input with placeholder', () => {
  const placeholder = 'Placeholder';
  const input = mount(Input, {
    props: {placeholder}
  })
  expect(input.element.placeholder).toEqual(placeholder);
});

