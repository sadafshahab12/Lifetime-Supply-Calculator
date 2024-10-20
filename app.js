const userSnacks = document.querySelector(".user-snacks");
const currAge = document.querySelector(".curr-age");
const maxAge = document.querySelector(".max-age");
const amountPerDay = document.querySelector(".amount");
const snacksImage = document.querySelector(".snacks-image");
const totalSnacksText = document.querySelector(".total-snacks");
const snacksDiv = document.querySelector(".snacks");

function calculateSnacks() {
  const snacksList = {
    lays: "./images/lays.png",
    cheetos: "./images/cheetos.png",
    chillz: "./images/chillz.webp",
    fryo: "./images/fryo.png",
    junoon: "./images/junoon.webp",
    kurleez: "./images/kurleez.png",
    matarpulao: "./images/Matar-Pulao.webp",
    mazay: "./images/mazay.jpg",
    rollsballs: "./images/Roll-Balls.webp",
  };

  let snacks = userSnacks.value.toLowerCase();
  let years_left = maxAge.value - currAge.value;

  if (years_left < 0) {
    totalSnacksText.innerText = "Maximum age must be greater than current age.";
    snacksDiv.style.display = "none";
    return;
  }

  let totalSnacksNeeded = years_left * 365 * amountPerDay.value;

  if (snacksList[snacks]) {
    snacksImage.src = snacksList[snacks];
    snacksImage.alt = snacks;
    totalSnacksText.innerHTML = `<strong>${snacks}</strong>: You will need ${totalSnacksNeeded} to last you until the ripe old age of ${maxAge.value}`;
    snacksDiv.style.display = "block";
  } else {
    snacksImage.alt = "Snack not found";
    totalSnacksText.innerText = "Snack not found in the list.";
    snacksDiv.style.display = "none";
  }
}
