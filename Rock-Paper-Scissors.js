const input = window.prompt("Rock, Paper, or Scissors?");
const playerSelection = input.toLowerCase();
const computerSelection = computerPlay();

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

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("Paper Beats Rock!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("Rock Beats Scissors!");
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("Its A Tie!");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("Paper Beats Rock!");
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("Its A Tie!");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("Scissors Beats Paper!");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("Rock Beats Scissors!");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("Scissors Beats Paper!");
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("Its A Tie!");
    }
    //console.log(playRound(playerSelection, computerSelection)); maximum call stack exceeded
}



if (playerSelection == "rock" || playerSelection == "paper" || playerSelection !== "scissors") {
    playRound()
} else {
    alert("error please refresh and use one of the prompted inputs.");
}

//need to figure how to call the function to test if the code even works


