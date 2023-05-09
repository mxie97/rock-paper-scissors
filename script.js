let userScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const computerSign = document.querySelector('#computer-sign');
const playerSign = document.querySelector('#player-sign');
const roundResult = document.querySelector('#round-result');
const endgameModal = document.querySelector("#endgame-modal");
const overlay = document.querySelector('#end-overlay')
const endgameMessageContainer = document.querySelector('#endgame-message');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const restartButton = document.getElementById('restart-button');

rockButton.addEventListener('click', playRound)
paperButton.addEventListener('click', playRound)
scissorsButton.addEventListener('click', playRound)
restartButton.addEventListener('click', restartGame)



function displayRunningScore(playerRunningScore, computerRunningScore) {
    playerScoreDisplay.textContent = playerRunningScore;
    computerScoreDisplay.textContent = computerRunningScore;
}

function displayRoundResult(playerSelection, computerSelection, outcome) {
    if (playerSelection == "rock") {
        playerSelection = "✊";
    } else if (playerSelection == "paper") {
        playerSelection = "✋";
    } else if (playerSelection == "scissors") {
        playerSelection = "✌️";
    } else {
        playerSelection = "?";
    }

    if (computerSelection == "rock") {
        computerSelection = "✊";
    } else if (computerSelection == "paper") {
        computerSelection = "✋";
    } else if (computerSelection == "scissors") {
        computerSelection = "✌️";
    } else {
        computerSelection = "?";
    }
    
    computerSign.textContent = computerSelection;
    playerSign.textContent = playerSelection;
    
    if (outcome == "tie") {
        roundResult.textContent = "You tied this round."
    } else if (outcome == "player-loss") {
        roundResult.textContent = "You lost this round :("
    } else if (outcome == "player-win") {
        roundResult.textContent = "You won this round!"
    } else if (outcome == "none") {
        roundResult.textContent = "";
    }
}

function displayEndMessage(winner) {
    if (winner == "computer") {
        endgameMessageContainer.textContent = "You lose :(";
    } else {
        endgameMessageContainer.textContent = "You won! ;)"
    }
    endgameModal.classList.add('active');
    overlay.classList.add('active');
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
        displayRoundResult(playerSelection, computerSelection, "tie");
        keepScore(0,0);
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        displayRoundResult(playerSelection, computerSelection, "player-loss");
        keepScore(0,1);
    } else {
        displayRoundResult(playerSelection, computerSelection, "player-win");
        keepScore(1,0);
    }

    displayRunningScore(userScore, computerScore);

    if (userScore == 5 || computerScore == 5) {
        if (userScore < computerScore) {
            displayEndMessage("computer");
        } else {
            displayEndMessage("player");
        }
    } 

}



function restartGame() {
    userScore = 0;
    computerScore = 0;
    displayRunningScore(userScore, computerScore);
    displayRoundResult("?", "?", "none");
    endgameModal.classList.remove('active');
    overlay.classList.remove('active');
} 



