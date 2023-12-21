import { addToWatchlist } from "../services/watchedService.js";

export const addToWatchlistController = async (req, res) => {
  try {
    const { userId, movieId } = req.body;
   const data= await addToWatchlist(userId, movieId);
   if(data){
    res.status(200).json({ message: "Movie added to watchlist successfully" });

   }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

