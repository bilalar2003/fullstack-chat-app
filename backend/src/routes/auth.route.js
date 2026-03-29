import express from "express"
import { login, logout, signup, updateProfile, checkAuth } from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js"

const router = express.Router()

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

router.put("/update-profile", protectRoute, updateProfile) // This is for user to be able to update their profile picture.
// protectRoute is our middleware here (It runs before updateProfile controller)

router.get("/check", protectRoute, checkAuth)

export default router