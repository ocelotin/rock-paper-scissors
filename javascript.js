const choices = ["rock", "paper", "scissors"];
const winners = [];

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
    return "Player";
  } else {
    return "Computer";
  }
}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round: ", round);
  console.log("Player Chose: ", playerChoice);
  console.log("Computer Chose: ", computerChoice);
  console.log(winner, "Won the Round");
  console.log("------------------------------");
}

const results = document.querySelector("div.results");
