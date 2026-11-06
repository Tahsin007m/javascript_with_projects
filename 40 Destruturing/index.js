// destructuring = extract values from arrays and objects.
//                 then assign them to variables in a convenient way
//                 [] = to perform array destructuring 
//                 {} = to perform object destructuring
//                 5 examples


// ------------- EXAMPLE-1 --------------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;


console.log(a);
console.log(b);


[a, b] = [b, a]; // you can also write any numbers or values

console.log(a);
console.log(b);

// ------------- EXAMPLE-2 --------------
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "blue", "green", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

// ------------- EXAMPLE-3 --------------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const [firstcolor, secondcolor, thirdcolor, ...extracolors] = colors;

console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);

console.log(extracolors);

// ------------- EXAMPLE-4 --------------
// EXTRACT VALUES FROM OBJECT

const person1 = {
    firstName: "Syed",
    lastName: "Reza",
    age: 23,
    job: "Dish washer",
}

const person2 = {
    firstName: "Rishan",
    lastName: "Jaman",
    age: 22,
}

const{firstName, lastName, age, job} = person1;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// ------------- EXAMPLE-5 --------------
// DISTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job = "Unempolyed"}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`AGE: ${age}`);
    console.log(`OCCUPATION: ${job}`);
}

displayPerson(person1);
displayPerson(person2);
