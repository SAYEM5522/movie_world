import { Banner } from "../models/banner.js";

export const createBanner = async (imgUrl, backgroundUrl) => {
  try {
    const newBanner = new Banner({ imgUrl, backgroundUrl });
    return await newBanner.save();
  } catch (error) {
    throw error;
  }
};

export const getBanners = async () => {
  try {
    return await Banner.find();
  } catch (error) {
    throw error;
  }
};
