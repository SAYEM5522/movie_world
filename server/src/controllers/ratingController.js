import { rateMovie } from "../services/ratingService.js";

export const rateMovieController = async (req, res) => {
  try {
    const {movieId } = req.body;
    await rateMovie(movieId.userId, movieId.movieId, movieId.rating);

    res.status(200).json({ message: "Movie rated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


