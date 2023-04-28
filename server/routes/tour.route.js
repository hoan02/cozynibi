import express from "express";
import {
  getTour,
  getAllTour,
  createTour,
  updateTour,
  deleteTour,
} from "../controllers/tour.controller.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = express.Router();

router.get("/:id", getTour);
router.get("/", getAllTour);
router.post("/create", createTour);
router.put("/update/:id", updateTour);
router.delete("/delete/:id", deleteTour);

export default router;
