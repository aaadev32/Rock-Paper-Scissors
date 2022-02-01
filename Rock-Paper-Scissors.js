const input = window.prompt("Rock, Paper, or Scissors?");
const playerSelection = input.toLowerCase();
const computerSelection = computerPlay();

//simulates the choice of the computer in game
function computerPlay() {
    const result = Math.floor(Math.random() * 3);
    let selection = "";
    if (result == 0) {
        selection = "rock";
    } else if (result == 1) {
        selection = "paper";
    } else if (result == 2) {
        selection = "scissors";
    }

    console.log(result);
    console.log(selection);
    return selection;

}
// a highly unoptimized round simulation that contains all win and lose conditions
function playRound(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection == "rock" && computerSelection == "paper") {
        result = "Paper Beats Rock You Lose!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        result = "Rock Beats Scissors You Win!";
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        result = "Its A Tie!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        result = "Paper Beats Rock You Win!";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        result = "Its A Tie!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        result = "Scissors Beats Paper You Lose!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        result = "Rock Beats Scissors You Lose!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        result = "Scissors Beats Paper You Win!";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        result = "Its A Tie!";
    }

    return result;
}


//this will keep te user from using inputs other than those relevant to the game
if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
    alert(playRound(playerSelection, computerSelection));
} else {
    alert("please refresh and use one of the prompted inputs.");
}

function game(){
    for (i = 0;i < 5;i++){
    playRound(playerSelection, computerSelection)
    }

}