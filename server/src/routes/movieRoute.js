
import express from "express";
import {createMovieController, getAddedMoviesController, getMoviesController, getRatingMoviesController, getUpcomingMoviesController, getWatchedMoviesController} from "../controllers/movieController.js"
const router = express.Router();

// Define routes
router.post("/createMovies", createMovieController);
router.get("/all-upcoming-movies", getUpcomingMoviesController);
router.get("/all-watched-movies/:userId", getWatchedMoviesController);
router.get("/all-rating-movies/:userId", getRatingMoviesController);
router.get("/all-added-movies/:userId", getAddedMoviesController);
router.get("/movies/:movieId", getMoviesController);




export default router;
