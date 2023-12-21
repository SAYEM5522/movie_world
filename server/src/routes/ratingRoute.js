// routes/ratingRoutes.js
import express from "express";
import { rateMovieController } from "../controllers/ratingController.js";


const ratingRouter = express.Router();

// Define routes
ratingRouter.post("/rate", rateMovieController);

export default ratingRouter;
