import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  movies: [{
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie',
    },
  }],
});

export const Rating = mongoose.model('Rating', ratingSchema);
