// const = a variable that cant be changed

const PI = 3.14159;
let radius;
let circumference;

//radius = window.prompt("Enter the radius of a circle: ");

// PI = 420.232; // this will not work, because pi is declared as constant above

//radius = Number(radius);

//circumference = 2*PI*radius;

//console.log(circumference);

// only boolean and numbers are declarable as consts, this will not work for strings


document.getElementById("btn").onclick = function(){
      radius = document.getElementById("inp").value;
      radius = Number(radius);
      circumference = 2 * PI * radius;
      document.getElementById("outp").textContent = circumference;
}