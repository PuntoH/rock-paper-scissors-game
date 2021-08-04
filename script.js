// Whenever you call this function you will get either "Rock", "Paper" or "Scissors".

function computerPlay() {
    let play = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (play === 1) {
        return "Rock"
    } else if (play === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

// Function that returns whether you won, lost or tied depending on your move. 

function playRound(playerSelection,computerPlay) {
    let play1 = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    if (play1 === "Rock" && computerPlay === "Rock") {
        return "It's a tie! Are you reading each other's minds?"
    } else if (play1 === "Rock" && computerPlay === "Paper") {
        return "You lose! Paper beats Rock"
    } else if (play1 === "Rock" && computerPlay === "Scissors") {
        return "You win! Rock always crushes Scissors!"
    } else if (play1 === "Paper" && computerPlay === "Rock") {
        return "You win! Paper always wraps Rock!"
    } else if (play1 === "Paper" && computerPlay === "Paper") {
        return "It's a tie! Are you reading each other's minds?"
    } else if (play1 === "Paper" && computerPlay === "Scissors") {
        return "You lose! Scissors always cuts Paper"
    } else if (play1 === "Scissors" && computerPlay === "Rock") {
        return "You lose! Rock always crushes Scissors"
    } else if (play1 === "Scissors" && computerPlay === "Paper") {
        return "You win! Scissors always cuts Paper"
    } else if (play1 === "Scissors" && computerPlay === "Scissors") {
        return "It's a tie! Are you reading each other's minds?"
    } else {
        return "Please write a valid play; we are playing a serious game here!"
    }
}

// Selecting buttons to later add events.

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const textResult = document.getElementsByClassName("result-text");

// Selecting the "versus container" to be able to replace its children with rock paper scissors icons.

const divVersusContainer = document.getElementById("versus-container");
const versusParagraph = document.getElementById("versus-paragraph");

// Creating images that will replace versus container's children when there's an event.

const rockIcon = document.createElement("img");
rockIcon.setAttribute("src", "images/choose-rock.png");

const paperIcon = document.createElement("img");
paperIcon.setAttribute("src", "images/choose-paper.png");

const scissorsIcon = document.createElement("img");
scissorsIcon.setAttribute("src", "images/choose-scissors.png");

// Computer's and Player's score.

const playerScore = document.getElementById("score-player");
const computerScore = document.getElementById("score-computer");
let playerScoreNumber = 1;
let computerScoreNumber = 1;

// Events that return a result (text and image) depending on what button you pressed. If you win your score will go up by 1. If you lose the computer's score will go up by 1. 

rock.addEventListener("click", function() {
    textResult[0].textContent = playRound("rock", computerPlay());
    if (textResult[0].textContent === "It's a tie! Are you reading each other's minds?") {
        divVersusContainer.removeChild(divVersusContainer.firstElementChild);
        divVersusContainer.removeChild(divVersusContainer.lastElementChild);
        divVersusContainer.insertBefore(rockIcon, versusParagraph);
        divVersusContainer.appendChild(rockIcon.cloneNode());
        
    } else if (textResult[0].textContent === "You win! Rock always crushes Scissors!") {
        divVersusContainer.removeChild(divVersusContainer.firstElementChild);
        divVersusContainer.removeChild(divVersusContainer.lastElementChild);
        divVersusContainer.insertBefore(rockIcon, versusParagraph);
        divVersusContainer.appendChild(scissorsIcon);
        playerScore.textContent = `Player: ${playerScoreNumber++}`;
        
    } else if (textResult[0].textContent === "You lose! Paper beats Rock") {
        divVersusContainer.removeChild(divVersusContainer.firstElementChild);
        divVersusContainer.removeChild(divVersusContainer.lastElementChild);
        divVersusContainer.insertBefore(rockIcon, versusParagraph);
        divVersusContainer.appendChild(paperIcon);
        computerScore.textContent = `Computer: ${computerScoreNumber++}`;
        
    }
});

paper.addEventListener("click", function() {
    textResult[0].textContent = playRound("paper", computerPlay());
    if (textResult[0].textContent === "It's a tie! Are you reading each other's minds?") {
        divVersusContainer.removeChild(divVersusContainer.firstElementChild);
        divVersusContainer.removeChild(divVersusContainer.lastElementChild);
        divVersusContainer.insertBefore(paperIcon, versusParagraph);
        divVersusContainer.appendChild(paperIcon.cloneNode());
        
    } else if (textResult[0].textContent === "You win! Paper always wraps Rock!") {
        divVersusContainer.removeChild(divVersusContainer.firstElementChild);
        divVersusContainer.removeChild(divVersusContainer.lastElementChild);
        divVersusContainer.insertBefore(paperIcon, versusParagraph);
        divVersusContainer.appendChild(rockIcon);
        playerScore.textContent = `Player: ${playerScoreNumber++}`;
        
    } else if (textResult[0].textContent === "You lose! Scissors always cuts Paper") {
        divVersusContainer.removeChild(divVersusContainer.firstElementChild);
        divVersusContainer.removeChild(divVersusContainer.lastElementChild);
        divVersusContainer.insertBefore(paperIcon, versusParagraph);
        divVersusContainer.appendChild(scissorsIcon);
        computerScore.textContent = `Computer: ${computerScoreNumber++}`;
        
    }
});

scissors.addEventListener("click", function() {
    textResult[0].textContent = playRound("scissors", computerPlay());
    if (textResult[0].textContent === "It's a tie! Are you reading each other's minds?") {
        divVersusContainer.removeChild(divVersusContainer.firstElementChild);
        divVersusContainer.removeChild(divVersusContainer.lastElementChild);
        divVersusContainer.insertBefore(scissorsIcon, versusParagraph);
        divVersusContainer.appendChild(scissorsIcon.cloneNode());
        
    } else if (textResult[0].textContent === "You win! Scissors always cuts Paper") {
        divVersusContainer.removeChild(divVersusContainer.firstElementChild);
        divVersusContainer.removeChild(divVersusContainer.lastElementChild);
        divVersusContainer.insertBefore(scissorsIcon, versusParagraph);
        divVersusContainer.appendChild(paperIcon);
        playerScore.textContent = `Player: ${playerScoreNumber++}`;
        
    } else if (textResult[0].textContent === "You lose! Rock always crushes Scissors") {
        divVersusContainer.removeChild(divVersusContainer.firstElementChild);
        divVersusContainer.removeChild(divVersusContainer.lastElementChild);
        divVersusContainer.insertBefore(scissorsIcon, versusParagraph);
        divVersusContainer.appendChild(rockIcon);
        computerScore.textContent = `Computer: ${computerScoreNumber++}`;
        
    }
});
