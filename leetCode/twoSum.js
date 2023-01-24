// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target using javascript

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// function twoSum(nums, target) {
//     const map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//       const complement = target - nums[i];
//       if (map.has(complement)) {
//         return [map.get(complement), i];
//       }
//       map.set(nums[i], i);
//     }
//   }

// This function uses a map to store the complement of each element (target - nums[i]) as the key and the index of the element as the value.
// Then, for each element in the array, it checks if the complement exists in the map. If it does, it returns an array containing the index of the complement and the current index.
// If no such complement exists, it adds the element and its index to the map and continue the loop.

// This implementation has a Time Complexity of O(n) and Space Complexity of O(n)

// It's worth noting that this is a common problem and there are different ways to solve it, but this is one possible solution.


// Here's one way you can solve this problem using the JavaScript reduce() function:
// function twoSum(nums, target) {
//     return nums.reduce((acc, curr, i) => {
//       const complement = target - curr;
//       if (nums.indexOf(complement, i + 1) !== -1) {
//         acc.push(i, nums.indexOf(complement, i + 1));
//       }
//       return acc;
//     }, []);
//   }

// This function uses the reduce() function to iterate through the array and finds the complement of the current element (target - curr) using the indexOf() function.
// It then checks if the complement exists in the array after the current index (by passing in i + 1 as the second argument to indexOf()) and if it does, it pushes the current index and the index of the complement to the accumulator.
// It returns an empty array if no such complement exists.

// This implementation also has a Time Complexity of O(n) and Space Complexity of O(n)

// It's worth noting that using the indexOf function has a Time Complexity of O(n) so this will make the overall Time Complexity of the function O(n^2)

// Both solutions are correct and efficient but the first one is more optimized as it uses a Map data structure.


// Here's one way you can solve this problem using a for loop in JavaScript:
// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//           return [i, j];
//         }
//       }
//     }
//   }

// This function uses nested for loops to iterate through the array, comparing each element with the remaining elements in the array. If the sum of two elements equals the target, it returns an array containing the indices of those elements.

// This implementation has a Time Complexity of O(n^2) and Space Complexity of O(1)

// It's worth noting that this solution is less optimized than the previous solutions as it has a Time Complexity of O(n^2) which can be slow if the array is large.
// The first solution I provided is more optimized as it has a Time Complexity of O(n)
  
// Here's one way you can solve this problem using JavaScript Promises:
// function twoSum(nums, target) {
//     return new Promise((resolve, reject) => {
//       for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//           if (nums[i] + nums[j] === target) {
//             resolve([i, j]);
//           }
//         }
//       }
//       reject("No solution found");
//     });
//   }
//   This function uses nested for loops to iterate through the array, comparing each element with the remaining elements in the array. If the sum of two elements equals the target, it resolves the promise with an array containing the indices of those elements.
//   If no solution is found, it rejects the promise with a message "No solution found"
  
//   You can use this function by chaining a .then() method after calling it, to handle the resolved value, and a .catch() method to handle the rejected value.
// twoSum([1,2,3,4], 6).then(res => console.log(res)).catch(err => console.log(err));
// It's worth noting that this solution is less optimized than the previous solutions as it has a Time Complexity of O(n^2) which can be slow if the array is large.
// Also, it does not add any real benefits in this scenario of solving the problem.
// It's not necessary to use promise in this problem, it can be solved using the other solutions I provided earlier.
  
// Here's one way you can solve this problem using the JavaScript forEach() function:
// function twoSum(nums, target) {
//     let result = [];
//     nums.forEach((num, index) => {
//       let complement = target - num;
//       if (nums.indexOf(complement) > -1 && nums.indexOf(complement) !== index) {
//         result.push(index, nums.indexOf(complement));
//       }
//     });
//     return result;
//   }
// This function uses the forEach() method to iterate through the array, for each element in the array, it finds the complement of the current element (target - num) using the indexOf() function.
// It then checks if the complement exists in the array and if it does, it pushes the current index and the index of the complement to the result array.

// This implementation also has a Time Complexity of O(n^2) and Space Complexity of O(n)

// It's worth noting that using the indexOf function has a Time Complexity of O(n) so this will make the overall Time Complexity of the function O(n^2)

// Both solutions are correct but the first one is more optimized as it uses a Map data structure.

