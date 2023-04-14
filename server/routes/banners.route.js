import express from "express";
import { getAllBanner, getBanner, createBanner, editBanner, deleteBanner } from "../controllers/banners.controller.js";
import { verifyToken } from "../middlewares/jwt.js";


const router = express.Router();

router.get("/", getAllBanner);
router.get("/:id", getBanner);
router.post("/", verifyToken, createBanner);
router.put("/:id", verifyToken, editBanner);
router.delete("/:id", verifyToken, deleteBanner);

export default router;