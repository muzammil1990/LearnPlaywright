/*
Closures: A closure is when an inner function remembers variables from its outer function
even after the outer function has finished executing. 

This allows the inner function to access those variables whenever it is called, creating
a private scope for those variables. 

Closures are commonly used in JavaScript for data encapsulation and to create functions
with persistent state.
*/

function outer(){
    let message = "Hello";
    console.log("outer called");
    function inner(){
        console.log(message);
    }
    return inner; // return the inner function
}

let innerFunc = outer(); // call the outer function and get the inner function
console.log(innerFunc); // it will print the function definition, not the message,
                        //  because we are not calling it, just printing the function reference.
innerFunc(); // call the inner function, it still has access to the message variable

// inner();