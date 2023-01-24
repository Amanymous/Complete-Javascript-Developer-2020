// Here is an example of how you can create a star pattern using the JavaScript map function:

// const numStars = 5;

// // create an array of numbers from 1 to numStars
// const stars = Array.from(Array(numStars).keys(), x => x + 1);

// // use map to transform each element in the array
// const starPattern = stars.map(star => {
//   // create a string with star number of asterisks
//   return '*'.repeat(star);
// }).join('\n');

// console.log(starPattern);

// The map function is a higher-order function that takes an array and a callback function as arguments, and returns a new array with the result of calling the callback function on each element in the original array. In this case, the callback function takes a star number and returns a string of asterisks with that many stars. The join function is used to join the array of strings into a single string, with each string separated by a newline character.


// Here is an example of how you can create a star pattern using the JavaScript reduce function:

// const numStars = 5;

// // create an array of numbers from 1 to numStars
// const stars = Array.from(Array(numStars).keys(), x => x + 1);

// // use reduce to transform the array into a single string
// const starPattern = stars.reduce((pattern, star) => {
//   // add a string with star number of asterisks to the pattern
//   return pattern + '*'.repeat(star) + '\n';
// }, '');

// console.log(starPattern);

// The reduce function is a higher-order function that takes an array and a callback function as arguments, and returns a single value that is the result of calling the callback function on each element in the array. In this case, the callback function takes the pattern accumulator and the star number as arguments, and returns a new string that is the concatenation of the pattern string and a string of asterisks with that many stars, followed by a newline character. The reduce function starts with an initial value of an empty string for the pattern accumulator.


// Here is an example of how you can create a star pattern using the JavaScript forEach function:

// const numStars = 5;

// // create an array of numbers from 1 to numStars
// const stars = Array.from(Array(numStars).keys(), x => x + 1);

// let starPattern = '';

// // use forEach to iterate over the array and add each star pattern to the result string
// stars.forEach(star => {
//   starPattern += '*'.repeat(star) + '\n';
// });

// console.log(starPattern);

// The forEach function is a higher-order function that takes an array and a callback function as arguments, and calls the callback function on each element in the array. In this case, the callback function takes a star number and adds a string with that many asterisks to the starPattern string, followed by a newline character. The forEach function does not return a value, so you need to use a separate variable (in this case, starPattern) to store the result.


// Here is an example of how you can create a diamond pattern using the JavaScript map function:

// const numRows = 5;

// // create an array of numbers from 1 to numRows
// const rows = Array.from(Array(numRows).keys(), x => x + 1);

// // use map to transform each element in the array
// const diamondPattern = rows.map(row => {
//   // calculate the number of spaces and asterisks for this row
//   const numSpaces = Math.abs(numRows - 2 * row);
//   const numAsterisks = 2 * (numRows - numSpaces);

//   // create a string with numSpaces number of spaces, followed by numAsterisks number of asterisks
//   return ' '.repeat(numSpaces) + '*'.repeat(numAsterisks);
// }).join('\n');

// console.log(diamondPattern);

// The map function is a higher-order function that takes an array and a callback function as arguments, and returns a new array with the result of calling the callback function on each element in the original array. In this case, the callback function takes a row number and returns a string with the number of spaces and asterisks required for that row. The join function is used to join the array of strings into a single string, with each string separated by a newline character.