// type conversion = change the datatype of a value to another datatype
// data types in JS are numbers strings, boolean

let age = window.prompt("How old are you? ");
age = Number(age); // without this it will just add 1 after the input you write

age+=1;  // increment by 1

console.log(age); 
console.log(typeof(age));

// assinging 3 varaibles with the string value pizza

let x = "pizza";
let y = "pizza";
let z = "pizza";

// converting those 3 string into number string and boolean

x = Number(x);
y = String(y);
z = Boolean(z);

// printing to see the results

console.log(x, typeof(x));  // NAN = not a number
console.log(y, typeof(y));  
console.log(z, typeof(z));  // only returns false when value is empty