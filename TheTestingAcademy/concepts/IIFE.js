// IIFE = Immedialely Invoked Function Expression

(function(){
    console.log("I am IIFE");
})();  // wrap it and call it

// its not reusbale, it is just a function that runs once and then disappears.

//arrow function can be use IIFE too
(() => {
    console.log("I am IIFE_ Arrow function");
})();