import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

const PORT = 3000;

app.get("/movie", async (req, res) => {
    const movie = req.query.t;

    try {
        const response = await fetch(
            `https://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${movie}`
        );
        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});