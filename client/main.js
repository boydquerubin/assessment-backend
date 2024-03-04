const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const diceBtn = document.getElementById("diceButton");

//added features
const quoteInput = document.getElementById("quoteInput");
const searchBtn = document.getElementById("searchBtn");
const quotesList = document.getElementById("quotesList");
const randomBtn = document.getElementById("randomBtn");
const sortBtn = document.getElementById("sortBtn");

const getCompliment = () => {
  axios
    .get("http://localhost:4000/api/compliment/")
    .then((res) => {
      const data = res.data;
      alert(data);
    })
    .catch((error) => {
      console.error("An error occured:", error);
    });
};

complimentBtn.addEventListener("click", getCompliment);

const getFortune = () => {
  axios
    .get("http://localhost:4000/api/fortune/")
    .then((res) => {
      const data = res.data;
      alert(data);
    })
    .catch((error) => {
      console.error("An error occured:", error);
    });
};

fortuneBtn.addEventListener("click", getFortune);

const getDice = () => {
  axios
    .get("http://localhost:4000/api/dice/")
    .then((res) => {
      const data = res.data;
      alert(data);
    })
    .catch((error) => {
      console.error("An error occured:", error);
    });
};

diceBtn.addEventListener("click", getDice);

//n
const getQuotesAndDisplay = () => {
  axios
    .get("http://localhost:4000/api/quotes")
    .then((response) => {
      const quotes = response.data;
      quotesList.innerHTML = "";
      quotes.forEach((quote) => {
        const listItem = document.createElement("li");
        listItem.textContent = quote.quote;
        quotesList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching quotes:", error);
    });
};

getQuotesAndDisplay();

searchBtn.addEventListener("click", () => {
  const keyword = quoteInput.value.trim();
  if (keyword) {
    axios
      .get(`http://localhost:4000/api/quotes/search/${keyword}`)
      .then((response) => {
        quotesList.innerHTML = "";
        response.data.forEach((quote) => {
          const listItem = document.createElement("li");
          listItem.textContent = quote.quote;
          quotesList.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error("Error searching quotes:", error);
      });
  }
});

randomBtn.addEventListener("click", () => {
  axios
    .get("http://localhost:4000/api/quotes/random")
    .then((response) => {
      alert("Random Quote: " + response.data.quote);
    })
    .catch((error) => {
      console.error("Error getting random quote:", error);
    });
});

sortBtn.addEventListener("click", () => {
  axios
    .get("http://localhost:4000/api/quotes/sort")
    .then((response) => {
      quotesList.innerHTML = "";
      response.data.forEach((quote) => {
        const listItem = document.createElement("li");
        listItem.textContent = quote.quote;
        quotesList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Error sorting quotes:", error);
    });
});