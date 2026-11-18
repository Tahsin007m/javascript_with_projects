// ES6 Module = An external file that contaibs resuable code
//              that can be imported into other javascript apps....
//              Write ccontaian variables, classes, functions ... and more
//              Introduced as part of ECMAScript 2015 update

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);
console.log(`The circumference is ${getCircumference(10)} cm`);
console.log(`The area is ${getArea(10)} cm^2`);
console.log(`The volume is ${getVolume(10)} cm^3`);