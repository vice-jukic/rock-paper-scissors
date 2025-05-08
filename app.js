
const rpsButtons = document.querySelectorAll(".rps-button");
const gameDisplay = document.querySelector(".game-display");

const scoreEl = document.createElement("p");
const resultEl = document.createElement("p");
const userChoiceEl = document.createElement("p");
const computerChoiceEl = document.createElement("p");

appendElements();

let userScore = 0;
let computerScore = 0;

const WINNING_SCORE = 5;
const RESET_DELAY_MS = 2000;

updateScoreDisplay();

function appendElements() {

    scoreEl.classList.add("score");
    resultEl.classList.add("result");
    userChoiceEl.classList.add("user-choice");
    computerChoiceEl.classList.add("computer-choice");


    gameDisplay.appendChild(scoreEl);
    gameDisplay.appendChild(resultEl);
    gameDisplay.appendChild(userChoiceEl);
    gameDisplay.appendChild(computerChoiceEl);

}

function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    let element = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return element;
}

function playRound(userChoice, computerChoice) {
    let roundWinner = "";

    if (userChoice === computerChoice) {
        roundWinner = "tie";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        roundWinner = "user";
    } else {
        roundWinner = "computer";
    }

    userChoiceEl.textContent = `You chose: ${userChoice}`;
    computerChoiceEl.textContent = `Computer chose: ${computerChoice}`;

    return roundWinner;
}

function updateScoreDisplay() {
    scoreEl.textContent = `YOUR SCORE: ${userScore} | COMPUTER SCORE: ${computerScore}`;
}

function resetGame() {

    appendElements();

    rpsButtons.forEach(button => button.disabled = true);

    const resetButtonEl = document.createElement("button");
    resetButtonEl.textContent = "RESET GAME";
    gameDisplay.appendChild(resetButtonEl);

    resetButtonEl.addEventListener("click", () => {
        userScore = 0;
        computerScore = 0;

        while (gameDisplay.firstChild) {
            gameDisplay.removeChild(gameDisplay.firstChild);
        }

        rpsButtons.forEach(button => button.disabled = false);

        scoreEl.textContent = `YOUR SCORE: ${userScore} | COMPUTER SCORE: ${computerScore}`;
        resultEl.textContent = "";
        userChoiceEl.textContent = "";
        computerChoiceEl.textContent = "";

        appendElements();
    })

}

function displayScore(winner) {

    if (winner === "user") {
        userScore++;
        resultEl.textContent = "You win this round!";
    } else if (winner === "computer") {
        computerScore++;
        resultEl.textContent = "Computer wins this round!";
    } else {
        resultEl.textContent = "It's a tie!";
    }

    updateScoreDisplay();

    if (userScore === WINNING_SCORE) {
        resultEl.textContent = "YOU WIN!";
        resetGame();
    } else if (computerScore === WINNING_SCORE) {
        resultEl.textContent = "COMPUTER WINS!";
        resetGame();
    }
}

function handleClick(event) {
    const buttonValue = event.target.getAttribute("data-value");
    const computerValue = getComputerChoice();

    const winner = playRound(buttonValue, computerValue);
    displayScore(winner);
}

function buttonPressed() {
    rpsButtons.forEach(button => {
        button.addEventListener("click", (handleClick));
    });
}

function playGame() {
    buttonPressed();
}

playGame();