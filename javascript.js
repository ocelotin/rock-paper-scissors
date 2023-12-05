const choices = ["rock", "paper", "scissors"];
const winners = [];
let scorePlayer = 0;
let scoreComputer = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner);
}

const choiceRock = document.querySelector(".rock");
choiceRock.addEventListener("click", () => {
  playRound("rock");
});

const choicePaper = document.querySelector(".paper");
choicePaper.addEventListener("click", () => {
  playRound("paper");
});

const choiceScissors = document.querySelector(".scissors");
choiceScissors.addEventListener("click", () => {
  playRound("scissors");
});

function checkWinner(choicePlayer, choiceComputer) {
  if (choicePlayer === choiceComputer) {
    return "Tie";
  } else if (
    (choicePlayer === "rock" && choiceComputer === "scissors") ||
    (choicePlayer === "paper" && choiceComputer === "rock") ||
    (choicePlayer === "scissors" && choiceComputer === "paper")
  ) {
    scorePlayer++;
    return "Player";
  } else {
    scoreComputer++;
    return "Computer";
  }
}
const results = document.querySelector("div.results");
const score = document.querySelector("div.score");
const gameWinner = document.querySelector("div.winner");

function logRound(playerChoice, computerChoice, winner) {
  results.textContent = `Player Chose: ${playerChoice}-----`;
  results.textContent += `Computer Chose: ${computerChoice}-----`;

  if (winner == "Tie") {
    results.textContent += `It's a Tie`;
  } else {
    results.textContent += `${winner} Won the Round`;
  }
  score.textContent = `Player Score: ${scorePlayer}-----`;
  score.textContent += `Computer Score ${scoreComputer}`;

  if (scorePlayer == 5) {
    gameWinner.innerHTML = "<h2> Player WINS </h2>";
  } else if (scoreComputer == 5) {
    gameWinner.innerHTML = "<h2> Computer WINS </h2>";
  }
}
