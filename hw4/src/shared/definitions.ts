export interface IMovie {
  id: string;
  title: string;
  imageUrl: string;
  genres: string[];
  releaseYear: number;
  raiting: number;
  description: string;
  duration: string;
  [key: string]: string|number;
}

export enum  SearchBy{
  TITLE,
  GENRES,
};

export enum  SortBy{
  RELEASE_YEAR,
  RAITING
};
