const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subBtn = document.getElementById('btn-sub');
const multBtn = document.getElementById('btn-mult');
const dividBtn = document.getElementById('btn-divid');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
