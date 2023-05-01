import express from "express";
import {
  getBanner,
  createBanner,
  updateBanner,
  deleteBanner,
} from "../controllers/banner.controller.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = express.Router();

router.get("/get", getBanner);
router.post("/create/:id", verifyToken, createBanner);
router.put("/update", verifyToken, updateBanner);
router.delete("/delete/:id", verifyToken, deleteBanner);

export default router;
