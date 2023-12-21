import express from "express";
import { createBannerController, getBannersController } from "../controllers/bannerController.js";

const BannerRouter = express.Router();

// Define routes
BannerRouter.post("/banners", createBannerController);
BannerRouter.get("/banners", getBannersController);

export default BannerRouter;
