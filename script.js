// Functionalities task 01

const counter = document.getElementById("clickCount");
let totalClicks = 0;

document.getElementById("cards").addEventListener("click", function (e) {
  if (e.target.classList.contains("countLove")) {
    totalClicks++;
    counter.textContent = totalClicks;
  }
});

// Functionalities task 02

let myCoins = 100;
const myCoinElement = document.getElementById("coinCount");
const myHistoryList = document.getElementById("myHistoryList");
const clearButton = document.getElementById("MyClearHistory");

const allButtons = document.querySelectorAll(".callBtn");

for (const btn of allButtons) {
  btn.addEventListener("click", function () {
    const myCard = btn.closest(".card-body");
    const serviceName = myCard.querySelector(".card-title").innerText;
    const serviceNumber = myCard.querySelector("h2.text-3xl").innerText;

    if (myCoins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }
    alert(`Calling ${serviceName} ${serviceNumber}`);
    myCoins -= 20;
    myCoinElement.textContent = myCoins;

    const newElement = document.createElement("div");

    newElement.className =
      "bg-gray-100 rounded-lg p-2 flex justify-between items-center mt-3 ";

    newElement.innerHTML = `
       <div>
        <h3 class="font-semibold inter-font text-gray-800">${serviceName}</h3>
        <p class="text-sm text-gray-600">${serviceNumber}</p>
      </div>
      <span class="text-xs text-gray-500">${new Date().toLocaleTimeString()}</span>

`;

    myHistoryList.prepend(newElement);
  });
}

// Functionalities task 02

// clear section

clearButton.addEventListener("click", function () {
  myHistoryList.innerHTML = "";
});

// Challenges Part

const copyButtons = document.querySelectorAll(".copyButton");
const countCopy = document.getElementById("copyCount");
let copyCount = 0;

for (const button of copyButtons) {
  button.addEventListener("click", function () {
    const card = button.closest(".card-body");
    const numElement = card.querySelector("h2.text-3xl");
    const number = numElement.textContent.trim();
    navigator.clipboard
      .writeText(number)
      .then(() => {
        alert(`Copied Successfully: ${number}`);
        copyCount++;
        countCopy.textContent = copyCount;
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  });
}
