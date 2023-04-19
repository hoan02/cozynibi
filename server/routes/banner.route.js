import express from "express";
import { getAllBanner, getBanner, createBanner, updateBanner, deleteBanner } from "../controllers/banner.controller.js";
import { verifyToken } from "../middlewares/jwt.js";


const router = express.Router();

router.get("/all", getAllBanner);
router.get("/:id", getBanner);
// router.post("/create", verifyToken, createBanner);
// router.put("/update/:id", verifyToken, updateBanner);
// router.delete("/delete/:id", verifyToken, deleteBanner);
router.post("/create", createBanner);
router.put("/update/:id", updateBanner);
router.delete("/delete/:id", deleteBanner);

export default router;