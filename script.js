function getComputerChoice() {
    let choices = [
        "rock",
        "paper",
        "scissors"
    ];

    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    
    let userWin = 1;
    let tie = 0;
    let userLose = -1;

    if (playerSelection === computerSelection) {
        console.log(`You tied. ${computerSelection} ties ${playerSelection}.`);
        return tie;
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        console.log(`You lost. ${computerSelection} beats ${playerSelection}.`);
        return userLose;
    } else {
        console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
        return userWin;
    }

}    

// game function. play five rounds and keep score. reports whether you won or lost against computer at the end //
function game() {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("'Rock', 'Paper', or 'Scissors'?").toLowerCase();
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result === 1) {
            userScore ++;
        } else if (result === -1) {
            computerScore ++;
        }
    }

    if (userScore > computerScore) {
        return `You beat the computer! Your score: ${userScore}, computer score: ${computerScore}`;
    } else if (computerScore > userScore) {
        return `You lost to the computer. Your score: ${userScore}, computer score: ${computerScore}`;
    } else {
        return `You tied. Your score: ${userScore}, computer score: ${computerScore}`;
    }
}

// const playerSelection = prompt("'Rock', 'Paper', or 'Scissors'?").toLowerCase();
// const computerSelection = getComputerChoice();
// playRound(playerSelection, computerSelection)

console.log(game())