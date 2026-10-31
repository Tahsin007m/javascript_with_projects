// function declaration = define a resuable block of code
//                        that performs a specific task


// funtion expressions = a way to define funtions as values or variables

const hello = function()
{
    console.log(`Hello`);
}

setTimeout(hello, 3000); // 3000 miliseconds

// Example of returning the squares of numbers

// function declaration

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);

function square(element)
{
    return Math.pow(element, 2);
}

console.log(squares);

// function expression

const sqaures = numbers.map(function(element){
    return Math.pow(element, 2);
})

console.log(sqaures);

const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
})

console.log(cubes);