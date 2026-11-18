// Importing specific variables and functions from another module
import {
    PI,
    getCircumference,
    getArea,
    getVolume
} from './mathUtil.js';

const radius = 10;

// Display the value of PI
console.log(`Value of PI: ${PI}`);

// Calculate and display circumference
console.log(`Circumference: ${getCircumference(radius)} cm`);

// Calculate and display area
console.log(`Area: ${getArea(radius)} cm²`);

// Calculate and display volume
console.log(`Volume: ${getVolume(radius)} cm³`);
