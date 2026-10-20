// VARIABLE SCOPE = where a variable is recognized and accessible
// Two main types: global and local

// 1. GLOBAL SCOPE
// Declared outside any function, accessible everywhere
let x = 0;

function function1() {
    // 2. LOCAL SCOPE
    // Declared inside a function, only accessible in that function
    let x = 1;
    console.log(x);   // 1 (local x)
}

function function2() {
    let x = 2;        // separate from function1's x
    console.log(x);   // 2 (local x)
}

function function3() {
    console.log(x);   // 0 (no local x, so it uses the global x)
}

function1();          // 1
function2();          // 2
function3();          // 0
console.log(x);       // 0 (global x is unchanged)

// 3. LOCAL VARIABLES CAN'T BE USED OUTSIDE THEIR FUNCTION
function function4() {
    let y = 10;
}
// console.log(y);    // ERROR: y is not defined
