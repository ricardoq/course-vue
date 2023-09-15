import MovieMiniatureComponent from './MovieMiniatureComponent.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'MovieAppComponent/MovieMinature',
  component: MovieMiniatureComponent,
  tags: ['autodocs']
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    movie: {
      id: 0,
      name: 'Pelicula 1',
      imageUrl: 'https://place-hold.it/270x400',
      genre: 'Action & adventure',
      releaseYear: 2000
    }
  }
};
