
import { Watch } from "../models/watched.js";

export const addToWatchlist = async (userId, movieId) => {
  try {
    // Check if the movie is already in the watchlist
    console.log(movieId)
    const watchlist = await Watch.findOne({ userId });
    if (watchlist) {
      // If the movie is not already in the watchlist, add it
      if (!watchlist.movies.some((m) => m.movieId?.equals(movieId))) {
        watchlist.movies.push({ movieId });
        await watchlist.save();
      }
    } else {
      // If the user doesn't have a watchlist, create one
      await Watch.create({ userId, movies: [{ movieId }] });
    }
  } catch (error) {
    throw error;
  }
};

