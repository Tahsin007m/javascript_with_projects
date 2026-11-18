// ES6 Module: An external file containing reusable code.
// It can export variables, functions, classes, and more.
// Introduced in ECMAScript 2015 (ES6).

// Exporting a constant
export const PI = 3.14159;

// Function to calculate circumference of a circle
export function getCircumference(radius) {
    return 2 * PI * radius;
}

// Function to calculate area of a circle
export function getArea(radius) {
    return PI * radius * radius;
}

// Function to calculate volume of a sphere
export function getVolume(radius) {
    return (4 / 3) * PI * Math.pow(radius, 3);
}
