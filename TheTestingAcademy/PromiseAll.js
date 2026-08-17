let checkAuth = Promise.resolve("User is authenticated");
let checkDB = Promise.resolve("Database is connected");
let checkCache = Promise.resolve("Cache is Ok");

Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log(`All checks are fine ! ${results}`);
}).catch(function (error) {  // if no reject in promise, then catch block will not be executed. It will be executed only if there is a reject in any of the promise.
    console.log(`Error in checks are : ${error}`);
})

// -----------------**---------------------------**-------------

Promise.all([
    Promise.resolve("User ok"),
    Promise.reject("DB down"),
    Promise.resolve("ok")

]).then(function(results){
console.log(results)
}).catch(function(error){
console.log(`Failed: ${error}`); //console.log('Failed: ' + error); // console.log('Failed: ', error);
})