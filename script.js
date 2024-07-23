function getComputerChoice() {
  num = Math.random();
  if (num >= 0 && num < 0.33) {
    return "Rock";
  }
  else if (num >= 0.33 && num < 0.66) {
    return "Paper";
  }
  else {
    return "Scissors";
  };
}

// Variables are accessible by playRound, so long as playRound func is declared inside playGame
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice, computerChoice);
    // Default outcome of round is "Tie"
    let winner = "Tie";
    
    if ((humanChoice == "Rock" && computerChoice == "Scissors") || 
    (humanChoice == "Scissors" && computerChoice == "Paper") ||
    (humanChoice == "Paper" && computerChoice == "Rock")) {
      winner = "Human";
    }
    else if ((computerChoice == "Rock" && humanChoice == "Scissors") || 
    (computerChoice == "Scissors" && humanChoice == "Paper") ||
    (computerChoice == "Paper" && humanChoice == "Rock")) {
      winner = "Computer";
    }
  
    // Update scores based on winner
    if (winner == "Human") {
      humanScore = humanScore + 1;
      div_display.textContent = `You won. ${humanChoice} beats ${computerChoice}.`;
    }
    else if (winner == "Computer") {
      computerScore = computerScore + 1;
      div_display.textContent = `You lost. ${computerChoice} beats ${humanChoice}.`;
    }
    else {
      div_display.textContent = `You tied. Both of you played ${computerChoice}.`;
    }
  }

// Create div display
const div_display = document.createElement("div");

// Create buttons
const rock_button = document.createElement("button");
rock_button.textContent = "Rock";
const paper_button = document.createElement("button");
paper_button.textContent = "Paper";
const scissors_button = document.createElement("button");
scissors_button.textContent = "Scissors";

// Append children
document.body.appendChild(rock_button);
document.body.appendChild(paper_button);
document.body.appendChild(scissors_button);
document.body.appendChild(div_display);

// Add event listeners
rock_button.addEventListener('click', () => {
	playRound("Rock", getComputerChoice());
});
paper_button.addEventListener('click', () => {
	playRound("Paper", getComputerChoice());
});
scissors_button.addEventListener('click', () => {
	playRound("Scissors", getComputerChoice());
});

