function playerPlay() {
  let playerChoice = prompt("Rock, Paper, or Scissors?");
  return playerChoice;
}

// Function that generates a random computer selection
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

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Draw";
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    return `You Win! You had ${playerChoice} and the Computer had ${computerChoice}`;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    return `You Win! You had ${playerChoice} and the Computer had ${computerChoice}`;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    return `You Win! You had ${playerChoice} and the Computer had ${computerChoice}`;
  } else {
    return `You Lose! You had ${playerChoice} and the Computer had ${computerChoice}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let computerChoice = computerPlay();
    let playerChoice = playerPlay();
    console.log(playRound(playerChoice, computerChoice));
  }
}

game();
