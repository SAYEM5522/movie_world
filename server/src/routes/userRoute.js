// routes/userRoutes.js
import express from "express";
import { signinController, signupController } from "../controllers/userController.js";

const userRouter = express.Router();

// Define routes
userRouter.post("/signup", signupController);
userRouter.post("/signin", signinController);

export default userRouter;
