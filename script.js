let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

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
    drawScore++;
    return "Draw";
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    playerScore++;
    return `You Win! You had ${playerChoice} and the Computer had ${computerChoice}`;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    playerScore++;
    return `You Win! You had ${playerChoice} and the Computer had ${computerChoice}`;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    playerScore++;
    return `You Win! You had ${playerChoice} and the Computer had ${computerChoice}`;
  } else {
    computerScore++;
    return `You Lose! You had ${playerChoice} and the Computer had ${computerChoice}`;
  }
}

function roundExit(playerScore, computerScore) {
  if (playerScore === computerScore) {
    return "The Round was a Tie!";
  } else if (playerScore > computerScore) {
    return `Congratulations! You have won the round, your score was ${playerScore} and the computer score was ${computerScore}`;
  } else {
    return `Sorry, you have lost the round, your score was ${playerScore} and the computer score was ${computerScore}`;
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
console.log(roundExit(playerScore, computerScore));
