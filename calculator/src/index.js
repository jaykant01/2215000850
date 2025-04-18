require("dotenv").config();
const express = require("express");
const app = express();
const { postAverage } = require("./controllers/averageController");

app.use(express.json());
app.post("/average", postAverage);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
