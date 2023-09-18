export interface IMovie {
  id: string;
  title: string;
  imageUrl: string;
  genre: string;
  releaseYear: number;
  [key: string]: string|number;
}

export enum  SearchBy{
  TITLE,
  GENRE
};
