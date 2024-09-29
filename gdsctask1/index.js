import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;
app.get("/" , (req , res)=>{res.end("Google Developer Groups (GDG) on Campus is a student-led initiative that brings together tech enthusiasts, developers, and aspiring professionals within university campuses. It serves as a platform for students to learn, collaborate, and share knowledge about Google technologies, software development, and industry best practices. Through workshops, hands-on coding sessions, hackathons, and talks by experts, GDG on Campus fosters a supportive environment for innovation and skill development, helping students stay at the forefront of tech trends while building a strong community network.")});
app.get("/mmdu", (req, res) => {
  res.end("Maharishi Markandeshwar (Deemed to be University) (MMDU) is a renowned private university located in Mullana, Ambala, Haryana, India. Known for its diverse academic offerings, the university provides undergraduate, postgraduate, and doctoral programs across various disciplines like engineering, medicine, management, law, and humanities. MMDU emphasizes holistic development, combining academic excellence with extracurricular activities and a vibrant campus life. With state-of-the-art infrastructure, experienced faculty, and strong industry linkages, MMDU strives to create a dynamic learning environment that nurtures innovation, research, and professional growth among students.");
});

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
