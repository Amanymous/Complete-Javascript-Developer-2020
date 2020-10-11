// const startGameB = document.getElementById('start-game-btn');

// const start = function () {
//   console.log('let play game');
// };

// const person = {
//   name: 'aman',
//   greet: function greet() {
//     console.log('hi there');
//   },
// };
// person.greet();
// console.dir(start);

// startGameB.addEventListener('click', start);
// ---------------Task 1--------------------

// const startGameB = document.getElementById('start-game-btn');

// const start = function () {
//   console.log('let play game');
// };

// const person = {
//   name: 'aman',
//   greet: function greet() {
//     console.log('hi there');
//   },
// };
// person.greet();
// console.dir(start);

// startGameB.addEventListener('click', function () {
//   console.log('game on');
// });
// ---------------------Task 2--------------------------

// const startGameB = document.getElementById('start-game-btn');

// const ROCK = 'ROCK';
// const PAPER = 'PAPER';
// const SCISSOR = 'SCISSOR';
// const DEFAULT_USER_CHOICE = ROCK;

// let gameIsRunning = false;

// const getPlayerChoice = function () {
//   const selection = prompt(
//     ` ${ROCK} ,${PAPER} or ${SCISSOR}? `,
//     ''
//   ).toUpperCase();
//   if (selection !== ROCK && Selection !== PAPER && Selection !== SCISSOR) {
//     alert(`Invalid choice , we choose to ${DEFAULT_USER_CHOICE} for you`);
//     return DEFAULT_USER_CHOICE;
//   }
//   return selection;
// };

// startGameB.addEventListener('click', function () {
//   if (gameIsRunning) {
//     return;
//   }
//   gameIsRunning = true;
//   console.log('game on');
//   const playSelection = getPlayerChoice();
//   console.log(playSelection);
// });
// -------------------Task 3-------------------------------

// const startGameBtn = document.getElementById('start-game-btn');

// const ROCK = 'ROCK';
// const PAPER = 'PAPER';
// const SCISSORS = 'SCISSORS';
// const DEFAULT_USER_CHOICE = ROCK;
// const RESULT_DRAW = 'DRAW';
// const RESULT_PLAYER_WINS = 'PLAYER_WINS';
// const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

// let gameIsRunning = false;

// const getPlayerChoice = () => {
//   const selection = prompt(
//     `${ROCK}, ${PAPER} or ${SCISSORS}?`,
//     ''
//   ).toUpperCase();
//   if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
//     alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
//     return DEFAULT_USER_CHOICE;
//   }
//   return selection;
// };

// const getComputerChoice = () => {
//   const randomValue = Math.random();
//   if (randomValue < 0.34) {
//     return ROCK;
//   } else if (randomValue < 0.67) {
//     return PAPER;
//   } else {
//     return SCISSORS;
//   }
// };

// const getWinner = (cChoice, pChoice) =>
//   cChoice === pChoice
//     ? RESULT_DRAW
//     : (cChoice === ROCK && pChoice === PAPER) ||
//       (cChoice === PAPER && pChoice === SCISSORS) ||
//       (cChoice === SCISSORS && pChoice === ROCK)
//     ? RESULT_PLAYER_WINS
//     : RESULT_COMPUTER_WINS;

// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WINS;
// } else {
//   return RESULT_COMPUTER_WINS;
// }

// startGameBtn.addEventListener('click', () => {
//   if (gameIsRunning) {
//     return;
//   }
//   gameIsRunning = true;
//   console.log('Game is starting...');
//   const playerChoice = getPlayerChoice();
//   const computerChoice = getComputerChoice();
//   const winner = getWinner(computerChoice, playerChoice);
//   let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you `;
//   if (winner === RESULT_DRAW) {
//     message = message + 'had a draw.';
//   } else if (winner === RESULT_PLAYER_WINS) {
//     message = message + 'won.';
//   } else {
//     message = message + 'lost.';
//   }
//   alert(message);
//   gameIsRunning = false;
// });
// ----------------------Task 4----------------------------------

// const startGameB = document.getElementById('start-game-btn');

// const ROCK = 'ROCK';
// const PAPER = 'PAPER';
// const SCISSORS = 'SCISSORS';
// const DEFAULT_VALUE = 'DEFAULT_VALUE';
// const RESULT_DRAW = 'RESULT_DRAW';
// const RESULT_PLAYER_WINS = 'RESULT_PLAYER_WINS';
// const RESULT_COMPUTER_WINS = 'RESULT_COMPUTER_WINS';

