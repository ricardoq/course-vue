import ActionBarComponent from './ActionBarComponent.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'MovieAppComponent/ActionBarComponent',
  component: ActionBarComponent,
  tags: ['autodocs']
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    movies: [
      {
        id: 0,
        name: 'Pelicula 1',
        imageUrl: 'https://place-hold.it/270x400',
        genre: 'Action & adventure',
        releaseYear: 2000
      },
      {
        id: 1,
        name: 'Pelicula 2',
        imageUrl: 'https://place-hold.it/270x400',
        genre: 'Drama',
        releaseYear: 2010
      },
      {
        id: 2,
        name: 'Pelicula 3',
        imageUrl: 'https://place-hold.it/270x400',
        genre: 'Comedy',
        releaseYear: 1990
      },
    ]
  }
};
