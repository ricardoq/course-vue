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
    selectionChange: { action: 'selectionChange' }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const OptionsButtons = {
  args: {
    label: 'Toggle button',
    options: [
      {
        id: 0,
        buttonLabel: 'option 1',
        selected: true
      },
      {
        id: 1,
        buttonLabel: 'option 2'
      }
    ]
  }
};
