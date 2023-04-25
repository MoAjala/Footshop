import express from "express";
import { loginUser, registerUser,getUserProfile } from "../controllers/authUser.js";
import authorize from "../middleware/auth.js"
const router = express.Router();
//registerUser
router.post("/register", registerUser);
//loginUser
router.post("/login", loginUser);
//get user profile
router.get("/profile/:id",authorize,getUserProfile);
export default router
