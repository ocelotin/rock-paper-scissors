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
choiceRock.addEventListener("click", () =>{
  playRound("rock");
});

const choicePaper = document.querySelector(".paper");
choicePaper.addEventListener("click", () => {
  playRound("paper");
});

const choiceScissors = document.querySelector(".scissors");
choiceScissors.addEventListener("click", () =>{
  playRound("scissors");
});

// function game() {
//   for (let i = 0; i < 5; i++) {
//     playRound(i);
//   }
//   logWins();
// }

function validateInput(choice) {
  if (choices.includes(choice)) {
    return true;
  } else {
    return false;
  }
}

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

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results:");
  console.log("Player Wins: ", playerWins);
  console.log("Computer Wins: ", computerWins);
  console.log("Ties: ", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round: ", round);
  console.log("Player Chose: ", playerChoice);
  console.log("Computer Chose: ", computerChoice);
  console.log(winner, "Won the Round");
  console.log("------------------------------");
}
