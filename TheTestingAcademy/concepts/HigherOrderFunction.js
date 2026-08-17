/*Higher Order Function
A function that takes another function as an argument or returns a function.
*/

function runWithLogin(testFn, testName){
    let result = testFn();
    return result;
}

function loginPassedTest(){
    return "Login successful";
}

function loginFailedTest(){
    return "Login failed";
}

let resultOfRunWithLogin = runWithLogin(loginPassedTest, "Login Test");
console.log(resultOfRunWithLogin);

let resultOfRunWithLogin2 = runWithLogin(loginFailedTest, "Login Failed Test");
console.log(resultOfRunWithLogin2);