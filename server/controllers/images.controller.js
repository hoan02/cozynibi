import { cloudinary } from "../index.js";
import Image from "../models/images.model.js";
import createError from "../utils/createError.js";

export const createImage = async (req, res, next) => {
  const { image, name, folder } = req.body;
  try {
    const result = await cloudinary.uploader.upload(image, {
      folder,
      // width: 300,
      // height: 300,
      // crop: "scale"
    });
    const newImg = await Image.create({
      name,
      public_id: result.public_id,
      url: result.secure_url,
    });
    res.status(201).json(newImg);
  } catch (error) {
    next(createError(500, "Create image failed!"));
  }
};

export const updateImage = async (req, res, next) => {
  const { image, name, folder } = req.body;
  try {
    const result = await cloudinary.uploader.upload(image, {
      folder,
      // width: 300,
      // height: 300,
      // crop: "scale"
    });
    const newImg = await Image.findByIdAndUpdate(req.params.id, {
      name,
      public_id: result.public_id,
      url: result.secure_url,
    });
    res.status(201).json(newImg);
  } catch (error) {
    next(createError(500, "Create image failed!"));
  }
};
