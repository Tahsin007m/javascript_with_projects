/*
    CALLBACK = A function passed as an argument to another function,
    so that the other function can call it.

    Callbacks are commonly used for:
    1. Timers
    2. Reading files
    3. Network requests
    4. Database operations
*/

// Example 1: Basic Callback

Hello(wait);

function Hello(callback) {
    console.log("Hello");
    callback();
}

function wait() {
    console.log("Please wait");
}

function leave() {
    console.log("Leave");
}

function GoodBye() {
    console.log("Good Bye");
}


// Example 2: Callback with Parameters

sum(displayConsole, 1, 2);

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}


// Example 3: Using a Different Callback

sum(displayMessage, 5, 10);

function displayMessage(result) {
    console.log(`The sum is: ${result}`);
}


// Example 4: Asynchronous Callback using setTimeout()

function finish() {
    console.log("Task completed!");
}

console.log("Task started...");

setTimeout(finish, 2000);

console.log("Task is running...");
