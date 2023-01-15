/**
 * 
 * @param {"
 * ----Big O Notation----
 * 1. To analyze performance of an algorithm, we use Big O Notation
 * 2. Big O Notation can give us high level of understanding of time or space complexity of an algorithms
 * 3. It doesn't care about linear and quadratic constants.
 * 4. Time and space complexity depends only on the algorithm, not the hardware used to run algorithm
 * "} 
 * @param {
 * "-----Simplifying Big O Notations------"
 * "-----Constants Don't Matter----"
 * O(2n) =>wrong ,O(n) =>right,
 * O(500) =>wrong ,O(1) =>right,
 * O(12n^2) =>wrong ,O(n^2) =>right,
 * 
 * "----Smaller Terms Don't Matters-----"
 * O(n+10) =>wrong ,O(n) =>right,
 * O(1000n+50) =>wrong ,O(n) =>right,
 * O(n^2 +5n +8) =>wrong ,O(n^2) =>right,
 * 
 * "--------Big O Shorthands-----------"
 * 1. Arithmetic Operation are constants
 * 2. Varaible assignmant is constant
 * 3. Accessing elements in an array (by index) or Object (by key) is constant
 * 4. In a loop, the complexity is the length of the loop times the complexity
 *    of what ever happens inside of the loop
 * } 
 * O()
 * 
 */


// function printAllPairs(n){
//     for(let i = 0; i<=n; i++){
//         for(let j = 0; j<=n; j++){
//             console.log("i:",i,"j:",j);
//         }
//     }
// }
// function logAtLeast5(n){
//     for(let i =0; i<= Math.max(5,n); i++){
//         console.log("i:",i);
//     }
//     // big O is O(n)
// }
// function logAtMost5(n){
//     for(let i =0; i<= Math.min(5,n); i++){
//         console.log("i:",i);
//     }
//     // big O is O(1)
// }
// var t1 = performance.now()
// console.log("pairs:", logAtLeast5(9))
// var t2 = performance.now()
// console.log(t1,t2)
// console.log(`Time Elapsed: ${(t2-t1)/1000} seconds`)

/**
 * @param {
 * "Space Complexity"
 * "Rules of Thum"
 * 1. Most primitives (boolean,numbers,undefined,null) are constant spaces
 * 2. String require O(n) space (where n is the string length)
 * 3. Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for Objects)
 * }
 */

//  function sum(arr) {
//    let total = 0;
//    for (let i = 0; i < arr.length; i++) {
//      total += arr[i];
//    }
//    return total;
//  }
// console.log("sum:",sum([1,2,3]));

// function double(arr){
//     let newArr = []
//     for(let a = 0; a< arr.length; a++){
//         newArr.push(2*arr[a])
//     }
//     return newArr
//     // O(n) space complexity
// }
// console.log(double([2,3,4,5]));

/**
 * @param {
 * "
 * ------logarithm------
 * 1. we ecountered some of the most common complexities: O(1),O(n),O(n^2)
 * 2. Sometimes big O experssion involve more complex mathematical experssions
 * 3. One that appers more often then you might like logarithm
 * "
 * 
 * }
 */

/**
 *@param {
 * "
 *  ---- Big O tells you worst case scenerio in your code -----
 * ------ O(n)
 * "
 * }
 */

// function findIndexVal(arr,val){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === val){
//             console.log("i:",i,"arr[i]:",arr[i]);
//             return i;
//         }
//     }
//     return -1
// }
// console.log(findIndexVal([1,2,3,4,5,6,7,8,9,10],9));

// function mul_table(N, i){
//     if (i > 10) return 
//     console.log(N + " * " + i + " = " + N * i);
//     return mul_table(N, i + 1);
// }
// console.log(mul_table(2, 1))



// const triangle = { a:1,b:2,c:3 }
// function color(){
//     this.color = "red"
// }
// console.log(color.prototype = triangle);
// const obj = new color()
// console.log(obj);
// for(const prop in obj){
//     if(Object.hasOwn(obj,prop)){
//         console.log(`obj.${prop} = ${obj[prop]}`);
//     }
// }

