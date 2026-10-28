// forEach() = method used to iterate over the elements
//             of an array and apply a specified funtion (callback)
//             to each element


//             array.forEach(callback);
//             element, index, array are provided

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(triple)
// numbers.forEach(double);
numbers.forEach(display);


function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}


function display(element){
    console.log(element);
}

let fruits = ["Apple", "Banana", "Mango", "Coconut"];

fruits.forEach(uppercase);
fruits.forEach(display);

function uppercase(element, index, array)
{
    array[index] = element.toUpperCase();
}

function lowercase(element, index, array)
{
    array[index] = element.toLowerCase();
}
