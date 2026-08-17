//To remember: 
// Whenever there is any function which is returning a promise, we need to use <await> keyword
//  to get the result of that promise. If we don't use await, then the result will be a 
// pending promise and not the actual result of that promise.

function getToken() {  // this function is getting called from another function hence called callback function.
    return Promise.resolve("abc123");
}

async function run() {
    console.log(await getToken());
}

run();

/*
PLAYWRIGHT
page.goto() -- returns a promise, so we need to use await keyword to get the result of that promise.
await page.goto("https://www.google.com");
*/