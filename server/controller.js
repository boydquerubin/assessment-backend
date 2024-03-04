//added quotes feature
let quotes = [
  { id: 1, quote: "The only way to do great work is to love what you do. - Steve Jobs" },
  { id: 2, quote: "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill" },
  { id: 3, quote: "Believe you can and you're halfway there. - Theodore Roosevelt" },
  { id: 4, quote: "In the middle of difficulty lies opportunity. - Albert Einstein" },
  { id: 5, quote: "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt" },
  { id: 6, quote: "You are never too old to set another goal or to dream a new dream. - C.S. Lewis" },
  { id: 7, quote: "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt" },
  { id: 8, quote: "Keep your face always toward the sunshine - and shadows will fall behind you. - Walt Whitman" },
  { id: 9, quote: "It does not matter how slowly you go as long as you do not stop. - Confucius" },
  { id: 10, quote: "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela" },
  { id: 11, quote: "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)" },
  { id: 12, quote: "You are capable of more than you know. Choose a goal that seems right for you and strive to be the best. Aim high. Behave honorably. - E.O. Wilson" },
  { id: 13, quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson" }
];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).json(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortune = [
      "An inch of time is an inch of gold.",
      "Believe in yourself and others will too.",
      "Do not just think, act!",
      "He who knows he has enough, is rich.",
      "Only the wisest turns over the same stone twice.",
    ];

    // choose random fortune
    let randomIndex = Math.floor(Math.random() * fortune.length);
    let randomFortune = fortune[randomIndex];

    res.status(200).json(randomFortune);
  },

  getDice: (req, res) => {
    const dice = ["1", "2", "3", "4", "5", "6"];

    // choose random dice
    let randomIndex = Math.floor(Math.random() * dice.length);
    let randomDice = dice[randomIndex];

    res.status(200).json(randomDice);
  },

  //added features
  getQuotes: (req, res) => {
    const allQuotes = [
      { id: 1, quote: "The only way to do great work is to love what you do. - Steve Jobs" },
      { id: 2, quote: "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill" },
      { id: 3, quote: "Believe you can and you're halfway there. - Theodore Roosevelt" },
      { id: 4, quote: "In the middle of difficulty lies opportunity. - Albert Einstein" },
      { id: 5, quote: "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt" },
      { id: 6, quote: "You are never too old to set another goal or to dream a new dream. - C.S. Lewis" },
      { id: 7, quote: "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt" },
      { id: 8, quote: "Keep your face always toward the sunshine - and shadows will fall behind you. - Walt Whitman" },
      { id: 9, quote: "It does not matter how slowly you go as long as you do not stop. - Confucius" },
      { id: 10, quote: "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela" },
      { id: 11, quote: "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)" },
      { id: 12, quote: "You are capable of more than you know. Choose a goal that seems right for you and strive to be the best. Aim high. Behave honorably. - E.O. Wilson" },
      { id: 13, quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson" }
    ];

    // choose random quote
    let randomIndex = Math.floor(Math.random() * allQuotes.length);
    let randomQuote = allQuotes[randomIndex];
    res.status(200).json(quotes);
  },

  createQuote: (req, res) => {
    const { quote } = req.body;
    const newQuote = { id: quotes.length + 1, quote };
    quotes.push(newQuote);
    res.status(201).json(newQuote);
  },

  deleteQuote: (req, res) => {
    const { id } = req.params;
    quotes = quotes.filter((quote) => quote.id !== parseInt(id));
    res.status(200).json({ message: "Quote deleted successfully" });
  },

  editQuote: (req, res) => {
    const { id } = req.params;
    const { quote } = req.body;
    quotes = quotes.map((item) => {
      if (item.id === parseInt(id)) {
        return { ...item, quote };
      }
      return item;
    });
    res.status(200).json({ message: "Quote updated successfully" });
  },

  getRandomQuote: (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    res.status(200).json(randomQuote);
  },

  searchQuotesByKeyword: (req, res) => {
    const { keyword } = req.params;
    const filteredQuotes = quotes.filter(
      (quote) =>
        quote.quote.toLowerCase().includes(keyword.toLowerCase())
    );
    res.status(200).json(filteredQuotes);
  },

  sortQuotesAlphabetically: (req, res) => {
    const sortedQuotes = [...quotes].sort((a, b) =>
      a.quote.localeCompare(b.quote)
    );
    res.status(200).json(sortedQuotes);
  }
};
