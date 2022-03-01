//alert("Lets Play 5 Rounds of Rock Paper Scissors!")

let playerSelection = null; //playerSelection starts initialized in order to not double prompt at the start
const computerSelection = computerPlay();
const buttons = document.querySelectorAll('button');
const results = document.getElementsByClassName('results')



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
    } /*else {
        //keeps users from inputting invalid values throughout the game
        abort();
    }*/

    return x;
}

//simulates 5 rounds of rock paper scissors and prompts the score and winner
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let x = document.getElementById(playerPoints);
    let y = document.getElementById(computerPoints);


    let result = 0;
    //have to use new variables in these parameters to call the functions for new values otherwise the winner of the first round will every round due to the global const variables not changing (i think)//
    result = playRound(playerSelection, computerSelection);

    if (result == 0) {   //player loses
        computerScore += 1;
        y.textContent += 1;
        alert("Computer Wins!")

    } else if (result == 1) {    //player wins  
        playerScore += 1;
        x.textContent += 1;
        alert("Player Wins")

    } else if (result == 2) {    //tie condition
        alert("Its A Tie!")
    }


    if (playerScore < computerScore) {
        computerScore++;
    } else if (playerScore === computerScore) {
        computerScore++;
        playerScore++;
    } else {
        playerScore++;
    }

    return playerScore, computerScore;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = playerInput(button.id);
        game();
    });
});



// textContent dom element not being used properly lines 93 and 98. figure out 2/29/22