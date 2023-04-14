import express from "express";
import { getAllCategory, getCategory, createCategory, editCategory, deleteCategory } from "../controllers/category.controller.js";
import { verifyToken } from "../middlewares/jwt.js";


const router = express.Router();

router.get("/", getAllCategory);
router.get("/:id", getCategory);
router.post("/", verifyToken, createCategory);
router.put("/:id", verifyToken, editCategory);
router.delete("/:id", verifyToken, deleteCategory);

export default router;