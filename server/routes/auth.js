import express from "express";

const router = express.Router();
//moddlewares
import { requireSignin } from "../middlewares";
// controllers
import { register, login, logout, currentUser, sendTestEmail } from "../controllers/auth";

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/current-user", requireSignin, currentUser );
router.get("/send-email", sendTestEmail);

module.exports = router;
