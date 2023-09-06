/**
 * Declare constants for DOM elements
 * and possible choices
 */
const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors"];

/**
 * Add event listener to all the buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

/**
 * The main game function. Accepts one parameter, which
 * is the data-choice value of the selected button
 */
function playGame(playerChoice) {
    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    console.log(`Player choice: ${choices[playerChoice]}`);
    console.log(`Player image source: ${playerImage.src}`);

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);
}

/**
 * Checks to see who the winner is, it accepts two strings as
 */
function checkWinner(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return "draw";
    } else if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) {
        return "computer";
    } else {
        return "player";
    }
}

/**
 * Update the scores and messages based on the game result
 */
function updateScores(result) {
    if (result === "player") {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        messages.textContent = "You win!";
    } else if (result === "computer") {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        messages.textContent = "Computer wins!";
    } else {
        messages.textContent = "It's a draw!";
    }
}

// Reset scores and messages
function resetGame() {
    playerScore.textContent = "0";
    computerScore.textContent = "0";
    messages.textContent = "Choose your weapon!";
    playerImage.src = "assets/images/rps.png";
    computerImage.src = "assets/images/rps.png";
    playerImage.alt = "Rock Paper Scissors";
    computerImage.alt = "Rock Paper Scissors";
}

// Add a reset button event listener
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGame);