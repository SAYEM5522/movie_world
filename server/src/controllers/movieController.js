import { Rating } from "../models/rating.js";
import { createMovie, getAddedMovies, getMovies, getRatedMovies, getUpcomingMovies, getWatchedMovies } from "../services/movieService.js";
import { measureRating } from "../services/ratingService.js";

const calculateAverageRating = (ratings) => {
  if (ratings.length === 0) {
    return 0;
  }

  const totalRating = ratings.reduce((sum, rating) => sum + rating.rating, 0);
  return totalRating / ratings.length;
};
export const createMovieController = async (req, res) => {
  try {
    const movieData = req.body;
    const savedMovie = await createMovie(movieData);

    res.status(201).json(savedMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getUpcomingMoviesController = async (req, res) => {
  try {
    // Fetch upcoming movies
    const upcomingMovies = await getUpcomingMovies();

    res.status(200).json({
      upcomingMovies,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getWatchedMoviesController = async (req, res) => {
  try {
    const { userId } = req.params;

    // // Fetch watched movies for the specified user
    const watchedMovies = await getWatchedMovies(userId);
    const WatchedMoviesWithRating = await Promise.all(
      watchedMovies.map(async (movie) => {
          const {totalRatings,avgRating} = await measureRating(movie._id);
          return {
            movie,
            totalRatings,
            avgRating,
          };
        })
      );

    res.status(200).json({
      watchedMovies:WatchedMoviesWithRating
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getRatingMoviesController = async (req, res) => {
  try {
    const { userId } = req.params;
    const ratedMovies = await getRatedMovies(userId);
    const ratedMoviesWithRating = await Promise.all(
    ratedMovies.map(async (movie) => {
        const {totalRatings,avgRating} = await measureRating(movie._id);
        return {
          movie,
          totalRatings,
          avgRating,
        };
      })
    );

    res.status(200).json({
      ratedMovies: ratedMoviesWithRating,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAddedMoviesController = async (req, res) => {
  try {
    const { userId } = req.params;
    // // Fetch rated movies for the specified user
    const addedMovies = await getAddedMovies(userId);

    res.status(200).json({
      addedMovies,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMoviesController = async (req, res) => {
  try {
    const { movieId } = req.params;
    // // Fetch rated movies for the specified user
    const Movies = await getMovies(movieId);
    const ratings = await Rating.find({ 'movies.movieId': movieId });
    const totalRatings = ratings.length;
    const avgRating = calculateAverageRating(ratings);
    res.status(200).json({
      Movies,
      totalRatings,
      avgRating,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
