import { cloudinary } from "../index.js";
import Image from "../models/image.model.js";
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
    next(createError(500, "Tạo ảnh mới thất bại!"));
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
    next(createError(500, "Cập nhật ảnh thất bại!"));
  }
};

export const deleteImage = async (req, res, next) => {
  const { idImage } = req.params;
  try {
    await Image.findByIdAndDelete(idImage);
    res.status(201).json({ message: "Xóa hình ảnh thành công!" });
  } catch (error) {
    next(createError(500, "Xóa hình ảnh thất bại!"));
  }
};
