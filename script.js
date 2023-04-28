function displayRunningScore(score) {
    const scoreboard = document.querySelector('#scoreboard');
    scoreboard.textContent = score;
}

function displayRoundResult(roundResult) {
    const roundResultContainer = document.querySelector('#round-result');
    roundResultContainer.textContent = roundResult;
}

function displayWin(winner) {
    const winnerContainer = document.querySelector('#winner-announcement');
    winnerContainer.textContent = winner;
}

function getComputerChoice() {
    let choices = [
        "rock",
        "paper",
        "scissors"
    ];

    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}



function keepScore(playerPoint, computerPoint) {
    userScore = userScore + playerPoint;
    computerScore = computerScore + computerPoint;
    return (userScore, computerScore);

}

function playRound(e) {

    if (userScore == 5 || computerScore == 5) {
        return;
    }

    computerSelection = getComputerChoice();
    playerSelection = e.target.id;

    if (playerSelection === computerSelection) {
        displayRoundResult(`Tie! You chose ${playerSelection} and the Computer chose ${computerSelection}.`);
        keepScore(0,0);
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        displayRoundResult(`You lost. You chose ${playerSelection} and the Computer chose ${computerSelection}. ${computerSelection} beats ${playerSelection}.`);
        keepScore(0,1);
    } else {
        displayRoundResult(`You won! You chose ${playerSelection} and the Computer chose ${computerSelection}. ${playerSelection} beats ${computerSelection}.`);
        keepScore(1,0);
    }

    displayRunningScore(`Your score is ${userScore}. Computer's score is ${computerScore}`);

    if (userScore == 5 || computerScore == 5) {
        if (userScore < computerScore) {
            displayWin("Computer won!");
        } else {
            displayWin("You won!");
        }
    } 

}

let userScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', playRound)
const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', playRound)
const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', playRound)