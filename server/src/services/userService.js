
import { User } from "../models/user.js";

export const signup = async (email, password) => {
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists with this email.");
    }

    const newUser = new User({ email, password });
    return await newUser.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const signin = async (email, password) => {
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      throw new Error("Invalid credentials");
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
