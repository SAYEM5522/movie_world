import mongoose from "mongoose";

const BannerSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
    trim: true,
  },
  backgroundUrl:{
    type:String,
    required: true,

  },
 
});

export const Banner = mongoose.model('Banner', BannerSchema);