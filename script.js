console.log("Hello, World!")

function getComputerChoice() {
  num = Math.random();
  if (num >= 0 && num < 0.33) {
    return "rock";
  }
  else if (num >= 0.33 && num < 0.66) {
    return "paper";
  }
  else {
    return "scissors";
  };
}

function getHumanChoice() {
  humanChoice = " ";
  do {
    humanChoice = prompt("Please enter rock, paper, or scissors: ").toLowerCase();
  } while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors");
  return humanChoice;
}

// function playRound(humanChoice, computerChoice) {
//   humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);
//   computerChoice = computerChoice [0].toUpperCase() + computerChoice.slice(1);
  
//   let winner = "Tie";
//   if ((humanChoice == "Rock" && computerChoice == "Scissors") || 
//   (humanChoice == "Scissors" && computerChoice == "Paper") ||
//   (humanChoice == "Paper" && computerChoice == "Rock")) {
//     winner = "Human";
//   }
//   else if ((computerChoice == "Rock" && humanChoice == "Scissors") || 
//   (computerChoice == "Scissors" && humanChoice == "Paper") ||
//   (computerChoice == "Paper" && humanChoice == "Rock")) {
//     winner = "Computer";
//   }

//   if (winner == "Human") {
//     humanScore = humanScore + 1
//     console.log(`You won. ${humanChoice} beats ${computerChoice}.`)
//   }
//   else if (winner == "Computer") {
//     computerScore = computerScore + 1
//     console.log(`You lost. ${computerChoice} beats ${humanChoice}.`)
//   }
//   else {
//     console.log(`You tied. Both of you played ${computerChoice}.`)
//   }
// }

function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);
    computerChoice = computerChoice [0].toUpperCase() + computerChoice.slice(1);
    
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
  
    if (winner == "Human") {
      humanScore = humanScore + 1
      console.log(`You won. ${humanChoice} beats ${computerChoice}.`)
    }
    else if (winner == "Computer") {
      computerScore = computerScore + 1
      console.log(`You lost. ${computerChoice} beats ${humanChoice}.`)
    }
    else {
      console.log(`You tied. Both of you played ${computerChoice}.`)
    }
  }

  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log(`You won ${humanScore} games out of 5!`)
  }
  else if (computerScore > humanScore) {
    console.log(`The computer won ${computerScore} games out of 5!`)
  }
  else {
    console.log("You tied with the computer.")
  }

}