// Here's one way you can solve this problem using a while loop in JavaScript:
// function twoSum(nums, target) {
//     let i = 0, j = nums.length - 1;
//     while (i < j) {
//         if (nums[i] + nums[j] === target) {
//             return [i, j];
//         } else if (nums[i] + nums[j] < target) {
//             i++;
//         } else {
//             j--;
//         }
//     }
// }
// This function uses a two-pointer approach, it starts with two pointers, one at the beginning of the array and the other at the end of the array.
// While the two pointers are pointing to different elements, it checks if the sum of the elements at the two pointers is equal to the target.
// If it is, it returns an array containing the indices of those elements.
// If the sum is less than the target, it moves the left pointer to the right, if the sum is greater than the target, it moves the right pointer to the left.
// The while loop ends when the two pointers point to the same element, at which point no solution is found.

// This implementation has a Time Complexity of O(n) and Space Complexity of O(1)
// It is more optimized than the other solutions that have a Time Complexity of O(n^2)
// It's worth noting that this solution assumes that the array is sorted. If the array is not sorted, it needs to be sorted first before using this solution.


// Here's one way you can solve this problem using the JavaScript map() function:
// function twoSum(nums, target) {
//     let map = new Map();
//     nums.map((num, index) => {
//         let complement = target - num;
//         if (map.has(complement)) {
//             return [map.get(complement), index];
//         }
//         map.set(num, index);
//     });
// }

// This function uses the map() method to iterate through the array and Map data structure to store the complement of each element (target - num) as the key and the index of the element as the value.
// Then, for each element in the array, it checks if the complement exists in the map. If it does, it returns an array containing the index of the complement and the current index.
// If no such complement exists, it adds the element and its index to the map.

// This implementation has a Time Complexity of O(n) and Space Complexity of O(n)

// It's worth noting that the map() function returns a new array with the results of calling a provided function on every element in the calling array. In this case, we are not returning any new array, we are returning an array with the result of the function but it is not being captured.
// You can solve this by returning the result of the map function and storing it in a variable

// let result = nums.map((num, index) => {
//     let complement = target - num;
//     if (map.has(complement)) {
//         return [map.get(complement), index];
//     }
//     map.set(num, index);
// });
// return result[0];
// It's also worth noting that this solution is less optimized than the solution that uses a for loop with a map data structure as it takes more space in terms of memory.

// Here's one way you can solve this problem using multiple JavaScript array functions:

// function twoSum(nums, target) {
//     let map = new Map();
//     return nums.filter((num, index) => {
//         let complement = target - num;
//         if (map.has(complement)) {
//             return true;
//         }
//         map.set(num, index);
//     }).map((num, index) => {
//         return map.get(target - num);
//     });
// }

// This function uses the filter() method to iterate through the array, creating a new array with all elements that pass the test implemented by the provided function.
// It uses the Map data structure to store the complement of each element (target - num) as the key and the index of the element as the value.
// Then, for each element in the array, it checks if the complement exists in the map. If it does, it passes the element to the new array.
// Then it uses the map() method to iterate through the new array, and returns the index of the complement from the map.

// This implementation has a Time Complexity of O(n) and Space Complexity of O(n)

// It's worth noting that this solution uses multiple array functions, but it's not always necessary to use multiple functions to solve a problem.
// It's important to keep the code simple and readable, and use the function that best fits the solution.
// Also, in this solution, the filter function is not really necessary as it doesn't add any value to the solution, you could simply use the map method with the if statement inside the map method.

// function twoSum(nums, target) {
//     let map = new Map();
//     return nums.map((num, index) => {
//         let complement = target - num;
//         if (map.has(complement)) {
//             return [map.get(complement), index];
//         }
//         map.set(num, index);
//     }).filter(val => val !== undefined)[0];
// }

// It's also important to note that if you are using the filter method you need to return the first element of the array, in this case, it is the only element of the array.

