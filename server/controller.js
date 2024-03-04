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

    res.status(200).send(randomCompliment);
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

    res.status(200).send(randomFortune);
  },

  getDice: (req, res) => {
    const dice = ["1", "2", "3", "4", "5", "6"];

    // choose random dice
    let randomIndex = Math.floor(Math.random() * dice.length);
    let randomDice = dice[randomIndex];

    res.status(200).send(randomDice);
  },
};
