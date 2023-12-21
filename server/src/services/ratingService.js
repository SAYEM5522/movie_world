import { Rating } from "../models/rating.js";
const calculateAverageRating = (ratings) => {
  if (ratings.length === 0) {
    return 0;
  }

  const totalRating = ratings.reduce((sum, rating) => sum + rating.rating, 0);
  return totalRating / ratings.length;
};
export const rateMovie = async (userId, movieId, rating) => {
  try {
    // movieId = mongoose.Schema.Types.ObjectId(movieId); // Corrected: use 'new'

    // Check if the user has already rated the movie
    const userRating = await Rating.find({ userId, "movies.movieId": movieId });

    if (userRating) {
      // If the user has already rated the movie, update the rating
      userRating.rating = rating;
      await userRating.save();
    } else {
      // If the user hasn't rated the movie, create a new rating
      await Rating.create({ userId,rating, movies: [{ movieId}] });
    }
  } catch (error) {
    throw error;
  }
};

export const measureRating=async(movieId)=>{

  const ratings = await Rating.find({ 'movies.movieId': movieId });
  const totalRatings = ratings.length;
  const avgRating = calculateAverageRating(ratings);
  return {totalRatings,
    avgRating}
}



