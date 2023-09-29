import type {IMovie} from "@/shared/definitions";
import request from "./index";

export default class MovieApi {
  private BASE_URL = 'https://tame-erin-pike-toga.cyclic.app';

  fetchMovies(): Promise<IMovie[]> {
    return request(`${this.BASE_URL}/movies`).then(rawMovies => {
      return rawMovies.map((rawMovie: {[key: string]: string|number;}) => {
        return {
          id: rawMovie.id,
          title: rawMovie.title,
          imageUrl: rawMovie.posterurl,
          genres: rawMovie.genres,
          releaseYear: rawMovie.year,
          raiting: rawMovie.imdbRating,
          description: rawMovie.storyline,
        };
      });
    });
  }
}
