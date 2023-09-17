import BannerComponent from './BannerComponent.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'MovieAppComponent/Header',
  component: BannerComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {}
};
