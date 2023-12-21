import mongoose from "mongoose";

export const castSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
});
