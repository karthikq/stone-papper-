/** @format */
let userSCore = 0;
let computerScore = 0;
let images = ["images/image1.png", "images/image2.png", "images/image3.png"];
let length = images.length;
let button = document.querySelector(".btn");
let right = document.querySelector(".right");
let right1 = document.querySelector(".right1");
let right2 = document.querySelector(".right2");

function getcomputerChoice() {
  var randomNumber2 = Math.floor(Math.random() * 3);
  var choices = ["S", "R", "P"];
  var randomimage2 = "L" + randomNumber2 + ".png";
  var randomimagesrc2 = "images/" + randomimage2;
  var image1 = document.querySelector(".profile2");
  image1.setAttribute("src", randomimagesrc2);

  return choices[randomNumber2];
}

function game(userChoice) {
  const computerchoice = getcomputerChoice();
  switch (userChoice + computerchoice) {
    case "RS":
    case "PR":
    case "SP":
      Win();
      break;
    case "RP":
    case "PS":
    case "SR":
      lose();
      break;
    case "RR":
    case "PP":
    case "SS":
      Draw();
      break;
    default:
      break;
  }
}
function Win() {
  userSCore++;
  document.querySelector(".score1").innerHTML = userSCore;
  document.querySelector("h1").innerHTML = "You win 🔥";
}

function lose() {
  computerScore++;
  document.querySelector(".score2").innerHTML = computerScore;
  document.querySelector("h1").innerHTML = "Computer Wins 😐";
}
function Draw() {
  document.querySelector("h1").innerHTML = "Thats a Draw 🥺";
}

document.querySelector(".profile").classList.add("animate");
document.querySelector(".profile2").classList.add("animate2");

right.addEventListener("click", function (e) {
  document.querySelector(".profile").classList.remove("animate");
  document.querySelector(".profile2").classList.remove("animate2");
  document.querySelector(".profile").setAttribute("src", "images/R1.png");
  void right1.offsetWidth;
  document.querySelector(".profile").classList.add("animate");
  document.querySelector(".profile2").classList.add("animate2");
  game("S");
});
right1.addEventListener("click", function (e) {
  document.querySelector(".profile").classList.remove("animate");
  document.querySelector(".profile").setAttribute("src", "images/R2.png");
  document.querySelector(".profile2").classList.remove("animate2");
  void right1.offsetWidth;
  document.querySelector(".profile").classList.add("animate");
  document.querySelector(".profile2").classList.add("animate2");
  game("R");
});
right2.addEventListener("click", function (e) {
  document.querySelector(".profile").classList.remove("animate");
  document.querySelector(".profile2").classList.remove("animate2");
  document.querySelector(".profile").setAttribute("src", "images/R3.png");
  void right1.offsetWidth;
  document.querySelector(".profile").classList.add("animate");
  document.querySelector(".profile2").classList.add("animate2");
  game("P");
});
