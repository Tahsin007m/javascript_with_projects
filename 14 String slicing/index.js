// string slicing = creating a substring from a portion of another string
// string.slice(start, end) -> end is NOT included

const fullName = "Tahsin Reza";

// start and end
let firstName = fullName.slice(0, 6);
console.log(firstName); // Tahsin

let lastName = fullName.slice(7, 11);
console.log(lastName); // Reza

// only start -> slices to the end of the string
console.log(fullName.slice(7)); // Reza

// negative start -> counts from the end
console.log(fullName.slice(-4)); // Reza

// negative end -> stops that many characters before the end
console.log(fullName.slice(0, -5)); // Tahsin

// start and negative end together
console.log(fullName.slice(2, -2)); // hsin Re

// no arguments -> copies the whole string
console.log(fullName.slice()); // Tahsin Reza

// using indexOf() to slice without hardcoding numbers
let spaceIndex = fullName.indexOf(" ");
console.log(fullName.slice(0, spaceIndex)); // Tahsin
console.log(fullName.slice(spaceIndex + 1)); // Reza