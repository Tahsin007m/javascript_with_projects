// forEach() = method used to iterate over the elements
//             of an array and apply a specified function (callback)
//             to each element.
//
// Syntax:
// array.forEach(callback);
//
// Parameters provided to the callback:
// element = current element
// index   = index of the current element
// array   = the original array


// Example 1: Triple Each Number

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(triple);
numbers.forEach(display);

function triple(element, index, array) {
    array[index] = element * 3;
}


// Example 2: Double Each Number

let numbers2 = [1, 2, 3, 4, 5];

numbers2.forEach(double);
numbers2.forEach(display);

function double(element, index, array) {
    array[index] = element * 2;
}


// Example 3: Display Each Element

function display(element) {
    console.log(element);
}


// Example 4: Display Elements with Their Index

let colors = ["Red", "Green", "Blue"];

colors.forEach(showWithIndex);

function showWithIndex(element, index) {
    console.log(`Index ${index}: ${element}`);
}


// Example 5: Uppercase and Lowercase Strings

let fruits = ["Apple", "Banana", "Mango", "Coconut"];

fruits.forEach(uppercase);
fruits.forEach(display);

function uppercase(element, index, array) {
    array[index] = element.toUpperCase();
}

// Convert the fruits to lowercase
fruits.forEach(lowercase);
fruits.forEach(display);

function lowercase(element, index, array) {
    array[index] = element.toLowerCase();
}


// Example 6: Using forEach() with an Arrow Function

let prices = [100, 200, 300];

prices.forEach((element) => {
    console.log(`Price: ${element}`);
});


// Example 7: Calculate the Total

let prices2 = [100, 200, 300];
let total = 0;

prices2.forEach(calculateTotal);

function calculateTotal(element) {
    total += element;
}

console.log(`Total: ${total}`);
