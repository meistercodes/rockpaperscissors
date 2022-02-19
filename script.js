let computerChoice = computerPlay();
let playerChoice = "Rock";

function computerPlay() {
  let computerSelection = Math.floor(Math.random() * 3) + 1;
  if (computerSelection === 1) {
    return "Rock";
  } else if (computerSelection === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === "Rock" && computerChoice === "Rock") {
    return "Draw";
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    return "You Win!";
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    return "You Win!";
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    return "You Win!";
  } else {
    return "The Computer Wins!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let computerChoice = computerPlay();
    console.log(playRound(playerChoice, computerChoice));
  }
}

game();

