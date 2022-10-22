/**
 * Declare constants for DOM elements and possible choices
 */
// Constants declaration code below based on Code Institute Rock paper Scissors game
const buttons = document.getElementsByClassName("option-btns");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerChoiceImg = document.getElementById("player-choice-img");
const computerChoiceImg = document.getElementById("computer-choice-img");
const OPTIONS = ["rock", "paper", "scissors"]

/**
 * Adding event listeners to buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function() {
        let playerOption = this.getAttribute("data-choice");
        playGame(playerOption);
    });
}

/**
 * Main game code based on Code Institute Rock paper Scissors game
 */
function playGame(playerOption) {
    playerChoiceImg.src = `assets/images/${OPTIONS[playerOption]}.png`;
    playerChoiceImg.alt = OPTIONS[playerOption];

    let computerOption = Math.floor(Math.random() * 3);

    computerChoiceImg.src = `assets/images/${OPTIONS[computerOption]}.png`;
    computerChoiceImg.alt = OPTIONS[computerOption];

    let result = checkWinner(OPTIONS[computerOption], OPTIONS[playerOption]);

    updateScores(result);
}