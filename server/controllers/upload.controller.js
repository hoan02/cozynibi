import CreateError from "../utils/createError.js";
import { cloudinary } from "../index.js";
import createError from "../utils/createError.js";

export const uploadImage = async (req, res, next) => {
  try {
    const { file, slug } = req.body;
    const uploadedFile = await cloudinary.uploader.upload(file, {
      folder: slug,
    });
    const newImg = {
      publicId: uploadedFile.public_id,
      url: uploadedFile.secure_url,
    };
    res.json({
      success: true,
      message: "Tải ảnh lên Cloudinary thành công!",
      image: newImg,
    });
  } catch (error) {
    next(createError(500, "Tải ảnh lên Cloudinary thất bại!"));
  }
};