// Here's one way you can solve this problem using a single-linked list in JavaScript:

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     addToTail(val) {
//         const newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//     }

//     findTwoSum(target) {
//         let current = this.head;
//         let map = new Map();
//         while (current) {
//             let complement = target - current.val;
//             if (map.has(complement)) {
//                 return [map.get(complement), current];
//             }
//             map.set(current.val, current);
//             current = current.next;
//         }
//     }
// }

// const list = new LinkedList();
// nums.forEach(num => list.addToTail(num));
// list.findTwoSum(target);


// This solution uses a single-linked list to store the elements of the input array, and a Map data structure to store the complement of each element (target - current.val) as the key and the current node as the value.
// Then, using a while loop it iterates through the list, for each node in the list, it checks if the complement exists in the map. If it does, it returns an array containing the current node and the node that contains the complement.

// This implementation has a Time Complexity of O(n) and Space Complexity of O(n)

// It's worth noting that this solution is not as optimized as the previous solutions that use arrays, linked-lists are more commonly used when there is a need for constant insertion or deletion operations.
// In this case, it is not needed to use a linked-list, an array is more than enough.

// It's also important to note that if you are using a singly-linked list, you would have to traverse the entire list in order to find a specific node, whereas with an array you can access any element directly by its index.

// If you still want to use a double-linked list to solve this problem, here's one way you can do it:

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.prev = null;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     addToTail(val) {
//         const newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }
//     }

//     findTwoSum(target) {
//         let current = this.head;
//         let map = new Map();
//         while (current) {
//             let complement = target - current.val;
//             if (map.has(complement)) {
//                 return [map.get(complement), current];
//             }
//             map.set(current.val, current);
//             current = current.next;
//         }
//     }
// }

// const list = new LinkedList();
// nums.forEach(num => list.addToTail(num));
// list.findTwoSum(target);

// This solution uses a double-linked list to store the elements of the input array, and a Map data structure to store the complement of each element (target - current.val) as the key and the current node as the value.
// Then, using a while loop it iterates through the list, for each node in the list, it checks if the complement exists in the map. If it does, it returns an array containing the current node and the node that contains the complement.

// It's worth noting that, as I mentioned earlier, using a double-linked list allows for more efficient traversal in both directions, this can be useful when there is a need for constant insertion or deletion


// convert the problem into switch case and make 10 case 
// It's not straightforward to convert this problem into a switch case, as the problem is asking to find two numbers in an array that add up to a target, and return their indices. There is no single variable that can be used to check multiple cases in a switch statement.

// But, If you still want to use a switch statement to solve this problem, one approach would be to divide the target number by 10, and use the resulting remainder as the case in the switch statement. This way, you can have 10 cases, each representing a range of possible target numbers.

// Here's an example of how you can use a switch statement to divide the target number by 10 and find the two numbers in the array that add up to the target:
// function twoSum(nums, target) {
//     let map = new Map();
//     switch (target % 10) {
//         case 0:
//             for (let i = 0; i < nums.length; i++) {
//                 if (map.has(target - nums[i])) {
//                     return [map.get(target - nums[i]), i];
//                 }
//                 map.set(nums[i], i);
//             }
//             break;
//         case 1:
//             //same as case 0
//             break;
//         case 2:
//             //same as case 0
//             break;
//         //and so on
//         case 9:
//             //same as case 0
//             break;
//         default:
//             console.log("Invalid target number");
//     }
// }

// This approach will work if you have a limited range of target numbers, and you can divide the target number by 10 and use the remainder as the switch case.
// It's worth noting that this approach is


// using switch case with while loop
// It's not straightforward to convert this problem into a switch case, as the problem is asking to find two numbers in an array that add up to a target, and return their indices. There is no single variable that can be used to check multiple cases in a switch statement.

// But, you can use a combination of switch case and while loop to solve this problem.

// Here's an example of how you can use a switch statement to divide the target number by 10 and a while loop to find the two numbers in the array that add up to the target:
// function twoSum(nums, target) {
//     let map = new Map();
//     let i = 0;
//     switch (target % 10) {
//         case 0:
//             while (i < nums.length) {
//                 if (map.has(target - nums[i])) {
//                     return [map.get(target - nums[i]), i];
//                 }
//                 map.set(nums[i], i);
//                 i++;
//             }
//             break;
//         case 1:
//             //same as case 0
//             break;
//         case 2:
//             //same as case 0
//             break;
//         //and so on
//         case 9:
//             //same as case 0
//             break;
//         default:
//             console.log("Invalid target number");
//     }
// }
// As you can see, the while loop is used to iterate through the array, and for each element in the array, it checks if the complement exists in the map. If it does, it returns an array containing the index of the complement and the current element.

// It's worth noting that this approach is not an optimal solution, as the switch case is not necessary here and it doesn't add any value to the solution.
// It's important to keep the code simple and readable, and use the function that best fits the


// using try catch and finally
// The try-catch-finally statement in JavaScript is used to handle exceptions and errors that may occur during the execution of a program. It allows you to handle errors in a structured and predictable way, without allowing them to crash the program.

// Here's an example of how you can use try-catch-finally statement to solve this problem:
// function twoSum(nums, target) {
//     try {
//         let map = new Map();
//         for (let i = 0; i < nums.length; i++) {
//             let complement = target - nums[i];
//             if (map.has(complement)) {
//                 return [map.get(complement), i];
//             }
//             map.set(nums[i], i);
//         }
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log("The function has completed execution");
//     }
// }

// n this example, the try block contains the code that may throw an exception, in this case, it's iterating through the array and checking for the complement of each element. If an exception is thrown, the catch block will catch it, and log the error to the console. The finally block will always execute regardless of whether an exception is thrown or not.

// It's worth noting that in this problem, you don't need to use try-catch-finally statement, as there's no code that could throw an exception. You only need to use the try-catch-finally statement when you are handling exceptions that may occur.

// In summary, try-catch-finally is a way to handle exceptions and errors in JavaScript and it's not necessary to solve this problem.

// It's important to use try-catch-finally only when it's necessary to handle exceptions and errors to keep the code simple and readable.



// try to solve this problem minimum line of code 

// You can solve this problem using a minimal amount of code by using a Map data structure and one line of code to check for the complement of each element and return the indices if it exists. Here's an example:

// function twoSum(nums, target) {
//     let map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(target - nums[i])) return [map.get(target - nums[i]), i];
//         map.set(nums[i], i);
//     }
// }

// In this example, we are using a Map data structure to store the elements of the input array, and the index of each element as a value. Then, using a for loop, we iterate through the array, for each element in the array, we check if the complement of that element exists in the map. If it does, we return an array containing the index of the complement and the current element.

// This solution uses a Map data structure which has a Time Complexity of O(n) and Space Complexity of O(n).

// It's important to keep in mind that, when trying to write minimal code, it's also important to make sure that the code is readable and maintainable. A more minimalistic code may not always be the best choice if it becomes harder to understand and maintain.


// can you solve this problem in 3 line of code

// Yes, it is possible to solve this problem in 3 lines of code. Here's an example:

// const twoSum = (nums, target) => nums.map((n, i) => [n, i]).filter(([n, i]) => nums.indexOf(target - n) !== i).pop();

// This solution uses the Array.prototype.map() method to create a new array that contains the value and index of each element in the input array, then it uses the Array.prototype.filter() method to filter out the elements that don't have a complement in the array, finally it uses Array.prototype.pop() method to return the last element of the filtered array, which is the pair of numbers that add up to the target.

// This solution uses the Array.prototype.indexOf() method which has a Time Complexity of O(n) in the worst case, and the .filter() and .map() method have a Time Complexity of O(n) too.

// It's important to keep in mind that, when trying to write minimal code, it's also important to make sure that the code is readable and maintainable. A more minimalistic code may not always be the best choice if it becomes harder to understand and maintain.

// It's worth noting that this solution is less efficient than the previous one that uses a Map data structure and it's less clear in terms of the algorithm it follows.



// in one line code
// It is possible to solve this problem in one line of code by chaining multiple array methods together, however, it may not be the most readable solution and it may be harder to understand and maintain. Here's an example:

// const twoSum = (nums, target) => nums.map((n, i) => [i, target - n]).filter(nums.includes.bind(nums))[0];

// This solution uses the Array.prototype.map() method to create a new array that contains the index and complement of each element in the input array, then it uses the Array.prototype.filter() method to filter out the elements that don't have a complement in the array, and finally it returns the first element of the filtered array, which is the pair of numbers that add up to the target.

// This solution uses the Array.prototype.map() and Array.prototype.filter() method which have a Time Complexity of O(n) and the Array.prototype.includes() method which has a Time Complexity of O(n) in the worst case.

// It's important to keep in mind that, when trying to write minimal code, it's also important to make sure that the code is readable and maintainable. A more minimalistic code may not always be the best choice if it becomes harder to understand and maintain.

// In this case, the one-liner solution is not the best option as it's hard to understand and maintain, it's not clear what it's doing, and it's less efficient than the previous solutions.

// This solution uses the Array.prototype.map() and Array.prototype.filter() method which have a Time Complexity of O(n) and the Array.prototype.includes() method which has a Time Complexity of O(n) in the worst case.

// It's important to keep in mind that, when trying to write minimal code, it's also important to make sure that the code is readable and maintainable. A more minimalistic code may not always be the best choice if it becomes harder to understand and maintain.

// In this case, the one-liner solution is not the best option as it's hard to understand and maintain, it's not clear what it's doing, and it's less efficient than the previous solutions.


