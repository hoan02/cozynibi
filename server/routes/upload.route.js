import express from "express";
import { uploadImage } from "../controllers/upload.controller.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = express.Router();
// router.get("/:id", verifyToken, getAccount);
router.post("/", uploadImage);

export default router;
