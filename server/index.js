const express = require("express");
const cors = require("cors");
const { getCompliment, getFortune, getDice, getQuotes, createQuote, deleteQuote, updateQuote, getRandomQuote, searchQuotesByKeyword, sortQuotesAlphabetically } = require("./controller");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/api/compliment/", getCompliment);
app.get("/api/fortune/", getFortune);
app.get("/api/dice/", getDice);

//added features
app.get("/api/quotes/", getQuotes);
app.post("/api/quotes/", createQuote);
app.delete("/api/quotes/:id/", deleteQuote);
app.put("/api/quotes/:id", updateQuote);
app.get("/api/quotes/random/", getRandomQuote);
app.get("/api/quotes/search/:keyword/", searchQuotesByKeyword);
app.get("/api/quotes/sort/", sortQuotesAlphabetically);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
