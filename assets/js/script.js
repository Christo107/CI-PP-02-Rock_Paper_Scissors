/**
 * Declare constants for DOM elements and possible choices
 */
// Constants declaration code below based on Code Institute Rock paper Scissors game
const buttons = document.getElementsByClassName("option-btns");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
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
        incrementPlayerScore();
     }
     else if (playerOption == '0' && computerOption == '1') {
        resultMessage.innerHTML = "You Lose! Lets have another round!";
        incrementComputerScore();
     }
     else if (playerOption == '1' && computerOption == '0') {
        resultMessage.innerHTML = "You Win! Lets have another round!";
        incrementPlayerScore();
     }     
     else if (playerOption == '1' && computerOption == '2') {
        resultMessage.innerHTML = "You Lose! Lets have another round!";
        incrementComputerScore();
     }
     else if (playerOption == '2' && computerOption == '1') {
        resultMessage.innerHTML = "You Win! Lets have another round!";
        incrementPlayerScore();
     } 
     else if (playerOption == '2' && computerOption == '0') {
        resultMessage.innerHTML = "You Lose! Lets have another round!";
        incrementComputerScore();
     } 
     else {
        resultMessage.innerHTML = "Its a draw! Lets have another round!";
     }
 }


// Increment scores functions based on Code Institute's 'Love Maths' score function code
/**
 * the functions below extract the current scores for the player and computer and then increment by 1.
 * these functions are called in the checkWinner function above
 */
function incrementPlayerScore() {
   let oldScore = parseInt(document.getElementById("player-score").innerText);
   document.getElementById("player-score").innerText = ++oldScore;
}

function incrementComputerScore() {
   let oldScore = parseInt(document.getElementById("computer-score").innerText);
   document.getElementById("computer-score").innerText = ++oldScore;
}