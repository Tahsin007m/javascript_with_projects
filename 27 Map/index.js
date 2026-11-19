// .map() = accepts a callback and applies that function
//          to each element of an array, then return a new array
// map() transforms each array element and returns a new array
// The original array remains unchanged

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

// Callback function: receives each element and returns its square
function square(element){
    return Math.pow(element, 2);
}

// Callback function: receives each element and returns its cube
function cube(element){
    return Math.pow(element, 3);
}

console.log(squares);
console.log(cubes);


const students = ["Tahsin", "Rafid", "Towheed"];

// Passing different callback functions to transform string elements
const studentsUpper = students.map(uppercase);
const studentsLower = students.map(lowercase);

// Converts each string element into uppercase
function uppercase(element)
{
    return element.toUpperCase();
}

// Converts each string element into lowercase
function lowercase(element)
{
    return element.toLowerCase();
}

console.log(studentsUpper);
console.log(studentsLower);


// Small Exercise

const priceUSD = [10, 25, 40, 5];

// Converts each USD price into BDT using the exchangeRate callback
const priceBDT = priceUSD.map(exchangeRate);

// Uses both element and index parameters to generate individual item labels
// index starts from 0, so adding 1 gives the actual item number
const label = priceBDT.map((value, index) => `Item ${index + 1}: ${value} BDT`);

// Callback function: multiplies each USD value by the exchange rate
function exchangeRate(number){
    return number * 120;
}

console.log(priceBDT);
console.log(label);
