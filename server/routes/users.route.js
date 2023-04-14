import express from "express";
import { GetAllUser, GetUser, EditUser, DeleteUser } from "../controllers/users.controller.js";
import { verifyToken } from "../middlewares/jwt.js";


const router = express.Router();

router.get("/", verifyToken, GetAllUser);
router.get("/id", verifyToken, GetUser);
router.put("/", verifyToken, EditUser);
router.delete("/", verifyToken, DeleteUser);

export default router;