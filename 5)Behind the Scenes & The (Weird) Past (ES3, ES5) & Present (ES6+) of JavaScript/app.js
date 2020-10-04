let name = 'aman';
let age = 2;
// let name1 = 'mughal';
if (name === 'aman') {
  let hobbies = ['Sports', 'Cooking'];
  // console.log(hobbies, name);
}

function greet() {
  // ager ma name and age function ky bhar define nai
  // karunga toye error dega ku ky greet() sy phely console.log(name, age);
  let age = 21;
  let name = 'mughal';
  // console.log('greet function:', name, age);
}
// console.log(name, age);
greet();
// ---------------------Task 1---------------------

function getName() {
  return prompt('your name :', ' ');
}
function greet1() {
  const userName = getName();
  console.log('greet1:', userName);
}
greet1();
// ('use strict');
var undefined = 5;
const username = 'abc';
console.log('use strict:', undefined);
// -------------------Task 2-------------------------

const addListnerB = document.getElementById('add-listener-btn');
const inputListnerB = document.getElementById('click-message-input');
const clickListnerB = document.getElementById('clickable-btn');

function printMsg() {
  const value = inputListnerB.value;
  // console.log('click me', value); both are correct use any of them
  console.log(value || 'click me');
}

function addListener() {
  clickListnerB.addEventListener('click', printMsg);
}
addListnerB.addEventListener('click', addListener);

// function printMessage() {
//   const value = inputListnerB.value;
//   console.log(value || 'click me!');
// }

// function addListner() {
//   clickListnerB.addEventListener('click', printMessage);
// }
// addListnerB.addEventListener('click', addListner);
// --------------------Task 3 ----------------------------

const addListnerB1 = document.getElementById('add-listener-btn');
const inputListnerB2 = document.getElementById('click-message-input');
const clickListnerB3 = document.getElementById('clickable-btn');

let person = { name: 'Aman' };

person = null;

function printMsg1() {
  const value1 = inputListnerB2.value;
  console.log(value || 'click me');
}

function addListener1() {
  clickListnerB3.addEventListener('click', function () {
    const value = inputListnerB2.value;
    console.log(value || 'click me');
  });
}

addListnerB1.addEventListener('click', addListener1);
// addListnerB1.addEventListener('click', printMsg1); yee ek dafa print karega
