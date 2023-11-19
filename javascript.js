const choices = ["rock", "paper", "scissors"];
const winners = [];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = getComputerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection,computerSelection,winner,round);
}

function playerChoice() {
  let input = prompt("Type rock, paper or scissors");
  while (input == null) {
    input = prompt("Type rock, paper or scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt("Invalid input. Type rock, paper, scissors");
    while (input == null) {
      input = prompt("Type rock, paper or scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(i);
  }
  logWins();
}

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

function logRound(playerChoice,computerChoice,winner,round){
    console.log("Round: ", round);
    console.log("Player Chose: ", playerChoice);
    console.log("Computer Chose: ", computerChoice);
    console.log(winner, "Won the Round");
    console.log("------------------------------");
}