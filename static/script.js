let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll("button");
const div = document.querySelector("div");

buttons.forEach(button => {
  button.addEventListener("click", game)
});

const whoWon = document.createElement("p");
div.appendChild(whoWon);

const score = document.createElement("p");
div.appendChild(score);

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset game";
resetBtn.style.display = "none";
document.body.appendChild(resetBtn);

function getComputedChoice() {
  // Generate pseudo-random number between 0 and 2
  const randomChoice = Math.floor(Math.random() * 3)

  switch (randomChoice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  const computerWonMsg = `Computer wins this round! ${computerSelection} beats ${playerSelection}`;
  const playerWonMsg = `Player wins this round! ${playerSelection} beats ${computerSelection}`;

  if (playerSelection === computerSelection) {
    whoWon.textContent = `It's a tie! You both choose ${playerSelection}`;
    return 0;
  } else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")) {
    whoWon.textContent = playerWonMsg;
    return 1;
  } else {
    whoWon.textContent = computerWonMsg;
    return -1;
  }
}

function updateScore(winner) {
  if (winner === 1) {
    ++playerScore;
  } else if (winner === -1) {
    ++computerScore;
  }
  score.textContent = `Computer: ${computerScore} - Player ${playerScore}`;
}

function resetGame() {
  resetBtn.style.display = "inline";

  resetBtn.addEventListener("click", () => {
    computerScore = 0;
    playerScore = 0;
    whoWon.textContent = "";
    score.textContent = "";
    buttons.forEach(button => button.disabled = false);

    resetBtn.style.display = "none";
  })
}

function game() {
  const playerSelection = this.value;
  const computerSelection = getComputedChoice();

  const winner = playRound(playerSelection, computerSelection);
  updateScore(winner);

  if (computerScore === 5 || playerScore === 5) {
    buttons.forEach(button => button.disabled = true);
    whoWon.style.fontWeight = 800;

    if (computerScore === 5) {
      whoWon.textContent = "Computer win this game!";
    } else {
      whoWon.textContent = "Player win this game!";
    }

    resetGame();
  }
}
