import InputComponent from './InputComponent.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'MovieAppComponent/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color'
    },
    onKeyup: {}
  }
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Input = {
  args: {
    placeholder: 'Placeholder text'
  }
};
