import { createBanner, getBanners } from "../services/bannerService.js";


export const createBannerController = async (req, res) => {
  try {
    const { imgUrl, backgroundUrl } = req.body;
    const newBanner = await createBanner(imgUrl, backgroundUrl);

    res.status(201).json(newBanner);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getBannersController = async (req, res) => {
  try {
    const banners = await getBanners();

    res.status(200).json(banners);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
