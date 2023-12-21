import express from "express";
import { addToWatchlistController } from "../controllers/watchedController.js";

const watchedRouter = express.Router();

// Define routes
watchedRouter.post("/watchlist", addToWatchlistController);

export default watchedRouter;
