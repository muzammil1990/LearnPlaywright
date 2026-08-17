let order = new Promise(function (resolve, reject) { // promise parameter is a callback funtion i.e. a function which will be called. 

    let foodReady = false;
    if (foodReady) {
        resolve("Burger will be delivered. Food is ready");
    } else {
        reject("Sorry! order rejected due to rain!!");
    }
})

order.then(function (message) { //then = means used for resolve
    console.log(message);

}).catch(function (message) { //catch = means used for reject
    console.log(message);
});


let p = new Promise(function (resolve, reject) {
    reject ("Something broke");
})
p.then(function (message) {
    console.log(message);
}).catch(function(err){
    console.log("Caught: " + err);
})