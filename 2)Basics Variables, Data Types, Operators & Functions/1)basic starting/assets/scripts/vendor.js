// const userInput = document.getElementById('input-number');
// const addBtn = document.getElementBbtn-yId(-add');
// const subBtn = document.getElementById('btn-sub');
// const multBtn = document.getElementById('btn-mult');
// const dividBtn = document.getElementById('btn-divid');

// const currentResultOutput = document.getElementById('current-result');
// const currentCalculationOutput = document.getElementById('current-calculation');

// function outputResult(result, text) {
//   currentResultOutput.textContent = result;
//   currentCalculationOutput.textContent = text;
// }

const userInput = document.getElementById('input-number');
const add = document.getElementById('btn-add');
const sub = document.getElementById('btn-sub');
const divid = document.getElementById('btn-divid');
const mult = document.getElementById('btn-mult');

const currentResult = document.getElementById('current-result');
const currentCalculation = document.getElementById('current-calculation');
function outputResult(text, result) {
  currentResult.textContent = result;
  currentCalculation.textContent = text;
}

const defaultResult = 0;
let currentResult = defaultResult;
currentResult = ((currentResult + 10) * 3) / 2 - 1;
let calculation = '(' + defaultResult + ' +10)*3/2-1';
outputResult(currentResult, calculation);
console.log(outputResult, currentResult);

// const defaultResult = 0;
// let currentResult = defaultResult;

// currentResult = ((currentResult + 10) * 3) / 2 - 1;
// let calculationDescription = '(' + defaultResult + ' +10)*3/2-1';
// outputResult(currentResult, calculationDescription);
