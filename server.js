const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = "579b464db66ec23bdd000001c778940ddf24461940fac0e167973bf7";

app.get("/api/prices", async (req, res) => {
    try {
        const response = await axios.get(
            "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070",
            {
                params: {
                    "api-key": API_KEY,
                    format: "json"
                }
            }
        );

        res.json(response.data);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

app.listen(5000, () => {
    console.log("Backend running on http://localhost:5000");
});