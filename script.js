let computerSelection = computerPlay();
let drawScore = 0;
let playerScore = 0;
let computerScore = 0;

const playerSelection = prompt(
  "Rock, Paper or Scissors? (An incorrect selection or typo will result in a loss)"
);

// Generates a Computer Selection for the game
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

// Plays a round of rock paper scissors
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

// Game Score *WORK IN PROGRESS*
// function gameScore(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection) {
//     drawScore++;
//   } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
//     playerScore++;
//   } else if (playerSelection === "Paper" && computerSelection == "Rock") {
//     playerScore++;
//   } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
//     playerScore++;
//   } else {
//     computerScore++;
//   }
//   console.log(playerScore, computerScore);
// }

// Round of the game
function game() {
  for (let i = 0; i < 5; i++) {
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
