let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

const rockBtn = document.querySelector('.rockbtn');
const paperBtn = document.querySelector('.paperbtn');
const scissorsBtn = document.querySelector('.scissorsbtn');
const playResult = document.querySelector('.gameresult');
const playerScoreDis = document.querySelector('.playerscorecontain');
const computerScoreDis = document.querySelector('.computerscorecontain');
const drawScoreDis = document.querySelector('.drawscorecontain');
const resetBtn = document.querySelector('.gamereset');

resetBtn.addEventListener('click', () => {
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  playResult.innerHTML = '';
  playerScoreDis.innerHTML = 'Player Score: 0';
  computerScoreDis.innerHTML = 'Computer Score: 0';
  drawScoreDis.innerHTML = 'Draw Score: 0';
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;
});

rockBtn.addEventListener('click', () => {
  playResult.innerHTML = playRound('Rock', computerPlay());
  gameExecute();
  playerChoice = 'Rock';
});

paperBtn.addEventListener('click', () => {
  playResult.innerHTML = playRound('Paper', computerPlay());
  gameExecute();
  playerChoice = 'Paper';
});

scissorsBtn.addEventListener('click', () => {
  playResult.innerHTML = playRound('Scissors', computerPlay());
  gameExecute();
  playerChoice = 'Scissors';
});

function gameExecute() {
  playerScoreDis.innerHTML = `Player Score: ${playerScore}`;
  computerScoreDis.innerHTML = `Computer Score: ${computerScore}`;
  drawScoreDis.innerHTML = `Draw Score: ${drawScore}`;
  if (playerScore === 5) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    playResult.innerHTML = 'You Have Won The Game!';
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
  } else if (computerScore === 5) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    playResult.innerHTML = 'The Computer Has Won The Game!';
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
  }
}

// Function that generates a random computer selection
function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return 'Rock';
  } else if (computerChoice === 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    drawScore++;
    return 'Draw';
  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    playerScore++;
    return `You Win! You had ${playerChoice} and the Computer had ${computerChoice}`;
  } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
    playerScore++;
    return `You Win! You had ${playerChoice} and the Computer had ${computerChoice}`;
  } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
    playerScore++;
    return `You Win! You had ${playerChoice} and the Computer had ${computerChoice}`;
  } else {
    computerScore++;
    return `You Lose! You had ${playerChoice} and the Computer had ${computerChoice}`;
  }
}
