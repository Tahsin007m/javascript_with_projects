// variable = Container to store a value
//            Behaves as if it were the value it contains


// 1. declaration     let x;
// 2. assingment      x = 100;
// so here variable x contains value 100

let x;

x = 100;

console.log(x);

// data types

let age = 25;
let name = "Tahsin";
let GPA = 3.02;
let student = true;

console.log(`Student Name: ${name}`);
console.log(`Student age: ${age}`);
console.log(`Grade Point Average: ${GPA}`);
console.log(`Enrolled: ${student}`);


console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(GPA));
console.log(typeof(student));


document.getElementById("p1").textContent = `My name is ${name}`;
document.getElementById("p2").textContent = `My age is ${age}`;
document.getElementById("p3").textContent = `My current GPA is ${GPA}`;


