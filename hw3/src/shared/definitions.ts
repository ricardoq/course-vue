export interface IMovie {
  id: string;
  title: string;
  imageUrl: string;
  genre: string;
  releaseYear: number;
}

export enum  SearchBy{
  TITLE,
  GENRE
};
