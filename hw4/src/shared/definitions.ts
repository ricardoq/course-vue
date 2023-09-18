export interface IMovie {
  id: string;
  title: string;
  imageUrl: string;
  genre: string;
  releaseYear: number;
  raiting: number;
  description: number;
  [key: string]: string|number;
}

export enum  SearchBy{
  TITLE,
  GENRE
};

export enum  SortBy{
  RELEASE_YEAR,
  RAITING
};
