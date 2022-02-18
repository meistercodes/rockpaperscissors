const playerSelection = prompt(
  "Rock, Paper or Scissors? (An incorrect selection or typo will result in a loss)"
);

function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return "Rock";
  } else if (computerChoice === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return `You Win! You had ${playerSelection} and the Computer had ${computerSelection}`;
  } else if (playerSelection === "Paper" && computerSelection == "Rock") {
    return `You Win! You had ${playerSelection} and the Computer had ${computerSelection}`;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return `You Win! You had ${playerSelection} and the Computer had ${computerSelection}`;
  } else {
    return `You Lose, You had ${playerSelection} and the Computer had ${computerSelection}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
