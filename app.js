
function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    let element = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return element;
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
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
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "rock")
    ) {
        roundWinner = "computer";
    }

    scoreCounter(roundWinner);
}

function scoreCounter(value) {
    let humanScore = 0;
    let computerScore = 0;

    if (value === "human") {
        humanScore++
    } else if (value === "computer") {
        computerScore++;
    } else if (value === "tie") {
        humanScore = humanScore;
        computerScore = computerScore;
    }

    const msg = document.querySelector(".results");
    msg.textContent = `HUMAN SCORE: ${humanScore} | COMPUTER SCORE: ${computerScore}`;
}

function buttonPressed() {
    const buttons = document.querySelectorAll(".rps-button");
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const value = event.target.getAttribute("data-value");
            playRound(value);
        })
    });
}
function playGame() {
    buttonPressed();
/* 
    let score = "";
    score = playRound(value, computerChoice);

    console.log(`${score} - winner`);
    scoreCounter(score);
    console.log(`${score} - score outside of forEach`) */
}

playGame();

/* function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    /for (i=1; i<6; i++){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
    
        const result = playRound(humanSelection, computerSelection, humanScore, computerScore)

        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }

        console.log(`Scores after round ${i}: You - ${humanScore} | Computer - ${computerScore}`);
    }

    console.log("\nFinal Score:");
    if (humanScore > computerScore) {
        console.log("You win the game!")
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!")
    } else {
        console.log("The game is a tie!")
    }
}

playGame() */