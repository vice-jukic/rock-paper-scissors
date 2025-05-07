
const rpsButtons = document.querySelectorAll(".rps-button");
const gameDisplay = document.querySelector(".game-display");

const scoreEl = document.createElement("p");
const resultEl = document.createElement("p");
const humanChoiceEl = document.createElement("p");
const computerChoiceEl = document.createElement("p");

appendElements();

let humanScore = 0;
let computerScore = 0;

const WINNING_SCORE = 5;
const RESET_DELAY_MS = 2000;

updateScoreDisplay();

function appendElements() {

    gameDisplay.appendChild(scoreEl);
    gameDisplay.appendChild(resultEl);
    gameDisplay.appendChild(humanChoiceEl);
    gameDisplay.appendChild(computerChoiceEl);

}

function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    let element = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return element;
}

function playRound(humanChoice, computerChoice) {
    let roundWinner = "";
    console.log(humanChoice, computerChoice);

    if (humanChoice === computerChoice) {
        roundWinner = "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        roundWinner = "human";
    } else {
        roundWinner = "computer";
    }

    humanChoiceEl.textContent = `You chose: ${humanChoice}`;
    computerChoiceEl.textContent = `Computer chose: ${computerChoice}`;

    return roundWinner;
}

function updateScoreDisplay() {
    scoreEl.textContent = `HUMAN SCORE: ${humanScore} | COMPUTER SCORE: ${computerScore}`;
}

function resetGame() {

    appendElements();

    rpsButtons.forEach(button => button.disabled = true);

    const resetButtonEl = document.createElement("button");
    resetButtonEl.textContent = "RESET GAME";
    gameDisplay.appendChild(resetButtonEl);

    resetButtonEl.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;

        while (gameDisplay.firstChild) {
            gameDisplay.removeChild(gameDisplay.firstChild);
        }

        rpsButtons.forEach(button => button.disabled = false);

        scoreEl.textContent = `HUMAN SCORE: ${humanScore} | COMPUTER SCORE: ${computerScore}`;
        resultEl.textContent = "";
        humanChoiceEl.textContent = "";
        computerChoiceEl.textContent = "";

        appendElements();
    })

}

function displayScore(winner) {

    if (winner === "human") {
        humanScore++;
        resultEl.textContent = "You win this round!";
    } else if (winner === "computer") {
        computerScore++;
        resultEl.textContent = "Computer wins this round!";
    } else {
        resultEl.textContent = "It's a tie!";
    }

    updateScoreDisplay();

    if (humanScore === WINNING_SCORE) {
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