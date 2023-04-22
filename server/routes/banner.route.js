import express from "express";
import {
  getAllBanner,
  createBanner,
  updateBanner,
  deleteBanner,
} from "../controllers/banner.controller.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = express.Router();

router.get("/all", getAllBanner);
// router.post("/create", verifyToken, createBanner);
// router.put("/update/:id", verifyToken, updateBanner);
// router.delete("/delete/:id", verifyToken, deleteBanner);
router.post("/create/:id", createBanner);
router.put("/update", updateBanner);
router.delete("/delete/:id", deleteBanner);

export default router;
