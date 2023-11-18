function getComputerChoice(){
    const CHOICE = ["rock", "paper", "scissors"];
    return CHOICE[Math.floor(Math.random() * 3)]; 
}
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection;
    computerSelection = computerSelection;
    if (playerSelection === computerSelection){
        return ("Draw!");
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper" ){
            return (`You Win! ${playerSelection} beats ${computerSelection}`);
        } else {
            return (`You Lose! ${computerSelection} beats ${playerSelection}`);
        }
}