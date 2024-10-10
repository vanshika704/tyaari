import express from "express"; // express ko import kiyab 
import { AhhaTamatar } from "../controllers/user.js";  // Ensure the path is correct

const router = express.Router(); // router use kiya express ka


router.route("/say-hello").get(AhhaTamatar); // router.route route btara h ,orr .get uspe jaake function  use krna

export default router;
