const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const diceBtn = document.getElementById("diceButton");

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
