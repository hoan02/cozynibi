import { cloudinary } from "../index.js";
import Banner from "../models/banner.model.js";
import Image from "../models/image.model.js";
import createError from "../utils/createError.js";

export const getAllBanner = async (req, res, next) => {
  const slug = req.query.slug;
  try {
    const allBanner = await Banner.findOne({ slug: slug }).populate("image");
    res.status(200).send(allBanner);
  } catch (err) {
    next(createError(500, "Tìm kiếm tất cả banner không thành công!"));
  }
};

export const getBanner = async (req, res, next) => {
  const bannerId = req.params.id;
  try {
    const banner = await Banner.findById(bannerId).populate("image");
    res.status(200).send(banner);
  } catch (err) {
    next(createError(500, "Tìm kiếm banner không thành công!"));
  }
};

export const createBanner = async (req, res, next) => {
  const bannerId = req.params.id;
  const image = req.body;
  console.log(image);
  try {
    const newBanner = await Banner.findByIdAndUpdate(bannerId, {
      $addToSet: { image: [image] },
    });

    res.status(201).json({
      success: true,
      message: "Banner created successfully!",
      newBanner,
    });
    console.log(newBanner);
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
