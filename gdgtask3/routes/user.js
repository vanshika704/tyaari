import express from "express";
import { AhhaTamatar } from "../controllers/user.js";  // Ensure the path is correct

const router = express.Router();


router.route("/say-hello").get(AhhaTamatar);

export default router;
