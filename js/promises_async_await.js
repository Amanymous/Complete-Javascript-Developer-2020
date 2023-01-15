// const promise1 = Promise.resolve("yoo")
// promise1.then(data => {
//     console.log("Promises Done", data);
// }).catch(err => {
//     console.log("Error", err);
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout((data) => {
//         reject("set tome out", data)
//     }, 2000)
// })
// promise2.then(data=>{
//     console.log("promise success:",data);
// }).catch(err=>{
//     console.log("Error is:",err);
// })

// console.log(promise1,promise2);

/**
 * @Synchronous
 * most code is synchronous.
 * synchronous code is executed line by line
 * Each line of code waits for provious line to finish
 * long running operations block the code of execution.
 * 
 * @Asynchronous
 * Asynchronous code is executed after a task that runs in the "background" finishes.
 * Asynchronous code is non blocking 
 * Execution doesn't wait for an asynchronous task tp finish its work
 * Callback does not automatically make code asynchronous [1,2,3,4].map(a=>a*2) it will run when pervious 
 * line code is executed
 * EventListener does not automatically makes code asynchronous 
 * 
 * @AJAX
 * Asynchronous Javascript and XML:Allow us to communicate with remote
 * web servers in an asynchronous way.With AJAX calls, we can request
 * data from web servers dynamically.
 * 
 */