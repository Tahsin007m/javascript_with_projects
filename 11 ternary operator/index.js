// ternary operator = a shortcut to if{} and else{} statements
//                    helpes to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse

let age = 20;
  
let ageCheck = age>=18 ? "You are an adult":"You are not an adult";
console.log(ageCheck);

let time = 9;
let greeting = time < 12 ? "Good morning!":"Good afternoon!";
console.log(greeting);

let isStudent = false;
let message = isStudent ? "You are a student":"You are not a student";
console.log(message);

let purchaseAmount = 15;
let discount = purchaseAmount >= 100 ? 10:0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount)/100}`);