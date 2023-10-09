import LogoComponent from './LogoComponent.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'MovieAppComponent/Logo',
  component: LogoComponent,
  tags: ['autodocs'],
  argTypes: {
    primary: true
  }
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    primary: true
  }
};


// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Secondary = {
  args: {
    primary: false
  }
};
