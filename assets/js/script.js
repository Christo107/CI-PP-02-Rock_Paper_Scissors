/**
 * Declare constants for DOM elements and possible choices
 */
// Constants declaration code below based on Code Institute Rock paper Scissors game
const buttons = document.getElementsByClassName("option-btns");
const playerScore = document.getElementById("player-score").textContent;
const computerScore = document.getElementById("computer-score").textContent;
const playerChoiceImg = document.getElementById("player-choice-img");
const computerChoiceImg = document.getElementById("computer-choice-img");
const OPTIONS = ["rock", "paper", "scissors"]

let resultMessage = document.getElementById("result-text");
let playerOption;
let computerOption;
let result;

/**
 * Adding event listeners to buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function() {
        playerOption = this.getAttribute("data-choice");
        console.log(playerOption);
        playGame(playerOption);
    });
}

/**
 * Main game code based on Code Institute Rock paper Scissors game
 */
function playGame(playerOption) {
    playerChoiceImg.src = `assets/images/${OPTIONS[playerOption]}.png`;
    playerChoiceImg.alt = OPTIONS[playerOption];

    computerOption = Math.floor(Math.random() * 3);

    computerChoiceImg.src = `assets/images/${OPTIONS[computerOption]}.png`;
    computerChoiceImg.alt = OPTIONS[computerOption];

    console.log(computerOption)

    checkWinner();
    
    updateScores(result);
}

/**
 * Checks whether player or computer has won the current round
 */

 function checkWinner() {
     if (playerOption == '0' && computerOption == '2') {
        resultMessage.innerHTML = "You win! Lets have another round!";
        playerScore++;
     }
     else if (playerOption == '0' && computerOption == '1') {
        resultMessage.innerHTML = "You Lose! Lets have another round!";
        computerScore++;
     }
     else if (playerOption == '1' && computerOption == '0') {
        resultMessage.innerHTML = "You Win! Lets have another round!";
        playerScore++;
     }     
     else if (playerOption == '1' && computerOption == '2') {
        resultMessage.innerHTML = "You Lose! Lets have another round!";
        computerScore++;
     }
     else if (playerOption == '2' && computerOption == '1') {
        resultMessage.innerHTML = "You Win! Lets have another round!";
        playerScore++;
     } 
     else if (playerOption == '2' && computerOption == '0') {
        resultMessage.innerHTML = "You Lose! Lets have another round!";
        computerScore++;
     } 
     else {
        resultMessage.innerHTML = "Its a draw! Lets have another round!";
     }
 }

function updateScores() {

}