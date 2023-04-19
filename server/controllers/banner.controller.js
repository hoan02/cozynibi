import { cloudinary } from "../index.js";
import Banner from "../models/banner.model.js";
import Image from "../models/image.model.js";
import createError from "../utils/createError.js";

export const getAllBanner = async (req, res, next) => {
  try {
    const allBanner = await Banner.find().populate("image");
    res.status(200).send(allBanner);
  } catch (err) {
    next(createError(500, "Find all banner failed, please try again!"));
  }
};

export const getBanner = async (req, res, next) => {
  const bannerId = req.params.id;
  try {
    const banner = await Banner.findById(bannerId).populate("image");
    res.status(200).send(banner);
  } catch (err) {
    next(createError(500, "Find banner failed, please try again!"));
  }
};

export const createBanner = async (req, res, next) => {
  const { title, image } = req.body;
  let newBanner;
  try {
    const banner = await Banner.findOne({ title });
    if (banner) {
      newBanner = await banner.updateOne({
        $push: {
          image,
        },
      });
    } else {
      newBanner = Banner.create({
        title,
        image,
      });
    }
    res.status(201).json({
      success: true,
      message: "Banner created successfully!",
      newBanner,
    });
  } catch (err) {
    next(createError(500, "Create banner failed, please try again!"));
  }
};

export const updateBanner = async (req, res, next) => {
  const { title, slug, image } = req.body;
  const bannerId = req.params._id;

  try {
    const currentBanner = await Banner.findById(bannerId);

    const data = {
      title,
      slug,
    };

    if (image !== "") {
      const imgId = currentBanner.image.public_id;
      if (imgId) {
        await cloudinary.uploader.destroy(imgId);
      }

      const newImg = await cloudinary.uploader.upload(image, {
        folder: "banners",
        // width: 300,
        // height: 300,
        // crop: "scale"
      });

      data.image = {
        public_id: newImg.public_id,
        url: newImg.secure_url,
      };
    }

    const bannerUpdate = await Banner.findByIdAndUpdate(bannerId, data, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Banner updated successfully!",
      bannerUpdate,
    });
  } catch (err) {
    next(createError(500, "Update banner failed, please try again!"));
  }
};

export const deleteBanner = async (req, res, next) => {
  const bannerId = req.params.id;
  try {
    const banner = await Banner.findById(bannerId);
    await Image.findByIdAndUpdate(banner.image, {
      name: "",
      public_id: "",
      url: "",
    });
    res.status(200).send("Deleted banner and its image successfully!");
  } catch (err) {
    next(createError(500, "Delete banner failed, please try again!"));
  }
};
