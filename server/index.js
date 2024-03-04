const express = require("express");
const cors = require("cors");
const { getCompliment, getFortune, getDice } = require("./controller");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/api/compliment/", getCompliment);
app.get("/api/fortune/", getFortune);
app.get("/api/dice/", getDice);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
