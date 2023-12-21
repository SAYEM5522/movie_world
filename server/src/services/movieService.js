import { Movie } from "../models/movie.js";
import { Rating } from "../models/rating.js";
import { Watch } from "../models/watched.js";



export const createMovie = async (movieData) => {
  try {
    const newMovie = new Movie(movieData);
    return await newMovie.save();
  } catch (error) {
    throw error;
  }
};

export const getUpcomingMovies = async () => {
  try {
    // Get the current date
    const currentDate = new Date();

    const upcomingMovies = await Movie.find({ releaseDate: { $gt: currentDate } });
    
    return upcomingMovies;
  } catch (error) {
    throw error;
  }
};

export const getWatchedMovies = async (userId) => {
  try {
    const watchlist = await Watch.findOne({ userId }).populate("movies.movieId");
    return watchlist ? watchlist.movies.map((m) => m.movieId) : [];
  } catch (error) {
    throw error;
  }
};

export const getRatedMovies = async (userId) => {
  try {
    const ratings = await Rating.find({ userId }).populate("movies.movieId");
    const value= ratings ? ratings.map((item)=>item.movies.map((r) => r.movieId)).flat(): [];
    return value
  } catch (error) {
    throw error;
  }
};

export const getAddedMovies = async (userId) => {
  try {
    const movie = await Movie.find({ userId })
    return movie
  } catch (error) {
    throw error;
  }
};

export const getMovies = async (movieId) => {
  try {
    const movie = await Movie.findOne({_id:movieId });
    return movie
  } catch (error) {
    throw error;
  }
};
