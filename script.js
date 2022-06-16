let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result p");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  let randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}
function convert(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convert(user)} beats ${convert(
    computer
  )} | You Win! 🔥`;
  computerScore = computerScore;
}
function lose(user, computer) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convert(computer)} beats ${convert(
    user
  )} | You Lose! 👎`;

  userScore = userScore;
}
function draw(user, computer) {
  result_p.innerHTML = `It's a draw 🏳`;
}
function game(userChoice) {
  let computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}
game();
function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
}

main();
