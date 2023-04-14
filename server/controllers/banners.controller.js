import { cloudinary } from "../index.js"
import Banner from "../models/banners.model.js";
import createError from "../utils/createError.js";

export const getAllBanner = async (req, res, next) => {
  try {
    const allBanner = await Banner.find();
    res.status(200).send(allBanner);
  } catch (err) {
    next(createError(500, "Find all banner failed, please try again!"));
  }
};

export const getBanner = async (req, res, next) => {
  const bannerId = req.params.id;
  try {
    const banner = await Banner.findById(bannerId);
    res.status(200).send(banner);
  } catch (err) {
    next(createError(500, "Find banner failed, please try again!"));
  }
};

export const createBanner = async (req, res, next) => {
  try {
    const newBanner = new Banner({
      ...req.body,
    });
    await newBanner.save();
    res.status(201).send("Banner has been created.");
  } catch (err) {
    next(createError(500, "Create banner failed, please try again!"));
  }
}

export const editBanner = async (req, res, next) => {
  const newBanner = {
    title: req.body.title,
  }
  if(req.body.photo) {
    const photoUrl = await (await cloudinary.uploader.upload(req.body.photo)).secure_url;
    newBanner = { ...newBanner, avatar: photoUrl}
  }
  try {
    const updateBanner = await User.findByIdAndUpdate(userId, newBanner);
    res.status(200).send(updateBanner);
  } catch (err) {
    next(createError(500, "Update banner failed, please try again!"));
  }
};

export const deleteBanner = async (req, res, next) => {
  const bannerId = req.body._id;
  try {
    await User.findByIdAndDelete(bannerId);
    res.status(200).send("Deleted banner successfully!");
  } catch (err) {
    next(createError(500, "Delete banner failed, please try again!"));
  }
};