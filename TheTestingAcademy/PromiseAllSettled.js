Promise.allSettled([    //allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.
    Promise.resolve("API 200"),  // allSettled() - it does not matter what the status of the promise is, it will return the status of all promises, whether it is resolved or rejected.
    Promise.reject("API 500"),
    Promise.resolve("API 201")
])
    .then(function (results) {
        results.forEach(function (r) {
            console.log(r);
        });
    });


