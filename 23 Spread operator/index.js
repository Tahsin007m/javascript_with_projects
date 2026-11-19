// SPREAD OPERATOR (...)
// Expands an iterable (such as an array or string) into individual elements.
// Basically, it unpacks elements.

let numbers = [1, 2, 3, 4, 5]; // An array containing five numbers

let maximum = Math.max(...numbers); // Spreads the array elements as arguments and returns the largest number

let minimum = Math.min(...numbers); // Spreads the array elements as arguments and returns the smallest number

console.log(...numbers); // Prints all array elements individually
console.log(maximum);    // Prints the largest number (5)
console.log(minimum);    // Prints the smallest number (1)


let username = "TAHSIN"; // A string containing the username

let letters = [...username]; // Spreads the string into individual characters and stores them in an array

console.log(letters); // Prints each character as a separate array element


let join_char = [...username].join("-"); // Spreads the string into characters, then joins them using a hyphen (-)

console.log(join_char); // Prints T-A-H-S-I-N


let fruits = ["apple", "orange", "banana"]; // An array containing fruit names

let veggies = ["carrots", "potatoes", "tomato"]; // An array containing vegetable names

let foods = [...fruits, ...veggies]; // Combines both arrays by spreading their elements into a new array

console.log(foods); // Prints the combined array of fruits and vegetables
