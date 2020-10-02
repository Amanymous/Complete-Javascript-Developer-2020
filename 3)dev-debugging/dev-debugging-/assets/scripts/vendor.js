// const usrInput = document.getElementById('input-number');
// const addBtn = document.getElementById('btn-add');
// const subtractBtn = document.getElementById('btn-subtract');
// const multiplyBtn = document.getElementById('btn-multiply');
// const divideBtn = document.getElementById('btn-divide');

// const currentResultOutput = document.getElementById('current-result');
// const currentCalculationOutput = document.getElementById('current-calculation');

// function outputResult(result, text) {
//   currentResultOutput.textContent = result;
//   currentCalculationOutput.textContent = text;
// }

// -------------------------------------------------

const userInput = document.getElementById('input-number');
const addB = document.getElementById('btn-add');
const subtractB = document.getElementById('btn-subtract');
const multiplyB = document.getElementById('btn-multiply');
const divideB = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function OutputResult(text, result) {
  currentCalculationOutput.textContent = text;
  currentResult.textContent = result;
}
