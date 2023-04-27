import express from "express";
import {
  getRoom,
  getAllRoom,
  createRoom,
  updateRoom,
  deleteRoom,
} from "../controllers/room.controller.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = express.Router();

router.get("/:id", getRoom);
router.get("/", getAllRoom);
router.post("/create", createRoom);
router.put("/update/:id", updateRoom);
router.delete("/delete/:id", deleteRoom);

export default router;
