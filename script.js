const playerSelection = "Rock";
const computerSelection = computerPlay();

function computerPlay() {
  let gameChoice = ["Rock", "Paper", "Scissors"];
  let randomChoice = gameChoice[Math.floor(Math.random() * gameChoice.length)];
  // console.log(randomChoice);
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Draw");
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    console.log(
      `You Win! You had ${playerSelection} and the computer had ${computerSelection}`
    );
  } else if (playerSelection === "Paper" && computerSelection == "Rock") {
    console.log(
      `You Win! You had ${playerSelection} and the computer had ${computerSelection}`
    );
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    console.log(
      `You Win! You had ${playerSelection} and the computer had ${computerSelection}`
    );
  } else {
    console.log(
      `You Lose, You had ${playerSelection} and the computer had ${computerSelection}`
    );
  }
}

playRound(playerSelection, computerSelection);
