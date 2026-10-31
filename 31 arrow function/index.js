// arrow function =  a concise way to write function expressions
//                   good for simple functions that you use only once
//                   (parameters) => some code

/*
function heello(){         function declaration method
    console.log("Hello"); 
}

hello();

const hello = function(){  function expression method
    console.log("Hello");
}
hello();
*/

const hello = (name, age, Id) => {
                                  console.log(`Hello ${name}`);
                                  console.log(`You are ${age} years old`);
                                  console.log(`Your ID is ${Id}`);
                                 }

hello("Tahsin", 23, "2511769042");

setTimeout(() => console.log("Bye"), 3000);

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((element)=> Math.pow(element, 2));
const cubes = numbers.map((element)=> Math.pow(element, 3));
const evenNums = numbers.filter((element)=> element % 2 == 0);
const oddNums = numbers.filter((element)=> element % 2 == 1);
const total = numbers.reduce((accumulator, element)=> accumulator + element);

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);