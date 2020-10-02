// const defaultResult = 0;
// let currentResult = defaultResult;
// let logEntries = [];

// // Gets input from input field
// function getUserNumberInput() {
//   return parseInt(usrInput.value);
// }

// // Generates and writes calculation log
// function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
//   const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
//   outputResult(currentResult, calcDescription); // from vendor file
// }

// function writeToLog(
//   operationIdentifier,
//   prevResult,
//   operationNumber,
//   newResult
// ) {
//   const logEntry = {
//     operation: operationIdentifier,
//     prevResult: prevResult,
//     number: operationNumber,
//     result: newResult,
//   };
//   logEntries.push(logEntry);
//   console.log(logEntries);
// }

// function add() {
//   const enteredNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult += enteredNumber;
//   createAndWriteOutput('+', initialResult, enteredNumber);
//   writeToLog('ADD', initialResult, enteredNumber, currentResult);
// }

// function subtract() {
//   const enteredNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult -= enteredNumber;
//   createAndWriteOutput('-', initialResult, enteredNumber);
//   writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
// }

// function multiply() {
//   const enteredNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult *= enteredNumber;
//   createAndWriteOutput('*', initialResult, enteredNumber);
//   writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
// }

// function divide() {
//   const enteredNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult /= enteredNumber;
//   createAndWriteOutput('/', initialResult, enteredNumber);
//   writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
// }

// addBtn.addEventListener('click', add);
// subtractBtn.addEventListener('click', subtract);
// multiplyBtn.addEventListener('click', multiply);
// divideBtn.addEventListener('click', divide);
// ---------------------------------------------------------

const defaultResult = 0;
let currentResult = defaultResult;
let logEnteries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  OutputResult(currentResult, calcDescription);
}

function writeLog(operationIdentifier, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operationIdentifier,
    prev: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEnteries.push(logEntry);
  console.log(logEnteries);
}

function add() {
  const enterNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enterNumber;
  createWriteOutput('+', initialResult, enterNumber);
  writeLog('ADD', initialResult, enterNumber, currentResult);
}

function subtract() {
  const enterNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enterNumber;
  createWriteOutput('-', initialResult, enterNumber);
  writeLog('SUBTRACT', initialResult, currentResult, enterNumber);
}

function multiply() {
  const enterNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enterNumber;
  createWriteOutput('*', initialResult, enterNumber);
  writeLog('MULTIPLY', initialResult, currentResult, enterNumber);
}

function divide() {
  const enterNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enterNumber;
  createWriteOutput('/', initialResult, enterNumber);
  writeLog('DIVIDE', enterNumber, initialResult, currentResult);
}

addB.addEventListener('click', add);
subtractB.addEventListener('click', subtract);
multiplyB.addEventListener('click', multiply);
divideB.addEventListener('click', divide);
