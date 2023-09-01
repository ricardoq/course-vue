import OptionsButton from './OptionsButtonComponent.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'MovieAppComponent/Options Button',
  component: OptionsButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color'
    },
    onClick: {}
  }
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    label: 'Toggle button',
    options: [
      {
        buttonLabel: 'option 1',
        selected: true
      },
      {
        buttonLabel: 'option 2'
      }
    ]
  }
};
