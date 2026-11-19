// .filter() = creates a new array containing only the elements
//             that satisfy a specified condition.

// Separates even and odd numbers from the original array.

let numbers = [1, 2, 3, 4, 5, 6, 7];

let evenNums = numbers.filter(isEven);
console.log(evenNums);

let oddNums = numbers.filter(isOdd);
console.log(oddNums);


// Checks whether a number is divisible by 2 with no remainder.
function isEven(element)
{
    return (element % 2 == 0);
}

// Checks whether a number is not divisible by 2 with no remainder.
function isOdd(element)
{
    return (element % 2 == 1);
}


// Filters out people who are adults (18 or older).

const ages = [16, 17, 18, 18, 19, 20, 60];

const adults = ages.filter(isAdult);
console.log(adults);


// Checks whether a person's age meets the legal adult age threshold of 18.
function isAdult(element)
{
    return element >= 18;
}


// Separates words into two groups based on their character length.

const words = ["apple", "orange", "cononut", "pomegranate", "coconut"];

const shortwords = words.filter(getShortWords);
const longwords = words.filter(getLongWords);

console.log(shortwords);
console.log(longwords);


// Selects words containing 5 or fewer characters.
function getShortWords(element)
{
    return element.length <= 5;
}

// Selects words containing more than 5 characters.
function getLongWords(element)
{
    return element.length > 5;
}
