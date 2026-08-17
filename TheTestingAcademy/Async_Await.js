/*
Async/Await : is a cleaner way to write the promises. Instead of chaining 
.then().then().then(), you write code that looks synchronous but works asynchronously. 

It allows you to write asynchronous code in a more readable and maintainable way.

> Callback
> Promise

Async code : Allows a pg to start a long running task (like fetching data from a file) 
and continue with other tasks before the fist one finishes.

Async code prevents the appication from freezing, which is critical for
user experience.


Basically to remove the concept of callback hell, we have promises and to remove
the concept of promise chaining, we have async/await.

Async/Await is a syntactic sugar built on top of promises. It makes asynchronous code
look and behave a little more like synchronous code. 

This is where the async and await keywords come into play.
*/

async function testapi(){
    try {
        let result = await Promise.reject("503 Service Unavailable");
    }
    catch(error){
        console.log("error:"+ error);
    }
    finally{
        console.log("Clear up!!");
    }
}
testapi();