// alert('This is working');
const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  const result = num1 + num2;
}
add(1, 2);
add(5, 5);

currentResult = ((currentResult + 10) * 3) / 2 - 1;
let calculationDescription = `( ${defaultResult} +10)*3/2-1`;
outputResult(currentResult, calculationDescription);
