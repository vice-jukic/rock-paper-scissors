
function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    let element = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return element;
}

function getHumanChoice() {
    let userInput = prompt("Rock, paper, scissors?");
    return userInput.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log("It's a tie! Both picked " + humanChoice)
        return "tie";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        return "human";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "human";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return "human";
    } else {
        console.log(`You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`)
        return "computer";
    }

}

function handleButtonClilck(action, computerChoice) {
    console.log(`Button clicked with action: ${action} and computer choice is ${computerChoice}`);
}

function playGame() {
    const buttons = document.querySelectorAll(".rps-button");
    const computerChoice = getComputerChoice();

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const value = event.target.getAttribute("data-value");
            handleButtonClilck(value, computerChoice);
    })
});
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