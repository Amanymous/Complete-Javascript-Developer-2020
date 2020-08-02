const defaultValue = 0;
let currentResult = defaultValue;
let logEnteries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  OutputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserInput();
  const initialValue = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialValue, enteredNumber);
  const logEntry = {
    operation: 'add',
    prevResult: initialValue,
    number: enteredNumber,
    result: currentResult,
  };
  logEnteries.push(logEntry);
  console.log(logEnteries);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialValue = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialValue, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialValue = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialValue, enteredNumber);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialValue = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialValue, enteredNumber);
}

addBtn.addEventListener('click', add);
subBtn.addEventListener('click', subtract);
multBtn.addEventListener('click', multiply);
dividBtn.addEventListener('click', divide);
