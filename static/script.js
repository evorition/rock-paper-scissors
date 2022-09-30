function getComputedChoice() {
  // Generate pseudo-random number between 0 and 2
  const randomChoice = Math.floor(Math.random() * 3)

  switch (randomChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return 0;
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return -1;
    } else if (computerSelection === "scissors") {
      return 1;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return 1;
    } else if (computerSelection === "scissors") {
      return -1;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return 1;
    } else if (computerSelection === "rock") {
      return -1;
    }
  }
}

function getUserInput() {
  let userInput = prompt("Enter rock, paper or scissors").toLowerCase();

  while (["rock", "paper", "scissors"].indexOf(userInput) == -1) {
    userInput = prompt("You input is incorrect. Enter rock, paper or scissors").toLowerCase();
  }
  return userInput;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputedChoice();
    const playerSelection = getUserInput();

    winner = playRound(playerSelection, computerSelection);

    if (winner == 1) {
      ++playerScore;
      alert("Player win this round!");
    } else if (winner == -1) {
      ++computerScore;
      alert("Computer win this round!");
    } else {
      alert("It's a tie!");
    }
  }
  if (playerScore > computerScore) {
    alert(`Player win this game with the score ${playerScore}:${computerScore}`)
  } else if (playerScore < computerScore) {
    alert(`Computer win this game with the score ${computerScore}:${playerScore}`);
  } else {
    alert("Tie in this game");
  }
}
