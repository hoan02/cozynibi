import express from "express";
import {
  getFood,
  getAllFood,
  createFood,
  deleteFood,
} from "../controllers/food.controller.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = express.Router();

router.get("/:id", getFood);
router.get("/", getAllFood);
router.post("/create", createFood);
router.delete("/delete/:id", deleteFood);

export default router;
