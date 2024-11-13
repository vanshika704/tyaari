import express from "express";
const router = express.Router();


router.get("/api/v1/users", (req, res) => { // router.get krkr yha route set kiya , req, res add krke 
    res.send("waah tamatar bde majedaar");
});

export default router;
