function displayRunningScore(playerRunningScore, computerRunningScore) {
    const playerScoreDisplay = document.querySelector('#player-score');
    playerScoreDisplay.textContent = playerRunningScore;
    const computerScoreDisplay = document.querySelector('#computer-score');
    computerScoreDisplay.textContent = computerRunningScore;
}

function displayRoundResult(playerSelection, computerSelection, outcome) {
    if (playerSelection == "rock") {
        playerSelection = "✊";
    } else if (playerSelection == "paper") {
        playerSelection = "✋";
    } else {
        playerSelection = "✌";
    }

    if (computerSelection == "rock") {
        computerSelection = "✊";
    } else if (computerSelection == "paper") {
        computerSelection = "✋";
    } else {
        computerSelection = "✌";
    }
    
    const computerSign = document.querySelector('#computer-sign');
    computerSign.textContent = computerSelection;
    const playerSign = document.querySelector('#player-sign');
    playerSign.textContent = playerSelection;
    const roundResult = document.querySelector('#round-result');
    if (outcome == "tie") {
        roundResult.textContent = "You tied this round."
    } else if (outcome == "player-loss") {
        roundResult.textContent = "You lost this round :("
    } else {
        roundResult.textContent = "You won this round!"
    }
}

function displayWin(winner) {
    const endgameModal = document.querySelector("#endgame-modal");
    const overlay = document.querySelector('#end-overlay')
    const endgameMessageContainer = document.querySelector('#endgame-message');
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
            displayWin("computer");
        } else {
            displayWin("player");
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