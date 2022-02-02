const input = playerInput();
const playerSelection = input.toLowerCase();
const computerSelection = computerPlay();

//player input prompt function
function playerInput() {
    result = window.prompt("Rock, Paper, or Scissors?");
    return result;
}

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
    let x = 0;
    if (playerSelection == "rock" && computerSelection == "paper") {
        //result = "Paper Beats Rock You Lose!";
        x = 0;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        //result = "Rock Beats Scissors You Win!";
        x = 1;
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        //result = "Its A Tie!";
        x = 2;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        //result = "Paper Beats Rock You Win!";
        x = 1;
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        //result = "Its A Tie!";
        x = 2
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        //result = "Scissors Beats Paper You Lose!";
        x = 0
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        //result = "Rock Beats Scissors You Lose!";
        x = 0
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        //result = "Scissors Beats Paper You Win!";
        x = 1;
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        //result = "Its A Tie!";
        x = 2;
    }

    return x;
}

//simulates 5 rounds of rock paper scissors and prompts the score and winner
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerInput();
        let result = playRound(playerSelection, computerSelection);
        //player loses
        if (result = 0) {
            computerScore += 1;
            //player wins
        } else if (result = 1) {
            playerScore += 1;
            //tie condition
        } else if (result = 2) {
            playerScore += 1;
            computerScore += 1;
        }

    }
    //shows the winner
    if (playerScore < computerScore) {
        winner = "Computer Wins!"
    } else if (playerScore === computerScore) {
        winner = "Its A Tie!"
    } else {
        winner = "You Win"
    }

    score = `player score is ${playerScore} points, versus computers score of ${computerScore} points. ${winner}`

    return score;
    //print the winner and prefereably the total score of player AND computer
}

//this will keep the user from using inputs other than those relevant to the game
if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
    let score = game();
    alert(score);
} else {
    alert("please refresh and use one of the prompted inputs.");
}

