let rateNum;

const cards = document.querySelectorAll(".card");
const form = document.querySelector("form");
const ratingNum = document.querySelectorAll("form fieldset input");

ratingNum.forEach((n) => {
  n.addEventListener("change", (e) => {
    rateNum = e.target.value;
  });
});

form.onsubmit = (e) => {
  e.preventDefault();

  // check if the user selected a number
  if (rateNum) {
    cards.forEach((card) => {
      if (card.classList.contains("thanks")) {
        card.style.display = "block";
        const rateDiv = document.querySelector(".card .rate");
        rateDiv.textContent = `You selected ${rateNum} out of 5`;
      } else {
        card.style.display = "none";
      }
    });
  }
};
