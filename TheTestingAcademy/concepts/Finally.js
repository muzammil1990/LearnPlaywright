let testRun = new Promise(function (resolve, reject) { // promise parameter is a callback funtion i.e. a function which will be called. 

    let apiCall = true; //false
    if (apiCall) {
        resolve("API call successful");
    } else {
        reject("API call failed");
    }
})

testRun.then(function (message) {
    console.log(message);
}).catch(function (message) {
    console.log(message);
}).finally(function () {
    console.log("this finally block will be executed always. Now API call is completed");
})








