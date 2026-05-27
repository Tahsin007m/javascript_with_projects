// Arithmetic Operators = + - * / % 
// Arithmetic operators are used to perform math operations on numbers

let students = 30;

console.log("Initial number of students:", students);

// Addition (+)
// Adds a value to the variable
students += 1;   // same as: students = students + 1
console.log("After adding 1 student:", students);

// Subtraction (-)
// Subtracts a value from the variable
students -= 2;   // same as: students = students - 2
console.log("After removing 2 students:", students);

// Multiplication (*)
// Multiplies the variable by a value
students *= 2;   // same as: students = students * 2
console.log("After doubling students:", students);

// Division (/)
// Divides the variable by a value
students /= 3;   // same as: students = students / 3
console.log("After dividing by 3:", students);

// Exponent (**)
// Raises the number to a power
students = students ** 2;   // same as: students = students * students
console.log("After squaring the number:", students);

// Modulus (%)
// Gives the remainder after division
students = students % 5;
console.log("Remainder when divided by 5:", students);

// Extra Examples ----------------------------

// Increment Operator (++)
// Increases value by 1
students++;
console.log("After increment (++):", students);

// Decrement Operator (--)
// Decreases value by 1
students--;
console.log("After decrement (--):", students);

// Order of Operations (PEMDAS)
// Parentheses, Exponents, Multiplication, Division, Addition, Subtraction

let result = 1 + 2 * 3; 
console.log("1 + 2 * 3 =", result); // multiplication happens first

result = (1 + 2) ** 3 + 5;
console.log("(1 + 2) * 3 =", result); // parentheses happen first

// Final value
console.log("Final value of students:", students);


// for equations the order will be 
/* 
   operator precedence
   1. parenthesis()
   2. exponents
   3. multiplication and division and modulo
   4. addition and substraction
 */