// let isGameRunning = false;

// const getPlayer = () => {
//   const select = prompt(`${ROCK} ${PAPER} AND ${SCISSORS} ?`, '').toUpperCase();
//   if (select !== ROCK && select !== SCISSORS && select !== PAPER) {
//     alert(`Invalid choice ${DEFAULT_VALUE} FOR YOU`);
//     return;
//   }
//   return select;
// };

// const getComputer = () => {
//   const randomValue = Math.value();
//   if (randomValue < 0.5) {
//     return ROCK;
//   } else if (randomValue < 0.7) {
//     return PAPER;
//   } else {
//     return SCISSORS;
//   }
// };

// const getWinner = (computerc, playerc = DEFAULT_VALUE) =>
//   computerc === playerc
//     ? RESULT_DRAW
//     : (computerc === ROCK && playerc === PAPER) ||
//       (computerc === PAPER && playerc === SCISSORS) ||
//       (computerc === SCISSORS && playerc === ROCK)
//     ? RESULT_PLAYER_WINS
//     : RESULT_COMPUTER_WINS;

// startGameB.addEventListener('click', () => {
//   if (isGameRunning) {
//     return;
//   }
//   isGameRunning = false;
//   console.log('game is starting');
//   const playerChoice = getPlayer();
//   const computerChoice = getComputer();
//   let winner;
//   if (playerChoice) {
//     winner = getWinner(getComputer, getPlayer);
//   } else {
//     winner = getWinner(computerChoice);
//   }
//   let message = `You picked ${
//     playerChoice || DEFAULT_VALUE
//   }, computer picked ${computerChoice} ,therefore you`;
//   if (winner === RESULT_DRAW) {
//     message = message + 'had a draw';
//   } else if (winner === RESULT_PLAYER_WINS) {
//     message = message + 'won';
//   } else {
//     message = message + 'lost.';
//   }
//   alert(message);
//   isGameRunning = false;
// });
// ------------------------Task 5-----------------------------------
// THIS IS NOT RELATED TO GAME

// const sumUp = (a, b, ...numbers) => {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   return sum;
// };
// console.log(sumUp(1, 5, 10, -3, 6, 10));
// console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));

// -----------------------Task 6-------------------------------------
// const sumUp = (a, b, ...numbers) => {
//   const validationNumber = (number) => {
//     return isNaN(number) ? 0 : number;
//   };
//   let sum = 0;
//   for (const num of numbers) {
//     sum += validationNumber(num);
//   }
//   return sum;
// };
// const subtract = () => {
//   let sub = 0;
//   for (const num of arguments) {
//     sub -= num;
//   }
//   return sub;
// };

// console.log(sumUp(1, 5, 'fdsa', -3, 'abc', 0, 2));
// console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));
// console.log(subtractUp(1, 10, 15, 20));
// ---------------------------Task 7--------------------------

const startGameB = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_VALUE = 'DEFAULT_VALUE';
const RESULT_DRAW = 'RESULT_DRAW';
const RESULT_COMPUTER_WINS = 'RESULT_COMPUTER_WINS';
const RESULT_PLAYER_WINS = 'RESULT_PLAYER_WINS';

let isGameRunning = false;

const getPlayerChoice = () => {
  const select = prompt(`${ROCK},${PAPER} AND ${SCISSORS}?`, '').toUpperCase();
  if (select !== ROCK && select !== PAPER && select !== SCISSORS) {
    alert(
      `you have choosen nothing we use defuly choice ${DEFAULT_VALUE} for you!`
    );
    return;
  }
  return select;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.9) {
    return ROCK;
  } else if (randomValue < 0.1) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (computerC, playerC = DEFAULT_VALUE) => {
  computerC === playerC
    ? RESULT_DRAW
    : (computerC === ROCK && playerC === PAPER) ||
      (computerC === SCISSORS && playerC === ROCK) ||
      (computerC === PAPER && playerC === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
};

startGameB.addEventListener('click', () => {
  if (isGameRunning) {
    return;
  }
  isGameRunning = true;
  console.log('game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
    let message = `YOu picked ${
      playerChoice || DEFAULT_VALUE
    }, computer picked ${computerChoice},therefore you`;
  }
});
