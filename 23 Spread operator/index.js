// spread operator = ...allows an iterable succh as an array
//                   or string to be expanded
//                   into seperate elements
//                   (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];

let maximum = Math.max(...numbers);

let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);

let username = "TAHSIN";

let letters = [...username];

console.log(letters);

let join_char = [...username].join("-");

console.log(join_char);

let fruits = ["apple", "orange", "banana"];
let veggies = ["carrots", "potatoes", "tomato"];

let foods = [...fruits, ...veggies];

console.log(foods);
