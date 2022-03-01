//alert("Lets Play 5 Rounds of Rock Paper Scissors!")

let playerSelection = null; //playerSelection starts initialized in order to not double prompt at the start
let computerSelection = null;
const buttons = document.querySelectorAll('button');
//const results = document.querySelectorAll('h2')
const playerTotal = document.getElementById(playerPoints);
const computerTotal = document.getElementById(computerPoints);
const roundTotal = document.getElementById(roundPoints);
let round = 0;

//player input prompt function
function playerInput(str) {

    val = str;
    return val;
}

//for when things get hairy

function abort() {
    alert("please refresh and use a valid input");
    Process.exit(1)
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

    //console.log(result);
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
    } /*else {
        //keeps users from inputting invalid values throughout the game
        abort();
    }*/
    console.log(x);
    return x;
}

//simulates 5 rounds of rock paper scissors and prompts the score and winner
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let x = document.getElementById(playerPoints);
    let y = document.getElementById(computerPoints);
    let round = 0;
    let result = 0;

    result = playRound(playerSelection, computerSelection);


    if (result == 0) {
        computerScore++;
    } else if (result == 1) {
        playerScore++;
    } else if (result == 2) {
        playerScore++;
        computerScore++;
    }
    round++;
    console.log(playerScore, computerScore, round);

    playerPoints.textContent = `Player Score ${playerScore}`;
    computerPoints.textContent = `Computer Score ${computerScore}`;
    roundPoints.textContent = `Round ${round}`;
    return playerScore, computerScore, round;
}

//use this to play 5 rounds somehow.

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        computerSelection = computerPlay();
        playerSelection = playerInput(button.id);
        game();
        console.log(playerSelection);
        round++;
    });
});

if (roundPoints < 5) {

}


// textContent dom element not being used properly lines 93 and 98. figure out 2/29/22