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
    console.log("Draw");
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    console.log("You Win!");
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    console.log("You Win!");
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    console.log("You Win!");
  } else {
    console.log("You Lose!");
  }
}

playRound(playerChoice, computerChoice);
