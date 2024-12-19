import express from "express";
const router = express.Router();

// GET route for /api/v1/contact
router.get("/api/v1/contact", (req, res) => {
    res.send("Contact Page");  // Sends "Contact Page" as the response
});

// POST route for /api/v1/contact
router.post("/api/v1/contact", (req, res) => {
    res.json({ message: 'Data received', phone: '9996950221' });
});

export default router;
