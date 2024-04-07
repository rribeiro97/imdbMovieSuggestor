export interface ITmdbClient {
  fetchTopMoviesList(): Promise<any[]>;
}
