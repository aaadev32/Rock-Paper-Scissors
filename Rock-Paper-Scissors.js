//alert("Lets Play 5 Rounds of Rock Paper Scissors!")

let playerSelection = null; //playerSelection starts initialized in order to not double prompt at the start
let computerSelection = null;
const buttons = document.querySelectorAll('button');
let playerTotal = document.getElementById(playerPoints);
let computerTotal = document.getElementById(computerPoints);
let roundTotal = document.getElementById(roundPoints);

let round = 1;
let pScore = 0;
let cScore = 0;
let temp = null;



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
    console.log(x)
    return x;
}

//simulates 5 rounds of rock paper scissors and prompts the score and winner
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let x = 0;
    let result = 0;

    result = playRound(playerSelection, computerSelection);

    if (result == 0) {
        x = 0;
    } else if (result == 1) {
        x = 1
    } else if (result == 2) {
        x = 2
    }

    return x;
}

//use this to play 5 rounds somehow.

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        computerSelection = computerPlay();
        playerSelection = playerInput(button.id);
        console.log(playerSelection);
        temp = game();
        round++;

        if (temp == 0 && round <= 6) {
            cScore += 1;
            prompts.textContent = `You Lost Round ${round - 1}!`;
        } else if (temp == 1 && round <= 6) {
            pScore += 1;
            prompts.textContent = `You Won Round ${round - 1}!`;
        } else if (temp == 2 && round <= 6) {
            pScore += 1;
            cScore += 1;
            prompts.textContent = `You Tied Round ${round - 1}!`;
        }
        
        if (round == 6 && pScore > cScore) {
            prompts.textContent = `You Win The Game!  ${pScore} : ${cScore}`;
            round = 1;
            pScore = 0;
            cScore = 0;
        } else if (round == 6 && cScore > pScore) {
            prompts.textContent = `You Lost The Game!  ${pScore} : ${cScore}`;
            round = 1;
            pScore = 0;
            cScore = 0;
        } else if (round == 6 && cScore == pScore) {
            prompts.textContent = `It's A Tied Game!  ${pScore} : ${cScore}`;
            round = 1;
            pScore = 0;
            cScore = 0;
        }

        
        roundPoints.textContent = `Round: ${round}`;
        playerPoints.textContent = `Player Score: ${pScore}`;
        computerPoints.textContent = `Computer Score: ${cScore}`;
    });
});




// textContent dom element not being used properly lines 93 and 98. figure out 2/29/22