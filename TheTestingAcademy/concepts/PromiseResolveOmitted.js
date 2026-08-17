// -------**---------------------------**----------
// omitted then block code looks like below :

let testRun2 = new Promise(function (resolve, reject) {
    reject("Assertion failed terribly !!");
})

testRun2.catch(function (message) {
    console.log(`test run 2: ${message}`);
});

// -------**---------------------------**----------
//scenario: No resolve in the promise, so what will happen??

let testRun3 = new Promise(function (resolve, reject) {
    reject("\nAssertion failed third time !!");
})

testRun3.then(function (message) {  // we can also omit then block as there is no resolve in the promise. But if we have then block, it will be ignored as there is no resolve.
    console.log(message);
}).catch(function (message) {
    console.log(message);
})
