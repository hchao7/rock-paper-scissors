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

function determineCurrentWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    return "Human";
  }
  else if (humanScore < computerScore) {
    return "Computer";
  }
  else {
    return "Tie";
  }
}

// Global variables accessible throughout the program
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    // Default outcome of round is "Tie"
    let winner = "Tie";
    
    // Determines winner of the round
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
  
    const round_result = document.createElement("p");

    // Update humanScore, computerScore, and round_result based on winner
    if (winner == "Human") {
      humanScore = humanScore + 1;
      round_result.textContent = `You won. ${humanChoice} beats ${computerChoice}.`;
    }
    else if (winner == "Computer") {
      computerScore = computerScore + 1;
      round_result.textContent = `You lost. ${computerChoice} beats ${humanChoice}.`;
    }
    else {
      round_result.textContent = `You tied. Both of you played ${computerChoice}.`;
    }

    // Changes to global variables can be seen outside the function
    div_display.appendChild(round_result);
    // Displays running scores
    score_display.textContent = `Human: ${humanScore} Computer: ${computerScore}`

    // Displays final winner after either player reaches 5 wins
    if (humanScore == 5 || computerScore == 5) {
      const game_result = document.createElement("h2");
      game_result.textContent = `Ultimate Winner: ${determineCurrentWinner(humanScore, computerScore)}`;
      div_display.appendChild(game_result);

      // Reset scores for another game
      humanScore = 0;
      computerScore = 0;
    }
    
  }


// Creates div for displaying results
const div_display = document.createElement("div");
const score_display = document.createElement("h2");
div_display.appendChild(score_display);

// Creates buttons for selecting a move
// Assigns text property of button to corresponding move
const rock_button = document.createElement("button");
rock_button.textContent = "Rock";
const paper_button = document.createElement("button");
paper_button.textContent = "Paper";
const scissors_button = document.createElement("button");
scissors_button.textContent = "Scissors";

// Appends children
document.body.appendChild(rock_button);
document.body.appendChild(paper_button);
document.body.appendChild(scissors_button);
document.body.appendChild(div_display);

// Adds event listeners to each button
// Calls playRound anytime a button is clicked
rock_button.addEventListener('click', () => {
	playRound("Rock", getComputerChoice());
});
paper_button.addEventListener('click', () => {
	playRound("Paper", getComputerChoice());
});
scissors_button.addEventListener('click', () => {
	playRound("Scissors", getComputerChoice());
});

