const buttons = document.querySelectorAll('button');
let playerSelection = null;
let computerSelection = null;
let round = 1;
let pScore = 0;
let cScore = 0;
let temp = null;



//player input prompt function
function playerInput(str) {
    val = str;
    return val;
}

//simulates the choice of the computer when called
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

//takes the player and computer choices from the event listener and simulates 1 round
function playRound(playerSelection, computerSelection) {
    let result = "";
    let x = 0;
    if (playerSelection == "rock" && computerSelection == "paper") {
        //"Paper Beats Rock You Lose!";
        x = 0;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        //"Rock Beats Scissors You Win!";
        x = 1;
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        //"Its A Tie!";
        x = 2;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        //"Paper Beats Rock You Win!";
        x = 1;
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        //"Its A Tie!";
        x = 2
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        //"Scissors Beats Paper You Lose!";
        x = 0
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        //"Rock Beats Scissors You Lose!";
        x = 0
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        //"Scissors Beats Paper You Win!";
        x = 1;
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        //"Its A Tie!";
        x = 2;
    }
    console.log(x)
    return x;
}


//event listener that checks player selection and calls functions to get computer selection then simulates a round returning the round winner, total score, and overall winner.
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        computerSelection = computerPlay();
        playerSelection = playerInput(button.id);
        console.log(playerSelection);
        temp = playRound(playerSelection, computerSelection);
        round++;

        if (temp == 0 && round <= 6) {
            cScore += 1;
            prompts.textContent = `You Lost Round ${round - 1}!`;
        } else if (temp == 1 && round <= 6) {
            pScore += 1;
            prompts.textContent = `You Won Round ${round - 1}!`;
        } else if (temp == 2 && round <= 6) {
            pScore += 0;
            cScore += 0;
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