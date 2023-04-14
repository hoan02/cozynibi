import { cloudinary } from "../index.js"
import Category from "../models/category.model.js";
import createError from "../utils/createError.js";

export const getAllCategory = async (req, res, next) => {
  try {
    const allCategory = await Category.find();
    res.status(200).send(allCategory);
  } catch (err) {
    next(createError(500, "Find all Category failed, please try again!"));
  }
};

export const getCategory = async (req, res, next) => {
  const CategoryId = req.params.id;
  try {
    const Category = await Category.findById(CategoryId);
    res.status(200).send(Category);
  } catch (err) {
    next(createError(500, "Find Category failed, please try again!"));
  }
};

export const createCategory = async (req, res, next) => {
  try {
    const newCategory = new Category({
      ...req.body,
    });
    await newCategory.save();
    res.status(201).send("Category has been created.");
  } catch (err) {
    next(createError(500, "Create Category failed, please try again!"));
  }
}

export const editCategory = async (req, res, next) => {
  const newCategory = {
    title: req.body.title,
  }
  if(req.body.photo) {
    const photoUrl = await (await cloudinary.uploader.upload(req.body.photo)).secure_url;
    newCategory = { ...newCategory, avatar: photoUrl}
  }
  try {
    const updateCategory = await User.findByIdAndUpdate(userId, newCategory);
    res.status(200).send(updateCategory);
  } catch (err) {
    next(createError(500, "Update Category failed, please try again!"));
  }
};

export const deleteCategory = async (req, res, next) => {
  const CategoryId = req.body._id;
  try {
    await User.findByIdAndDelete(CategoryId);
    res.status(200).send("Deleted Category successfully!");
  } catch (err) {
    next(createError(500, "Delete Category failed, please try again!"));
  }
};