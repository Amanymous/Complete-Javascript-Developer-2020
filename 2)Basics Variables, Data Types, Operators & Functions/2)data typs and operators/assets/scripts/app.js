// alert('This is working');
// const defaultResult = 0;
// let currentResult = defaultResult;

// function add() {
//   currentResult = currentResult+userInput.value;
//   outputResult(currentResult,'')
// }
// addBtn.addEventListener('click',add);

// const defaultResult = 0;
// let currentResult = defaultResult;

// function add() {
//   currentResult = currentResult + parseInt(userInput.value);
//   outputResult(currentResult, '');
// }
// addBtn.addEventListener('click', add);

const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
}

// function multiply() {
//   const enteredNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult = currentResult * enteredNumber;
//   createAndWriteOutput('*', initialResult, enteredNumber);
// }

// function divide() {
//   const enteredNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult = currentResult / enteredNumber;
//   createAndWriteOutput('/', initialResult, enteredNumber);
// }

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
