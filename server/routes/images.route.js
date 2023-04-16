import express from "express";
import { createImage, updateImage } from "../controllers/images.controller.js";

const router = express.Router();

router.post("/create", createImage);
router.put("/update/:id", updateImage);

export default router;
