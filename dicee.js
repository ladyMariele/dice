
var firstImage = document.querySelector(".img1");

var firstDice = Math.floor(Math.random() * 6) + 1;

firstImage.setAttribute("src", "images/dice" + firstDice + ".png");


var secondImage = document.querySelector(".img2");

var secondDice = Math.floor(Math.random() * 6) + 1;

secondImage.setAttribute("src", "images/dice" + secondDice + ".png");

if (firstDice > secondDice) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (secondDice > firstDice) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}
