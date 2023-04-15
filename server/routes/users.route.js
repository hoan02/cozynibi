import express from "express";
import { getAllUser, getUser, updateUser, deleteUser } from "../controllers/users.controller.js";
import { verifyToken } from "../middlewares/jwt.js";


const router = express.Router();

router.get("/all", verifyToken, getAllUser);
router.get("/:id", verifyToken, getUser);
router.put("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);

export default router;