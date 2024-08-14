// express is used to make servers and APIs
import express from "express";

const app = express();

app.listen(3000, () => {
    console.log("Server is working");
});
