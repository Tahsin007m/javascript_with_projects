// RANDOM NUMBER GENERATOR

// let randomNum = Math.random(); // will generate between 0 and 1

// let num = Math.floor(Math.random() * 100 + 1);

// Get references to the HTML elements so we can interact with them
const mybutton = document.getElementById("btn");      // The "Roll" button
const mylabel1 = document.getElementById("label1");   // Displays the first dice result
const mylabel2 = document.getElementById("label2");   // Displays the second dice result
const mylabel3 = document.getElementById("label3");   // Displays the third dice result

// Define the range of the dice (a standard 6-sided die)
const min = 1;   // Lowest possible roll
const max = 6;   // Highest possible roll

// Variables to store the three random numbers
let randomNum1;
let randomNum2;
let randomNum3;

// This function runs every time the "Roll" button is clicked
mybutton.onclick = function(){
    // Math.random() gives a decimal from 0 up to (but not including) 1.
    // Multiplying by max gives a decimal from 0 up to 6.
    // Math.floor() rounds down to a whole number (0 to 5).
    // Adding min shifts the range to 1 through 6.
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;

    // Display each random number on the page inside its label
    mylabel1.textContent = randomNum1;
    mylabel2.textContent = randomNum2;
    mylabel3.textContent = randomNum3;
}