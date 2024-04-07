import * as dotenv from "dotenv";
import TmdbClient from "./clients/tmdb.client";
import ScreenEntertainmentReadService from "./domain/screenEntertainment/services/screenEntertainment.read.service";

dotenv.config();
// Clients
const tmdbClient = new TmdbClient();

// Repositories

// Services
const screenEntertainmentReadService = new ScreenEntertainmentReadService({
  tmdbClient,
});

export { tmdbClient, screenEntertainmentReadService };
