const startGameB = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = 'RESULT_DRAW';
const RESULT_PLAYER_WINS = 'RESULT_PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'RESULT_COMPUTER_WINS';

let isGameRunning = false;

const getPlayerChoice = () => {
  const select = prompt(`${ROCK}, ${PAPER} AND ${SCISSORS}?`, '').toUpperCase();
  if (select !== ROCK && select !== PAPER && select !== SCISSORS) {
    alert(`Invalid choice MOVING YOUR choice to ${DEFAULT_CHOICE}`);
    return DEFAULT_CHOICE;
  }
  return select;
};

const getComputerChoice = () => {
  const randoMValue = Math.random();
  if (randoMValue < 0.35) {
    return ROCK;
  } else if (randoMValue < 0.7) {
    return SCISSORS;
  }
  return PAPER;
};

const getWinner = function (cChoice, pChoice) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameB.addEventListener('click', function () {
  if (isGameRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('game on');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  console.log(winner);
});
