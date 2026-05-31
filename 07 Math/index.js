// Math = built-in object that provides mathematical constants and functions

let x = 3.21;
let y = 2;
let z;

// =====================
// PROPERTIES (Constants)
// =====================

Math.E;         // Euler's number (~2.718)
Math.LN10;      // Natural log of 10
Math.LN2;       // Natural log of 2
Math.LOG10E;    // Base-10 log of E
Math.LOG2E;     // Base-2 log of E
Math.PI;        // Pi (~3.14159)
Math.SQRT1_2;   // Square root of 1/2
Math.SQRT2;     // Square root of 2

// =====================
// ROUNDING METHODS
// =====================

Math.round(x);  // Rounds to nearest integer
Math.floor(x);  // Rounds down
Math.ceil(x);   // Rounds up
Math.trunc(x);  // Removes decimal part
Math.fround(x); // Nearest 32-bit float

// =====================
// ABSOLUTE & SIGN
// =====================

Math.abs(x);    // Absolute value
Math.sign(x);   // Returns sign (-1, 0, 1)

// =====================
// POWERS & ROOTS
// =====================

Math.pow(x, y); // x raised to the power y
Math.sqrt(x);   // Square root
Math.cbrt(x);   // Cube root

// =====================
// EXPONENTIAL & LOGARITHMIC
// =====================

Math.exp(x);    // e^x
Math.expm1(x);  // e^x - 1

Math.log(x);    // Natural logarithm
Math.log10(x);  // Base-10 logarithm
Math.log2(x);   // Base-2 logarithm
Math.log1p(x);  // log(1 + x)

// =====================
// TRIGONOMETRIC
// =====================

Math.sin(x);    // Sine
Math.cos(x);    // Cosine
Math.tan(x);    // Tangent

Math.asin(x);   // Arc sine
Math.acos(x);   // Arc cosine
Math.atan(x);   // Arc tangent
Math.atan2(y, x); // Arc tangent of y/x

// =====================
// HYPERBOLIC
// =====================

Math.sinh(x);   // Hyperbolic sine
Math.cosh(x);   // Hyperbolic cosine
Math.tanh(x);   // Hyperbolic tangent

Math.asinh(x);  // Inverse hyperbolic sine
Math.acosh(x);  // Inverse hyperbolic cosine
Math.atanh(x);  // Inverse hyperbolic tangent

// =====================
// MIN & MAX
// =====================

Math.min(x, y); // Smallest value
Math.max(x, y); // Largest value

// =====================
// RANDOM
// =====================

Math.random();  // Random number between 0 and 1

// Random integer examples:
// Math.floor(Math.random() * 10) + 1;

// =====================
// MULTIPLICATION & DIVISION HELPERS
// =====================

Math.imul(x, y);    // 32-bit integer multiplication
Math.clz32(x);      // Count leading zero bits in 32-bit integer

// =====================
// REMAINDER & DISTANCE
// =====================

Math.hypot(x, y);   // √(x² + y²)

// Example:
// Math.hypot(3, 4); // 5

// =====================
// NUMBER COMPARISON
// =====================

Math.fround(x); // Returns nearest 32-bit floating point representation

// =====================
// MODERN ES6+ METHODS
// =====================

Math.cbrt(x);   // Cube root
Math.clz32(x);  // Leading zero count
Math.expm1(x);  // e^x - 1
Math.fround(x); // 32-bit float rounding
Math.hypot(x);  // Square root of sum of squares
Math.imul(x,y); // 32-bit integer multiplication
Math.log1p(x);  // log(1 + x)
Math.log10(x);  // Base-10 logarithm
Math.log2(x);   // Base-2 logarithm
Math.sign(x);   // Sign of number
Math.sinh(x);   // Hyperbolic sine
Math.cosh(x);   // Hyperbolic cosine
Math.tanh(x);   // Hyperbolic tangent
Math.asinh(x);  // Inverse hyperbolic sine
Math.acosh(x);  // Inverse hyperbolic cosine
Math.atanh(x);  // Inverse hyperbolic tangent
Math.trunc(x);  // Remove fractional part

// =====================
// EXAMPLE
// =====================

z = Math.round(x);

 console.log(z);

console.log(Math.E);