// .filter() = creates a new array by filtering out elements

let numbers = [1, 2, 3, 4, 5, 6, 7];

let evenNums = numbers.filter(isEven);
console.log(evenNums);
let oddNums = numbers.filter(isOdd);
console.log(oddNums);

function isEven(element)
{
    return (element % 2 == 0);
}

function isOdd(element)
{
    return (element % 2 == 1);
}

const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
console.log(adults);

function isAdult(element)
{
    return element >= 18;
}

const words = ["apple", "orange", "cononut", "pomegranate", "coconut"];

const shortwords = words.filter(getShortWords);
const longwords = words.filter(getLongWords);

console.log(shortwords);
console.log(longwords);

function getShortWords(element)
{
    return element.length <= 5;
}

function getLongWords(element)
{
    return element.length > 5;
}