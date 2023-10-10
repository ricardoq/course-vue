import MovieDetail from './MovieDetailPage.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Page/Detail',
  component: MovieDetail,
  tags: ['autodocs']
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {}
};
