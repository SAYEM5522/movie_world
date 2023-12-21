import mongoose from "mongoose";

 const watchlistSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  movies: [{
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie',
    },
  }],
});

export const Watch = mongoose.model('Watch', watchlistSchema);
