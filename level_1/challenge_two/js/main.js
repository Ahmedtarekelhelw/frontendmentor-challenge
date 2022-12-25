const ratingNum = document.querySelectorAll(".rating span");
let rateNum;

ratingNum.forEach((span) =>
  span.addEventListener("click", (e) => {
    //remove selected class from all span
    ratingNum.forEach((n) => n.classList.remove("selected"));

    //add selected class to clicked span
    e.target.classList.toggle("selected");

    //set the rate the selected from span inside rateNum Variable
    rateNum = e.target.textContent;
  })
);

const cards = document.querySelectorAll(".card");
const btn = document.querySelector("button");
btn.onclick = () => {
  //check if the user selected a number
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
