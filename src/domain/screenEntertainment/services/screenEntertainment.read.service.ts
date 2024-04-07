import { ITmdbClient } from "../../../clients/interfaces/ITmdbClient.interface";

export interface TMDBMovie {}

export default class ScreenEntertainmentReadService {
  private readonly tmdbClient: ITmdbClient;

  constructor({ tmdbClient }: { tmdbClient: ITmdbClient }) {
    this.tmdbClient = tmdbClient;
  }

  async getTop100Movies(): Promise<any[]> {
    try {
      const movieList = await this.tmdbClient.fetchTopMoviesList();

      return movieList;
    } catch (error: Error | unknown) {
      throw error;
    }
  }
}
