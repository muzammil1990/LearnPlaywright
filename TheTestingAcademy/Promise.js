let order = new Promise(function (resolve, reject) {  // promise parameter is a callback funtion i.e. a function which will be called. 
    let foodready = false; //true
    if (foodready) {
        resolve("Burger will be delivered.Food is ready");
    } else {
        reject("Sorry! order rejected due to rain!!");
    }
})

// console.log(order);

order.then(function (message) { //then = means used for resolve
    console.log(message);
});