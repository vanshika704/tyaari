import express from "express";
const router = express.Router();


router.get("/api/v1/users", (req, res) => {
    res.send("waah tamatar bde majedaar");
});

export default router;
