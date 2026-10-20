// array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];

// console.log(fruits[0]);

fruits.push("coconut");
fruits.pop();
fruits.unshift("mango");
fruits.shift();

let num = fruits.length;
let index = fruits.indexOf("mango");

console.log(index);

fruits.sort();
fruits.reverse();

for(let i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]);
}
