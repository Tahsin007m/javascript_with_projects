// Logical operators are used to combine or manipulate
// boolean values (true or false).
//
//   AND = &&   -> true only if BOTH sides are true
//   OR  = ||   -> true if AT LEAST ONE side is true
//   NOT = !    -> flips true to false, and false to true

// 1. AND (&&)

let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive!");
} else {
    console.log("You cannot drive.");
}

// 2. OR (||)

let isStudent = false;
let isSenior = true;

if (isStudent || isSenior) {
    console.log("You get a discount!");
} else {
    console.log("No discount available.");
}


// 3. NOT (!)


let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in.");
} else {
    console.log("Welcome back!");
}


// --------------------------------------------
// 4. COMBINING OPERATORS
// --------------------------------------------
// Order: NOT runs first, then AND, then OR.
// Use parentheses () to control the order.
console.log("--- COMBINING ---");
let isWeekend = true;
let isHoliday = false;
let isRaining = true;

let canGoOutside = (isWeekend || isHoliday) && !isRaining;
console.log("Can go outside?", canGoOutside);   // false


// --------------------------------------------
// 5. SHORT-CIRCUITING (bonus)
// --------------------------------------------
// JavaScript stops checking as soon as it knows the result.
console.log("--- SHORT-CIRCUITING ---");

// && returns the first falsy value (or the last value if all are truthy)
console.log(false && "hello");      // false
console.log(true && "hello");       // "hello"

// || returns the first truthy value (or the last value if all are falsy)
console.log("" || "default");       // "default"
console.log("Tahsin" || "default"); // "Tahsin"

// Common use: set a default value
let username = "";
let displayName = username || "Guest";
console.log(displayName);           // "Guest"

