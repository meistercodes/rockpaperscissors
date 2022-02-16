const playerSelection = "Paper";
const computerSelection = computerPlay();

function computerPlay() {
  let gameChoice = ["Rock", "Paper", "Scissors"];
  let randomChoice = gameChoice[Math.floor(Math.random() * gameChoice.length)];
  // console.log(randomChoice);
  return randomChoice;
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
    const playerSelection = "Paper";
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
