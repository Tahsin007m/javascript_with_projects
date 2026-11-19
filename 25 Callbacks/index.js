/*
    CALLBACK = A function passed as an argument to another function,
    so that the other function can call it.

    Callbacks are commonly used for:
    1. Timers
    2. Reading files
    3. Network requests
    4. Database operations
*/

//===== Example 1: BASIC CALLBACK =====

function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // calling the function that was passed in
}

function sayBye() { // this is the callback function that will be passed
  console.log("Goodbye!"); // in greet function
}

greet("Tahsin", sayBye); // Tahsin passed in name, sayBye passed as callback


//===== Example 2: CALLBACK WITH PARAMETERS =====

sum(displayConsole, 1, 2); // Calls sum() and passes displayConsole as a callback

// Adds two numbers and passes the result to the callback function
function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) { // callback 
    console.log(result);
}


//===== Example 3: Using a Different Callback =====

sum(displayMessage, 5, 10); // passing displayMessage as callback to the same sum function

function displayMessage(result) {
    console.log(`The sum is: ${result}`);
}


// Example 4: Asynchronous Callback using setTimeout()

function finish() {
    console.log("Task completed!");
}

console.log("Task started...");

// finish is the callback function, executed after a 2-second delay
setTimeout(finish, 2000);

console.log("Task is running...");


// Small Excercise

function processUser(name, callback) // takes a name and a callback
{
    const message = `Welcome, ${name}!`; // prints the message
    callback(message); // message is passed through an callback function for some modifications
}

function shout(message)
{
    console.log(message.toUpperCase()); // updates to upper case
}

function whisper(message)
{
     console.log(message.toLowerCase()); // updates to lower case
}

processUser("Tahsin", shout);   // WELCOME, TAHSIN!
processUser("Tahsin", whisper); // welcome, tahsin!
