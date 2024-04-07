import Axios, { AxiosError, AxiosInstance } from "axios";
import { ITmdbClient } from "./interfaces/ITmdbClient.interface";
import { HttpError } from "../support/errors";

interface TmdbMovieReturn {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default class TmdbClient implements ITmdbClient {
  private readonly tmdbClient: AxiosInstance;
  private readonly FETCH_TOP_RATED_MOVIES_ENDPOINT = "/movie/top_rated";

  constructor() {
    this.tmdbClient = Axios.create({
      baseURL: process.env.TMDB_API_URL,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_TOKEN_READ_ONLY}`,
      },
    });
  }

  async fetchTopMoviesList(): Promise<TmdbMovieReturn[]> {
    try {
      const response = await this.tmdbClient.get(
        this.FETCH_TOP_RATED_MOVIES_ENDPOINT
      );
      return response.data;
    } catch (error) {
      console.error(error);
      let statusCode = 500;
      let message = "Error fetching top movie list from TMDB";

      throw new HttpError({
        message,
        status: statusCode,
        name: this.fetchTopMoviesList.name,
      });
    }
  }
}
