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

const startGameB = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DEFAULT_USER_CHOICE = ROCK;

const getPlayerChoice = function () {
  const selection = prompt(
    ` ${ROCK} ,${PAPER} or ${SCISSOR}? `,
    ''
  ).toUpperCase();
  if (selection !== ROCK && Selection !== PAPER && Selection !== SCISSOR) {
    alert(`Invalid choice , we choose to ${DEFAULT_USER_CHOICE} for you`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

startGameB.addEventListener('click', function () {
  console.log('game on');
  const playSelection = getPlayerChoice();
  console.log(playSelection);
});
