// Whenever you call this function you will get either "Rock", "Paper" or "Scissors".

function computerPlay() {
    let play = Math.floor(Math.random() * 3 + 1);
    if (play === 1) {
        return "Rock"
    } else if (play === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

// Function that returns whether you won, lost or tied depending on your move. 

function playRound(playerSelection,computerSelection) {
    let play1 = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (play1 === "Rock" && computerSelection === "Rock") {
        return "It's a tie! Are you reading each other's minds?"
    } else if (play1 === "Rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock"
    } else if (play1 === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock always crushes Scissors!"
    } else if (play1 === "Paper" && computerSelection === "Rock") {
        return "You win! Paper always wraps Rock!"
    } else if (play1 === "Paper" && computerSelection === "Paper") {
        return "It's a tie! Are you reading each other's minds?"
    } else if (play1 === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors always cuts Paper"
    } else if (play1 === "Scissors" && computerSelection === "Rock") {
        return "You lose! Rock always crushes Scissors"
    } else if (play1 === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors always cuts Paper"
    } else if (play1 === "Scissors" && computerSelection === "Scissors") {
        return "It's a tie! Are you reading each other's minds?"
    } else {
        return "Please write a valid play; we are playing a serious game here!"
    }
}

