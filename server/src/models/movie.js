import mongoose from "mongoose";
import { castSchema } from "./cast.js";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  userId:{
    type:String
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
  },
  cast: {
    type: [castSchema],
    validate: {
      validator: function (value) {
        // Ensure that the cast array is not empty
        return value.length > 0;
      },
      message: 'Cast array must contain at least one member.',
    },
  },
  photos: {
    type: Number,
    default: 0,

  },
  episodes: {
    type: Number,
    default: 0,
  },
  videos: {
    type: Number,
    default: 0,
  },
  trailerUrl: {
    type: String,
    trim: true,
  },
  releaseDate: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        // Ensure that releaseDate is a valid date
        return !isNaN(Date.parse(value));
      },
      message: 'Invalid release date.',
    },
  },
});

export const Movie = mongoose.model('Movie', movieSchema);